---
sidebar_position: 2
---

import Architecture from '@site/static/img/Architecture.png';

# Architecture

## 1. External Services
- **AWS Cognito**: AWS Cognito is used for **user identity and authentication management**. It provides secure logins and user registration for the platform.

## 2. Client Layer - Frontend
- **Website UI**: This is the **User Interface (UI)** layer where users directly interact with the system. In this layer, users can **create, manage, and view tasks**, track expenses and interact with other features of the application. The UI communicates with the backend services through the API Gateway, sending and receiving data to and from the various microservices.

## 3. API Gateway
- The **API Gateway** serves as the central access point for all communication between the frontend and the backend. It manages the **routing of requests to the appropriate microservices**. This layer also ensures that requests are correctly forwarded to the right microservices.

## 4. Microservices
The backend services are structured as **independent microservices**, each responsible for a specific part of the application’s functionality. Each microservice operates autonomously, communicating with its own dedicated MySQL database to ensure data consistency and separation of concerns.

- **User Service**: Handles **all operations related to user management**, such as user registration and user data storage. This service interacts with AWS Cognito for authentication and authorization processes and performs all necessary *CRUD* operations on user data.

- **Task Management Service**: This microservice is responsible for the **creation, assignment, and tracking of tasks**. It allows users to create tasks, set deadlines, assign tasks to specific household members, and track their completion. The service is also integrated with the reward system, where completed tasks earn points for users. Additionally, it communicates with the Notification Service to send task reminders.

- **Expenses Management Service**: This service handles **expense management** within the household. It allows users to track shared household expenses, divide costs among members, and confirm payments. It also supports uploading receipts or bills for expenses. This service integrates with the Notification Service to send alerts about due or confirmed payments, ensuring transparency in financial matters.

- **Notification Service**: Responsible for sending **notifications** to users via email. This service communicates with all other microservices (e.g., Task Management and Expenses Management) to provide timely updates to users about new tasks, upcoming deadlines, expense notifications, or other important events. This ensures users are always informed about their responsibilities.

## 5. Message Queue
- The **Message Queue** plays a critical role in ensuring **asynchronous communication** between the microservices. It handles background processing of tasks such as sending notifications or updating statuses. This architecture ensures that even under heavy load, no data is lost, and all operations are eventually processed.

# Architecture Diagram
<img src={Architecture} alt="Architecture" width="700"/>

