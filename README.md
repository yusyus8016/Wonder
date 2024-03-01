
# Welcome to Wonder Wander World!

Welcome to **Wonder Wander World**, your go-to app for exploring and managing country information effortlessly. Whether you're curious about a specific country, want to create new country entries, or manage existing ones, we've got you covered!

## Table of Contents
- [Description](#description)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Description

### CountryForm Component
The `CountryForm` component is a crucial part of Wonder Wander World. It allows users to input a country code, query country information from an API, display the retrieved data, and create new country entries. The component features form fields for inputting a country code, buttons for querying and creating country data, and fields for displaying information like country code, name, language, and continent. It also includes functions for handling input changes, clearing input fields, querying country data from an API, and creating country data via a POST request using Axios.

### SideBar Component
The `SideBar` component manages a sidebar navigation system with buttons for easy navigation. It includes a sidebar layout with a logo and navigation links for Home, Create Country, and Manage Country. Each navigation link is a button wrapped in a Link component from react-router-dom. The `selectedButton` state is utilized to highlight the active button in the sidebar.

### SearchBar Component
The `SearchBar` component is a functional component that renders a search bar with an input field for searching countries and a button to trigger the search. The component also includes a list of continents that can be filtered by clicking on them.

### CountryManagementForm Component
The `CountryManagementForm` component enables users to query, update, and modify country information through an API with error handling using SweetAlert. It features a form for querying country data based on a country code, displaying and modifying the information of the queried country, and options to clear the input fields or update the country data. The form includes input fields for country code, name, language, continent, capital, and currency. The component utilizes Axios for making API requests for querying and updating country data.

### Alert Component
The `Alert` component displays information about a country using SweetAlert2 pop-up and triggers a callback function to show more details when clicked.

### Countries Component
The `Countries` component fetches data about countries using Apollo Client, displays country information with images, and allows users to view details about each country. It is a React functional component that fetches data using Apollo Client, displays a list of countries with their information, and allows users to click on a country to view more details using SweetAlert. The component also includes a search bar component.

## Project Structure

```
└── 📁Wonder.Wander.World
    └── .gitignore
    └── 📁api-country
        └── .env
        └── 📁controllers
            └── Country.controller.js
        └── 📁graphic
            └── .$base_de_datos.drawio.bkp
            └── .$base_de_datos.drawio.dtmp
            └── base_de_datos.drawio
            └── base_de_datos.jpg
        └── index.js
        └── 📁models
            └── Country.js
        └── package-lock.json
        └── package.json
        └── README.md
    └── package-lock.json
    └── package.json
    └── 📁public
        └── favicon.ico
        └── index.html
        └── logo192.png
        └── logo232.png
        └── logo512.png
        └── manifest.json
        └── Recurso 1WonderLogo3x.png
        └── Recurso 1WonderLogo4x.png
        └── robots.txt
    └── README.md
    └── 📁src
        └── App.css
        └── App.js
        └── App.test.js
        └── 📁components
            └── 📁alert
                └── Alert.css
                └── Alert.js
            └── 📁crudCountry
                └── CountryCreationForm.css
                └── CountryCreationForm.jsx
                └── CountryManagementForm.css
                └── CountryManagementForm.jsx
            └── 📁serchBar
                └── Continents.css
                └── Continents.jsx
                └── SearchBar.css
                └── SearchBar.jsx
            └── 📁sideBar
                └── Router.js
                └── SideBar.css
                └── SideBar.jsx
            └── 📁urls
                └── Countries.css
                └── Countries.jsx
        └── index.css
        └── index.js
        └── logo.svg
        └── reportWebVitals.js
        └── setupTests.js
        └── WonderLogo.svg
```

## Getting Started

To get started with **Wonder Wander World**, follow these steps:

1. Clone the repository.
2. Navigate to the `api-country` directory and create a `.env` file with the necessary environment variables. (`MONGODB_URL = mongodb+srv://admin:admin123@cluster0.pdl7x4a.mongodb.net/country?retryWrites=true&w=majority`)
3. Install dependencies by running `npm install` in both the root and `api-country` directories.
4. Start the development server by running `npm start`.

## Usage

Once the development server is running, open your browser and go to the specified address to start using **Wonder Wander World**. Explore countries, manage country information, and enjoy a seamless user experience!



### Collaborators
- [Creator125](https://github.com/Creator125)
- [sgb06](https://github.com/sgb06)
- [yusyus8016](https://github.com/yusyus8016)
- [LordShadow98](https://github.com/LordShadow98)