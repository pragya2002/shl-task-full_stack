# Full Stack Task - SHL

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Description

This is an end-to-end application that allows users to explore information extracted from various project descriptions. Users can view project details in a gallery view, a list view, and perform specific project searches. The application also includes smart search functionality using Hugging Face for multi-attribute searches. Link to application working: https://www.loom.com/share/73725ce2e3f340718324cf1515c8f756?sid=3d222090-402a-429c-abfb-e49ab535f73e

## Features

- **Database Integration**: Project details from a sample of 100 projects are loaded into a database, and backend APIs provide access to this data on the frontend.

- **Gallery View**: Displays all projects in a visually appealing gallery view or tiles, making it easy to get an overview of all the projects.

- **List View**: Allows users to explore detailed project information by clicking on individual projects.

- **Search Functionality**: Provides a search feature for finding specific projects. Optionally, smart search using Hugging Face enables multi-attribute searches. For example, users can find projects where ReactJS is used in the front-end, and Python is used in the backend.

- **Responsive Design**: The application is responsive, ensuring it works seamlessly on different screen sizes, including mobile devices.

## High-level Sketches

These sketches provide a visual representation of the application's user interface:

1. **Gallery View**: Displaying all the projects in a gallery view.

2. **Project Details View**: Ability to click on any project to see detailed information.

3. **Search Functionality**: Ability to search using free-form queries on project information, including smart search with multi-attribute capabilities.

## Technologies

The following technologies are used for building this application:

### Frontend: React.js is preferred for the frontend due to its flexibility and rich ecosystem.


### Backend:

- **Node.js**: 
  - **Task**: Node.js is the runtime environment for the server-side application.
  
- **Express.js**: 
  - **Task**: Express.js is a web application framework used for building APIs and handling HTTP requests.

- **PostgreSQL**: 
  - **Task**: PostgreSQL is an open-source relational database management system.
  - **Role**: It is used to store project records sourced from the specific Excel file.

- **MySQL (SingleStore)**: 
  - **Task**: MySQL, hosted on SingleStore, is used to store vector embeddings.
  - **Role**: It serves as the database for storing numerical representations (vector embeddings) generated by the Hugging Face inference API.

- **Hugging Face Inference API**: 
  - **Task**: The Hugging Face Inference API is used for natural language processing and machine learning tasks.
  - **Role**: It generates vector embeddings for each project record, creating numerical representations of text data.
 
  I have developed a Node.js API that interacts with a PostgreSQL database. This database holds project records sourced from a specific Excel file. The API has a designated route that enables it to retrieve all the records stored in the PostgreSQL database.
  In tandem with this, a React application leverages this API route to showcase these records to users when they visit the website. The user interface includes a search bar feature that empowers users to search for specific records within the dataset.
  For this purpose, the API also incorporates a separate route. When a user submits a query through the search bar, this route is activated. It communicates with the Hugging Face inference API, which plays a key role in generating vector embeddings for each project record. These embeddings, essentially numerical representations, are then stored in a MySQL vector database hosted on 'SingleStore', a database management system.
  Now, when a user submits a request to filter records based on the search bar input, the API employs the inference API once more. This time, it creates vector embeddings for the provided input. These embeddings are then compared to those of the existing records to determine which ones are semantically closest to the input. These selected records are then sent back to the React app for display on the client side.


### Frontend

- **React**: 
  - **Task**: React is a JavaScript library for building user interfaces.
  - **Role**: It is used to create the user interface for showcasing project records and enabling user interactions.

- **React Router**: 
  - **Task**: React Router is used for handling routing within the React application.
  - **Role**: It enables navigation and ensures that the appropriate components are displayed for different routes.

- **Axios**: 
  - **Task**: Axios is a JavaScript library for making HTTP requests.
  - **Role**: It is used to send HTTP requests to the Node.js API to fetch project records and search results.

## Additional Tools

- **Excel**: 
  - **Task**: Excel is used for sourcing project records from a specific Excel file.
  - **Role**: It serves as the initial data source for the project records.

- **Git**: 
  - **Task**: Git is a version control system.
  - **Role**: It tracks changes in your codebase and facilitates collaboration and version management.

- **GitHub**: 
  - **Task**: GitHub is a web-based platform for hosting and collaborating on Git repositories.
  - **Role**: It provides a centralized repository for your project's codebase, enabling collaboration and version control.




## Getting Started

To set up and run the application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pragya2002/shl-task-full_stack.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shl-task-full_stack.git
   ```

3. Set up the backend to load project data into the chosen database and implement the required APIs.

