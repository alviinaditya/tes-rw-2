# tes-frontend-2 (with Composables)

PREVIEW : https://tes-rw-2-with-composables.netlify.app/

## Description

This branch follows a modular folder structure and uses Composables for reusable logic. It also use `<Suspense />` to handle loading state for async components.

## Project Structure

```
📦src
 ┣ 📂api
 ┃ ┗ 📜index.js
 ┣ 📂assets
 ┃ ┣ 📜base.css
 ┃ ┣ 📜logo.svg
 ┃ ┗ 📜main.css
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜Button.vue
 ┃ ┃ ┣ 📜ButtonLink.vue
 ┃ ┃ ┣ 📜Card.vue
 ┃ ┃ ┣ 📜Input.vue
 ┃ ┃ ┣ 📜Loader.vue
 ┃ ┃ ┣ 📜SelectOptions.vue
 ┃ ┃ ┣ 📜Table.vue
 ┃ ┃ ┣ 📜TextArea.vue
 ┃ ┃ ┗ 📜Toast.vue
 ┃ ┣ 📜LoadingScreen.vue
 ┃ ┗ 📜Navbar.vue
 ┣ 📂composables
 ┃ ┣ 📜useCategories.js
 ┃ ┣ 📜useData.js
 ┃ ┣ 📜useDepartments.js
 ┃ ┗ 📜useFetch.js
 ┣ 📂router
 ┃ ┗ 📜index.js
 ┣ 📂stores
 ┃ ┣ 📜auth.js
 ┃ ┗ 📜toast.js
 ┣ 📂views
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜LoginView.vue
 ┃ ┗ 📂dashboard
 ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┣ 📜CreateCategoryView.vue
 ┃ ┃ ┃ ┗ 📜ListCategoryView.vue
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📜CreateDataView.vue
 ┃ ┃ ┃ ┣ 📜ListDataView.vue
 ┃ ┃ ┃ ┗ 📜UpdateDataView.vue
 ┃ ┃ ┣ 📂department
 ┃ ┃ ┃ ┗ 📜ListDepartmentView.vue
 ┃ ┃ ┣ 📂qa
 ┃ ┃ ┃ ┗ 📜QAView.vue
 ┃ ┃ ┗ 📜DashboardView.vue
 ┣ 📜App.vue
 ┗ 📜main.js
```

## Feature

- **Login**: authentication page to log in to the application
- **Dashboard**: the main page of the application, displaying the department section
- **List Data**: page to display and manage data
- **Create Data**: page to create new data
- **Update Data**: page to update existing data
- **List Category**: page to display and manage categories
- **Create Category**: page to create new categories
- **QA**: page to ask questions and show answers
- **Logout**: button to log out from the application

## Run project locally

To run this application locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/alviinaditya/tes-rw-2.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd tes-rw-2
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Add Environment Variables**

   Create a `.env` file in the root of the project and add the following environment variables:

   ```bash
   VITE_API_URL = API_URL_HERE
   ```

5. **Start the Development Server**

   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

---
