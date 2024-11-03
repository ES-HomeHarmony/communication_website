# Backend 

## Objective of the Page

This page provides endpoints for managing landlord houses and their associated information, including adding and retrieving houses, creating expenses for houses, and managing communication through Kafka for secure authentication. The backend interacts with a database and AWS S3 for file storage.

## Functions

### 1. `create_house`
- **Path**: `/houses/create`
- **Method**: `POST`
- **Description**: Creates a new house entry for a landlord.
- **Parameters**: 
  - `HouseCreate`: Body parameter with house details.
  - `access_token`: Extracted from cookies to validate the landlord via Kafka.
- **Response**: Returns the created `House` object.
- **Exceptions**:
  - `401 Unauthorized`: If the access token is missing or landlord is unauthorized.
  - `404 Not Found`: If the landlord is not found.

### 2. `get_houses_by_landlord`
- **Path**: `/houses/landlord`
- **Method**: `GET`
- **Description**: Retrieves all houses associated with the authenticated landlord.
- **Parameters**:
  - `access_token`: Extracted from cookies to validate the landlord via Kafka.
- **Response**: Returns a list of `HouseResponse` objects for the landlord's houses.
- **Exceptions**:
  - `401 Unauthorized`: If the access token is missing.
  - `404 Not Found`: If the landlord or houses are not found.

### 3. `get_house_with_tenents`
- **Path**: `/houses/landlord/house/{house_id}`
- **Method**: `GET`
- **Description**: Retrieves a specific house by its ID and its associated tenants.
- **Parameters**: 
  - `house_id`: Path parameter indicating the specific house.
  - `access_token`: Extracted from cookies to validate the landlord via Kafka.
- **Response**: Returns an object with `house` details and a list of associated tenants.
- **Exceptions**:
  - `401 Unauthorized`: If the access token is missing.
  - `404 Not Found`: If the landlord or house is not found.

### 4. `add_expense`
- **Path**: `/houses/addExpense`
- **Method**: `POST`
- **Description**: Adds a new expense to a specific house.
- **Parameters**:
  - `expense_data`: Form parameter with details of the expense.
  - `file`: Upload parameter for attaching a file (stored in S3).
- **Response**: Returns the created `Expense` object.
- **Exceptions**:
  - `400 Bad Request`: If JSON format is invalid or credentials are missing.
  - `404 Not Found`: If S3 upload fails or other issues arise.

### 5. `get_expenses_by_house`
- **Path**: `/houses/expenses/{house_id}`
- **Method**: `GET`
- **Description**: Retrieves all expenses associated with a specific house.
- **Parameters**: 
  - `house_id`: Path parameter indicating the specific house.
- **Response**: Returns a list of `ExpenseResponse` objects for the specified house.
- **Exceptions**:
  - `404 Not Found`: If no expenses are found for the specified house.

### 6. `get_house_with_tenants_and_expenses`
- **Path**: `/houses/landlord/house/{house_id}`
- **Method**: `GET`
- **Description**: Retrieves a specific house by its ID, along with associated tenants and pending expenses.
- **Parameters**:
  - `house_id`: Path parameter indicating the specific house.
  - `access_token`: Extracted from cookies to validate the landlord via Kafka.
- **Response**: Returns an object with `house` details, associated tenants, and a list of pending expenses.
- **Exceptions**:
  - `401 Unauthorized`: If the access token is missing.
  - `404 Not Found`: If the landlord or house is not found.
