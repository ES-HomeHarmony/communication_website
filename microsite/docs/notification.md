---
sidebar_position: 10
---

# Notifications

# Kafka Email Notification Service

This section describes the implementation of a Kafka-based email notification service. The service listens to specific Kafka topics, processes incoming messages, and sends personalized email notifications using predefined HTML templates.




## Features

### 1. Kafka Consumer
- **Description**: Listens to messages on the `invite-request` topic.
- **Functionality**:
  - Processes events such as:
    - **User Invitations**: Sends an invitation email to the specified user.
  - Deserializes messages in JSON format for processing.



### 2. Email Personalization
- **Description**: Dynamically customizes email templates based on the message type.
- **Implementation**:
  - Loads HTML templates from the `templates` directory.
  - Substitutes placeholders (e.g., `{{name}}`, `{{house_name}}`) with data provided in Kafka messages.
  - Supports multiple templates for different notification types:
    - `invite.html`: For user invitations.



### 3. Email Sending
- **Description**: Handles the sending of emails using the SMTP protocol.
- **Functionality**:
  - Retrieves SMTP configuration from environment variables.
  - Connects to the SMTP server, authenticates, and sends the email.
  - Ensures security by using TLS for email transmission.


### 4. Thread Management
- **Description**: Runs the Kafka consumer in a separate thread to avoid blocking the main application.
- **Execution**:
  - The thread is initialized during the application startup (`@app.on_event("startup")`).

---

## Message Examples

### Kafka Message: User Invitation
```json
{
  "action": "create_user",
  "user_data": {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```
