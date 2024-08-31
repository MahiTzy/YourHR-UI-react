# YourHR Frontend Service (React + Vite)

## Table of Contents

1. [Overview](#overview)
2. [Demo](#demo)
3. [Architecture](#architecture)
4. [Project Structure](#project-structure)
5. [State Management](#state-management)
6. [Routing](#routing)
7. [Form Handling](#form-handling)
8. [Running the Application](#running-the-application)

## Overview

The frontend of the **YourHR** application is built using **React** and **Vite**. It provides a user interface for job seekers to submit their information and receive a confirmation upon successful submission. The application is designed to be lightweight, responsive, and easy to use.

## Demo

### Home Page
![Screenshot 2024-08-31 at 11-22-57 Home](https://github.com/user-attachments/assets/55bce9fa-f22d-41e7-9b1a-dde4ec55cddb)

### SignUp Page
![Screenshot 2024-08-31 at 11-23-08 Signup](https://github.com/user-attachments/assets/5820a892-25ef-4640-9bf7-cca6f5ba48b4)

### Success Page
![Screenshot 2024-08-31 at 11-23-41 Success](https://github.com/user-attachments/assets/bb7f8033-1936-4a2f-bf24-7136af06a671)

## Architecture

The frontend architecture is organized in a component-based structure:

- **Pages**: Higher-level components that represent different views (e.g., Signup and Confirmation).
- **Services**: Handle API calls and business logic (e.g., `saveUser` function).
- **Routing**: Managed using React Router to navigate between pages.

## Project Structure

```
/src
|-- assets
|-- components
|   |-- Header.js
|   |-- FormComponent.js
|   |-- ConfirmationComponent.js
|-- pages
|   |-- SignupPage.js
|   |-- ConfirmationPage.js
|-- services
|   |-- api.js
|-- App.js
|-- main.jsx
```

## State Management

State is managed using React Hooks (`useState`, `useEffect`). Each page component manages its own state to keep track of form data, submission status, and errors.

## Routing

Routing is managed using **React Router**. The `App.js` file defines routes for the Signup and Confirmation pages.

### Example Routes

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Form Handling

Form handling is done using controlled components and a form submit handler that makes an API call to the backend.

#### Example Form Submission

```jsx
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await saveUser(formData);
        navigate('/confirmation');
    } catch (error) {
        setError('Failed to submit the form. Please try again.');
    }
};
```

## Error Handling

Errors are displayed to the user using Bootstrap's Alert component, providing feedback when form submission fails.

## Running the Application

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/MahiTzy/YourHR-UI-react.git
   cd YourHR-UI-react
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   The frontend application should now be running on `http://localhost:5173`.
