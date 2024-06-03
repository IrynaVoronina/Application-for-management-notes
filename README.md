# Application-for-management-notes


## Overview

This project is a full-stack web application built with modern technologies. It leverages React on the frontend and Java 17 with Spring Boot 3.3 on the backend, along with MongoDB as the database.

## Technology stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for routing in React-based web applications.
- **Bootstrap**: CSS framework for developing responsive web interfaces.
- **SASS/SCSS**: CSS preprocessor for organizing and maintaining CSS code.
- **Cypress**: Framework for automated testing of web applications.

### Backend

- **Java 17**: Object-oriented programming language.
- **Spring Boot 3.3**: Framework for building Java-based enterprise applications.
- **MongoDB**: NoSQL database system.


## Installation and Setup

### Backend

1. Clone the repository:
    ```sh
    git clone <repository URL>
    cd <repository folder name>/backend
    ```

2. Install dependencies:
    ```sh
    mvn install
    ```
   ![image](https://github.com/IrynaVoronina/Application-for-management-notes/assets/144926045/c25a8abf-746d-483e-99de-8c81406ea4dc)
    
3. Run MongoDB using docker-compose:
    ```sh
    docker-compose up
    ```

4. Run the backend server:
    ```sh
    mvn spring-boot:run
    ```


### Frontend

1. Clone the repository:
    ```sh
    git clone <repository URL>
    cd <repository folder name>/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the frontend server:
    ```sh
    npm start
    ```


------------------------------
- Open Cypress for e2e testing:
    ```sh
    npm run cypress:open
    ```

- Run Cypress tests:
    ```sh
    npm run cypress:run

## Usage

- Access the application by navigating to http://localhost:3000 in your web browser.
  
  ![image](https://github.com/IrynaVoronina/Application-for-management-notes/assets/144926045/29fa5dc1-574c-4bff-8e2b-f07c9b0528df)


- Mongo Express will be available at http://localhost:8081/, providing a web-based MongoDB administration tool with a graphical user interface for managing MongoDB databases.
("admin" for username and "pass" for password)

![image](https://github.com/IrynaVoronina/Application-for-management-notes/assets/144926045/29f4ff89-a357-4d77-b76a-5610d1a1ee0b)

![image](https://github.com/IrynaVoronina/Application-for-management-notes/assets/144926045/5c3c64bc-1df9-448d-8594-fb9e77249a6f)

- The API documentation for the backend is available through Swagger. Once the backend server is running, you can access the Swagger UI at http://localhost:8080/swagger-ui.html.
![image](https://github.com/IrynaVoronina/Application-for-management-notes/assets/144926045/5805726c-af22-4589-b46e-b37fc934b786)



