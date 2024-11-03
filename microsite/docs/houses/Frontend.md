# Frontend

## Objective of the Page

The frontend provides a responsive and interactive interface for managing property expenses and tenant information for landlords. Users can log in to view a personalized dashboard displaying houses, expenses, invoices, and tenant payments. The system offers navigation options for adding and managing house information, viewing transaction histories, and monitoring payment statuses. It also provides sorting and filtering functionalities for expenses and tracks individual tenant payments for each expense item.

### Dashboard
- **Component**: `Dashboard`
- **Description**: Displays an overview of houses, allowing the landlord to view individual house information, add new houses, and access further details on expenses, payments, and tenants. It includes login/logout options and displays a welcome message if logged in.
- **Main Features**:
  - Houses are displayed with alternating colors for easy distinction.
  - Users can navigate to the billing page for detailed expense and payment views by clicking on a house.
  - A "Add House" button allows users to add a new house directly from the dashboard.

### Billing
- **Component**: `Billing`
- **Description**: The main page for managing and viewing house expenses and tenant payment details. It allows users to select a house to view specific expenses and payment history.
- **Main Features**:
  - Selects a house from a dropdown list.
  - Displays expenses associated with the selected house.
  - Integrates components for invoices, transactions, and tenant payment statuses.
  - Manages state for selected expenses, allowing a focused view of specific payment details.

### Transactions
- **Component**: `Transactions`
- **Description**: Displays a list of all expenses for the selected house. Users can sort and filter expenses by file name, date, document type, and more.
- **Main Features**:
  - Fetches expenses from the backend API upon house selection.
  - Allows sorting by expense type, upload date, or name.
  - Provides filter options for viewing specific types of expenses (e.g., utility or subscription).
  - Each transaction shows its title, deadline date, amount, and an option to open associated documents in a new tab.

### Invoices
- **Component**: `Invoices`
- **Description**: Manages and displays a historical list of expenses as invoices, filtered by the selected house.
- **Main Features**:
  - Filters invoices to show only those relevant to the currently selected house.
  - Each invoice displays the expense date, type, price, and a downloadable PDF link for any associated file.

### Payments
- **Component**: `Payments`
- **Description**: Provides details on tenant payment statuses for selected expenses. It shows which tenants have completed or missed payments.
- **Main Features**:
  - Displays tenant payment statuses with color coding (green for paid, red for unpaid).
  - Allows users to notify unpaid tenants via a "Notify" button.
  - Updates tenant statuses dynamically as new expense selections are made.

### Transaction
- **Component**: `Transaction`
- **Description**: Renders each transaction in the `Transactions` list with details about the expense type, amount, and an icon.
- **Main Features**:
  - Shows transaction name, description, amount, and PDF download option.
  - Displays an icon representing the transaction file (PDF) with an interactive button for opening documents in a new tab.

### Invoice
- **Component**: `Invoice`
- **Description**: Renders each invoice in the `Invoices` component with details such as the expense date, type, and price.
- **Main Features**:
  - Displays the expense type and date.
  - Shows the amount with an option to download the file as a PDF.

### Utilities
- **Component**: `SignInButton`, `SignUpButton`, `LogoutButton`
- **Description**: These components are used for authentication purposes. They redirect the user to the appropriate login, sign-up, or logout page.
  
Each of these components integrates with the backend, fetching and updating data to create a user-friendly and functional interface for managing property-related expenses and payments.
