# Backend 

## Objective of the Page

This page provides endpoints for managing tenants within a landlord's house. It includes creating tenants associated with specific houses and retrieving tenant details.

## Functions

### 1. `create_tenent`
- **Path**: `/houses/tenents`
- **Method**: `POST`
- **Description**: Creates a new tenant entry associated with a specified house.
- **Parameters**:
  - `TenentCreate`: Body parameter with tenant details, including the house ID, rent amount, and tenant ID.
- **Response**: Returns the created `Tenent` object.
- **Exceptions**:
  - `400 Bad Request`: If the data format is invalid.

### 2. `get_house_with_tenants_and_expenses`
- **Path**: `/houses/landlord/house/{house_id}`
- **Method**: `GET`
- **Description**: Retrieves a specific house by its ID, along with associated tenants and any pending expenses.
- **Parameters**:
  - `house_id`: Path parameter indicating the specific house.
  - `access_token`: Extracted from cookies to validate the landlord via Kafka.
- **Response**: Returns an object with `house` details, associated tenants, and a list of pending expenses.
- **Exceptions**:
  - `401 Unauthorized`: If the access token is missing.
  - `404 Not Found`: If the landlord or house is not found.
