## Value proposition

As a developer,  
I want to connect the application to a MongoDB database using Mongoose,  
So that I can access and retrieve data from the projects collection through API endpoints for frontend use.

## Description

The DIY Hub app should have a MongoDB collection to store DIY projects. Each project contains detailed information including materials, steps, complexity level, and duration.

## Acceptance criteria

-   [ ] MongoDB should have one database named "diy-hub" with the following collection:
    -   [ ] Projects
-   [ ] Projects collection should have the following fields:
    -   title: Title of the project (required, string, min length 3)
    -   imageUrl: Link to the project image (required, string, default: '/placeholder.jpg')
    -   complexity: Difficulty level of the project (required, enum: ['Beginner', 'Intermediate', 'Advanced'])
    -   duration: Estimated time to complete (required, string)
    -   description: A detailed description of the project (optional, string)
    -   materials: Array of required materials (optional, array of strings)
    -   steps: Array of project steps (optional, array of strings)

-   [ ] Create the GET endpoint API for the projects collection.

## Tasks

-   [ ] Create a new branch "feature/database-setup"
-   [ ] Create a database in MongoDB Atlas for the project and call it "diy-hub"
-   [ ] Create Projects collection
-   [ ] Connect the "diy-hub" database to your app by using connect.js from previous projects and provide the MongoDB_URI in ".env.local" file
-   [ ] Define the Mongoose Schema for projects in db/models/Project.js with the fields mentioned above
-   [ ] Create the API endpoint "api/projects"
-   [ ] Connect to API endpoint "api/projects" to read the data from the database
-   [ ] Add proper validation for required fields and data types:
    -   [ ] Ensure title has minimum length of 3 characters
    -   [ ] Validate complexity against allowed values
    -   [ ] Set default image placeholder
-   [ ] Implement error handling for database connection issues
