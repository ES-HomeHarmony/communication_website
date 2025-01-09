---
sidebar_position: 10
---

# Notification Service

## Kafka Email Notification Service

Esta seção descreve a implementação de um serviço de notificação por e-mail baseado em Kafka. O serviço escuta tópicos específicos no Kafka, processa mensagens recebidas e envia notificações por e-mail personalizadas utilizando templates HTML pré-definidos.

---

## Funcionalidades

### 1. Kafka Consumer
- **Descrição**: Escuta mensagens no tópico `invite-request` e outros relacionados a eventos no sistema.
- **Funcionalidade**:
  - Processa eventos como:
    - **Criação de usuário**: Envia um e-mail de boas-vindas para o usuário convidado.
    - **Envio de contrato**: Notifica o usuário sobre o upload de um contrato.
    - **Despesa criada**: Informa os usuários sobre uma nova despesa associada a uma casa.
    - **Nova issue**: Notifica os usuários sobre problemas reportados.
    - **Pagamento de inquilino**: Confirma o pagamento recebido de um inquilino.
  - Desserializa mensagens no formato JSON para processamento.

---

### 2. Personalização de E-mails
- **Descrição**: Personaliza dinamicamente os templates de e-mail com base nos dados recebidos via Kafka.
- **Implementação**:
  - Carrega templates HTML da pasta `templates`.
  - Substitui placeholders (como `{{name}}`, `{{house_name}}`, etc.) com dados específicos contidos nas mensagens.
  - Suporta múltiplos templates para diferentes tipos de notificações:
    - `invite.html`: Para convites de usuário.
    - `contract.html`: Para notificações de upload de contrato.
    - `expense.html`: Para notificações de criação de despesas.
    - `issue.html`: Para notificações de issues criadas.
    - `tenant_payment.html`: Para notificações de pagamento de inquilino.

---

### 3. Envio de E-mails
- **Descrição**: Gerencia o envio de e-mails utilizando o protocolo SMTP.
- **Funcionalidade**:
  - Recupera as configurações SMTP das variáveis de ambiente.
  - Conecta-se ao servidor SMTP, autentica e envia o e-mail.
  - Garante segurança utilizando TLS durante a transmissão.

---

### 4. Gerenciamento de Threads
- **Descrição**: Executa o consumidor Kafka em uma thread separada para evitar bloqueios na aplicação principal.
- **Execução**:
  - A thread é inicializada no evento de inicialização da aplicação (`@app.on_event("startup")`).

---

## Exemplos de Mensagens

### Kafka Message: Convite de Usuário

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

### Kafka Message: Upload de Contrato
```json
{
  "action": "upload_contract",
  "user_data": {
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
}
```

### Kafka Message: Despesa Criada
```json
{
  "action": "expense_created",
  "expense_details": {
    "title": "Aluguel Mensal",
    "amount": 1200.00,
    "description": "Aluguel referente ao mês de janeiro.",
    "deadline_date": "2025-01-15"
  },
  "users": [
    {
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
}
```

### Kafka Message: Nova Issue
```json
{
  "action": "new_issue",
  "issue": {
    "title": "Conserto de encanamento",
    "description": "Vazamento no banheiro",
    "status": "Aberto",
    "priority": "Alta"
  },
  "house_name": "Residência Central",
  "tenant_name": "Carlos Silva",
  "users": [
    {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  ]
}
```

### Kafka Message: Pagamento de Inquilino
```json
{
  "action": "tenant_paid",
  "name": "Maria Oliveira",
  "email": "maria.oliveira@example.com",
  "tenant_name": "Carlos Silva",
  "expense_name": "Aluguel Mensal",
  "amount": 1200.00,
  "house_name": "Residência Central"
}
```

---

## Detalhes Adicionais
- **Diretório de Templates**: Todos os templates HTML são armazenados no diretório `templates`. Certifique-se de que os arquivos de template correspondam aos placeholders esperados no código.
- **Variáveis de Ambiente**:
  - `KAFKA_BOOTSTRAP_SERVERS`: Endereço dos servidores Kafka.
  - `SMTP_HOST`: Endereço do servidor SMTP.
  - `SMTP_PORT`: Porta do servidor SMTP.
  - `SMTP_USER`: Usuário para autenticação SMTP.
  - `SMTP_PASS`: Senha para autenticação SMTP.
