# Exercise: JS Exercises - 4
# Project: Employee Management System

This project is a web application for managing employee records. It allows users to add, view, update, delete, and search for employees. The application features form validation, dynamic table updates, and calculations based on employee data.

## Live Demo:
[Click here](https://js-basic-qlnv.vercel.app/)

## Table of Contents

- [Project: Employee Management System](#project-employee-management-system)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Customization](#customization)
  - [Contributing](#contributing)

## Project Structure

The project is organized into the following main files and directories:

-   **`README.md`**: This documentation file.
-   **`index.html`**: The main HTML file containing the structure of the application, including the employee table, search bar, buttons, and the modal form for adding/editing employees. Uses Bootstrap 4 for layout and components.
-   **`js/`**: Directory containing JavaScript files.
    -   **`index.js`**: Contains the core JavaScript logic for employee management, including the `NhanVien` (Employee) class, functions for CRUD operations (Create, Read, Update, Delete), form validation, calculations (total salary, rank), event handling, and DOM manipulation.
    -   **`jquery.min.js`**, **`popper.min.js`**, **`bootstrap.min.js`**: Standard libraries for Bootstrap 4 functionality.
    -   **`jquery-ui.js`**, **`datepicker.js`**: Libraries and custom script for the date picker functionality.
-   **`css/`**: Directory containing CSS files.
    -   **`bootstrap.min.css`**: Bootstrap 4 core CSS.
    -   **`jquery-ui.min.css`**: CSS for jQuery UI components (like the datepicker).
    -   **`modal.css`**, **`style4.css`**, **`main.css`**: Custom CSS files for additional styling and overrides.
-   **Font Awesome** (via CDN): Used for icons throughout the user interface.

## Technologies Used

-   **HTML5**: For structuring the web page content.
-   **CSS3**: For styling the application, including custom styles in `modal.css`, `style4.css`, and `main.css`.
-   **JavaScript (ES5/ES6)**: For implementing the application logic, including:
    -   Object-Oriented Programming (Employee class).
    -   DOM manipulation for dynamic content updates.
    -   Event handling for user interactions (button clicks, form submissions).
    -   Form validation.
    -   Array manipulation for managing the employee list.
-   **Bootstrap 4**: For responsive layout, styling components (table, modal, buttons, input groups), and base CSS.
-   **jQuery**: Used for simplifying DOM manipulation and event handling, and as a dependency for Bootstrap JS and jQuery UI.
-   **jQuery UI**: Used specifically for the Datepicker widget in the employee form.
-   **Font Awesome 4.7.0**: For icons to enhance the user interface.

## Features

The project includes the following employee management features:

-   **Add Employee:** Allows adding new employees through a modal form with input validation.
-   **View Employees:** Displays the list of employees in a structured table.
-   **Update Employee:** Allows editing the details of an existing employee via the same modal form (pre-filled with existing data). The employee account (`tknv`) field is disabled during editing.
-   **Delete Employee:** Allows removing an employee from the list.
-   **Search Employee:** Filters the employee list based on their calculated rank/classification (e.g., "Xuất sắc", "Giỏi").
-   **Input Validation:** Validates all form fields before adding or updating an employee, providing user feedback for errors (e.g., account length, name format, email format, password complexity, date format, salary range, position selection, working hours range).
-   **Calculate Total Salary:** Automatically calculates the total salary based on the employee's base salary and position (`Sếp`, `Trưởng phòng`, `Nhân viên`).
-   **Classify Employee:** Automatically classifies employees based on their monthly working hours ("Xuất sắc", "Giỏi", "Khá", "Trung bình").
-   **Dynamic Table:** The employee list table updates dynamically without page reloads after adding, updating, deleting, or searching.
-   **Date Picker:** Uses jQuery UI for easy date selection in the form.
-   **Responsive Design:** Utilizes Bootstrap for a layout adaptable to different screen sizes.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [repository URL]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [project directory name]
    ```
3.  **Open `index.html` in your web browser.**

    The application should now be running locally in your browser, allowing you to manage the employee list.

## Customization

-   **Styles:** Modify files within the `css/` directory (especially `main.css`, `style4.css`, `modal.css`) to change the appearance, colors, fonts, or layout.
-   **Logic:** Update the JavaScript logic within `js/index.js` to modify validation rules, calculation methods, add new features, or change how data is handled.
-   **HTML Structure:** Adjust the HTML structure in `index.html` to modify the layout, form fields, table columns, or integrate different Bootstrap components.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them with clear messages (`git commit -m 'Add some feature'`).
4.  Push your changes to your fork (`git push origin feature/your-feature-name`).
5.  Submit a pull request to the original repository.
