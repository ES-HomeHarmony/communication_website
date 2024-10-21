---
sidebar_position: 5
---

# AWS Cognito

This document explains the step-by-step process of configuring AWS Cognito and connecting the React frontend with the Identity Provider (IDP). The implementation involves setting up AWS Cognito for user authentication and handling the JWT tokens in the React application.

## Cognito Configuration

### 1. Create a User Pool
To start, we need to create a User Pool in AWS Cognito to manage user sign-up, sign-in, and authentication. 

- **Step 1**: Navigate to AWS Cognito in the AWS Management Console.
- **Step 2**: Create a new User Pool by clicking **"Create a User Pool"**.
- **Step 3**: Configure the User Pool with the following settings:
  - Allow email addresses as the primary identifier for users.
  - Set password policy as needed (e.g., minimum length, character requirements).
  - Enable Multi-Factor Authentication (optional).
- **Step 4**: Click **"Next"** and complete the creation process.

### 2. Configure App Client
After creating the User Pool, you need to create an App Client for the frontend to interact with Cognito.

- **Step 1**: In your Cognito User Pool, go to **App Clients** and click **"Add an App Client"**.
- **Step 2**: Disable the **Generate client secret** option (as it is not recommended for public-facing applications like React).
- **Step 3**: Specify the OAuth 2.0 flows that will be used. Enable the following:
  - Authorization code grant
  - Implicit grant (to obtain `id_token` and `access_token`)
- **Step 4**: Save the App Client configuration.

### 3. Configure App Client Settings
Now, configure the App Client to integrate with your React frontend.

- **Step 1**: In the **App client settings** section, enable **Cognito User Pool** as an identity provider.
- **Step 2**: Set the **Callback URL** to the URL of your React application (e.g., `http://localhost:3000`). This is where Cognito will redirect users after they log in.
- **Step 3**: Set the **Sign-out URL** to the same React application URL (e.g., `http://localhost:3000`).
- **Step 4**: Select the OAuth 2.0 scopes you want (e.g., `openid`, `email`, `profile`).
- **Step 5**: Save the settings.

### 4. Domain Setup
Cognito requires a custom domain for hosting the sign-in/sign-up pages (Hosted UI).

- **Step 1**: In the **Domain name** section of the User Pool, choose a domain prefix (e.g., `your-app-domain`).
- **Step 2**: AWS will provide a domain in the format `your-app-domain.auth.region.amazoncognito.com`.
- **Step 3**: Save the domain configuration.

## Frontend Configuration

Now that Cognito is configured, we need to connect the frontend React application to the AWS Cognito User Pool. This involves redirecting users to the AWS Cognito Hosted UI for authentication and processing the returned JWT tokens.

### 1. Redirect Users to Cognito Hosted UI

In your React application, create a button to redirect users to the Cognito Hosted UI for login or sign-up.

```javascript
const handleLogin = () => {
  const domain = "your-app-domain.auth.region.amazoncognito.com";
  const clientId = "your-client-id";
  const redirectUri = window.location.origin; // e.g., http://localhost:3000

  window.location.href = `https://${domain}/login?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;
};
```

- The user is redirected to the Cognito Hosted UI for authentication.
- Upon successful login, Cognito will redirect the user back to the `redirectUri` with the JWT tokens.

### 2. Handling Redirect and JWT Tokens

Once the user logs in, AWS Cognito will redirect them back to your React application with the tokens included in the URL as hash fragments (e.g., `#id_token=...&access_token=...`).

Use the following code in your React component to extract and store the tokens:

```javascript
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const params = new URLSearchParams(hash.substring(1));
    const idToken = params.get('id_token');
    const accessToken = params.get('access_token');

    if (idToken && accessToken) {
      localStorage.setItem('id_token', idToken);
      localStorage.setItem('access_token', accessToken);
    }
  }
}, []);
```

- The tokens (`id_token` and `access_token`) are stored in `localStorage` for later use in API requests.

## Handling JWT Tokens

Once the tokens are stored, you can use them to make authenticated requests to your backend API by including the `access_token` in the `Authorization` header.

Example of making an authenticated request:

```javascript
const token = localStorage.getItem('access_token');

fetch('/api/protected-endpoint', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

- The backend can then validate the `access_token` to ensure that the user is authenticated.

## Conclusion

This setup provides an authentication flow for your React application using AWS Cognito without the need for Amplify. It covers user redirection to the AWS Cognito Hosted UI, handling of JWT tokens, and making authenticated API requests.

By following these steps, you will have a working authentication system in your React application connected to AWS Cognito, ensuring secure access to your resources.