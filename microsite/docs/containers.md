---
sidebar_position: 7
---

# Microservices Container Organization

## Objective

This document explains the organization and interaction between containers for each microservice and should provide clear guidance on system architecture and deployment.

## Microservices Overview

### 1. House Management Microservice
- **Purpose**: Manages all aspects related to house data, including adding, updating, and retrieving house information and associated expenses.
- **Database**: This service uses a dedicated MySQL database (`house_db`) to store house and expense information.
- **Communication**: 
  - Publishes and listens to topics in Kafka to coordinate with other microservices, particularly for validating user actions.
  - Listens to the `user-validation-response` topic for responses regarding user validation.

### 2. User Management Microservice
- **Purpose**: Manages user-related information, including authentication, authorization, and profile updates.
- **Database**: This service has its own MySQL database (`user_db`) for securely storing user data.
- **Communication**:
  - Publishes user validation requests to Kafka for other services that require user information.
  - Responds on the `user-validation-response` topic to confirm the user’s identity and permissions when requested by other services.

## Communication Between Microservices

The **House Management** and **User Management** microservices communicate indirectly through Kafka, which acts as a message broker, enabling asynchronous and decoupled interactions. 

### Kafka Communication Workflow

1. **User Validation Request**: 
   - The House Management service publishes a message to the `user-validation-request` topic, asking the User Management service to validate a user based on their token or credentials.
   
2. **User Validation Response**:
   - The User Management service listens to `user-validation-request`, processes the validation request, and then publishes the result to the `user-validation-response` topic.
   - The House Management service listens to this topic to receive the validation result and proceed with the requested operation if the user is validated successfully.

### Kafka Topics
- **`user-validation-request`**: Used by the House Management service to request user validation.
- **`user-validation-response`**: Used by the User Management service to respond with validation results.

## Container Organization

Each microservice, database, and Kafka broker is containerized, allowing for easy deployment and scaling. Below is the organization of each component:

### Docker Compose Structure

1. **House Management Service**:
   - Container Name: `house_service`
   - Image: Custom-built from the `house_service` Dockerfile.
   - Environment Variables: Configured to connect to Kafka and its MySQL database.
   - Database: `house_db`, a MySQL container instance dedicated to the House Management microservice.

2. **User Management Service**:
   - Container Name: `user_service`
   - Image: Custom-built from the `user_service` Dockerfile.
   - Environment Variables: Configured to connect to Kafka and its MySQL database.
   - Database: `user_db`, a MySQL container instance dedicated to the User Management microservice.

3. **Kafka and Zookeeper**:
   - **Kafka**:
     - Container Name: `kafka_broker`
     - Purpose: Acts as the message broker for communication between services.
   - **Zookeeper**:
     - Container Name: `zookeeper`
     - Purpose: Manages the Kafka broker to maintain distributed configurations.

### Environment Variables

Each microservice container is configured with environment variables to ensure connectivity and security. Key variables include:
- **Database Connections**: Host, port, user, password, and database name for connecting to MySQL.
- **Kafka Connections**: Broker URL for establishing Kafka communication.
- **Service-Specific Variables**: Custom configurations, such as API keys and service ports.

## High-Level Architecture Diagram

```plaintext
                        ┌─────────────────────────┐
                        │                         │
                        │    Kafka Broker         │
                        │    (Message Queue)      │
                        │                         │
                        └─────────┬───────────────┘
                                  │
               ┌──────────────────┼────────────────────┐
               │                  │                    │
               │                  │                    │
 ┌─────────────┴────────────┐ ┌───┴──────────────┐ ┌───┴──────────────┐
 │  House Management        │ │ User Management  │ │ Zookeeper        │
 │  Microservice            │ │ Microservice     │ │                  │
 │  - Manages houses        │ │ - Manages users  │ │ Manages Kafka    │
 │  - MySQL `house_db`      │ │ - MySQL `user_db`│ │ coordination     │
 └──────────────────────────┘ └──────────────────┘ └──────────────────┘
