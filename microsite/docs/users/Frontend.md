# Frontend

## Objective of the Page

The user profile management page allows authenticated users to view, update, and save their profile details, such as name, email, and role. The interface offers a responsive layout with real-time feedback on form submission results, either confirming successful updates or displaying error messages. The user-friendly design ensures a smooth and straightforward experience for managing personal information.

### Overview
- **Component**: `Overview`
- **Description**: This component displays and manages user profile information, allowing updates to fields like name, email, and role. Changes are submitted to the backend for validation and updating.
- **Main Features**:
  - **User Profile Fetching**: Retrieves and displays user data from the backend API.
  - **Snackbar for Notifications**: Shows success or error messages to confirm update status.
  - **Edit and Save Buttons**: Users can edit and save profile information.
  - **Form Validation**: Checks for valid input and authorization before submission.
  - **Loading State**: Displays a loading indicator while the profile information is being fetched.

### Profile Data Fetching
- **Function**: `fetchUserProfile`
- **Description**: Fetches the user profile information upon component mount, setting the `profile` state with retrieved data (e.g., `name`, `email`, `role`).
- **Endpoint**: `http://localhost:8001/user/profile`
- **Error Handling**: Logs and sets a loading error if fetching fails.

### Form Handling
- **Function**: `handleChange`
- **Description**: Updates the profile state dynamically as the user types, allowing for responsive form behavior.
- **Properties**: Updates fields in `profile` (like `name`, `email`, `role`) based on user input.
  
### Profile Update Submission
- **Function**: `handleSubmit`
- **Description**: Submits updated profile information to the backend. Requires an access token for authorization.
- **Endpoint**: `http://localhost:8000/user/profile/update`
- **Error Handling**:
  - **Success**: Shows a success message using `Snackbar`.
  - **Failure**: Displays an error message via `Snackbar`.
- **Headers**: Sends `Authorization` header with access token to authenticate the request.

### Snackbar Notifications
- **Component**: `Snackbar` and `Alert`
- **Description**: Provides real-time feedback for the user upon successful or failed profile updates. It displays messages like “Profile updated successfully” or “Failed to update profile.”
- **Configuration**:
  - **Auto-hide**: Closes automatically after 6 seconds.
  - **Severity**: Can be set to either "success" or "error" based on the result of the profile update.
  
### User Interface Elements
- **Components**: `TextField`, `Button`, `Divider`
- **Description**: 
  - **TextField**: Allows editing of `name`, `email`, and other user details.
  - **Edit Button**: Provides an outline for previewing changes.
  - **Save Changes Button**: Submits form data to update the user profile.

### PlatformSettings
- **Component**: `PlatformSettings`
- **Description**: Offers additional configuration options related to the user’s profile. The exact settings can be customized based on the platform's requirements.

### Header and Footer Integration
- **Components**: `DashboardNavbar`, `Footer`
- **Description**: Maintains a consistent user interface with navigation and footer across the application, providing access to other areas and maintaining layout uniformity.

### User Authentication and Access Control
- **Access Token**: 
  - Retrieves and uses an access token from `localStorage` for user authorization during updates.
  - Ensures only authenticated users can update profile information by verifying the access token’s presence before sending an update request.

This profile management page is part of the frontend, handling all user interactions with the profile data in an intuitive and structured way, ensuring a seamless experience for viewing and updating user information.
