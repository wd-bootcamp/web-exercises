## Value proposition

As a developer,  
I want to connect the application to a MongoDB database using Mongoose,  
So that I can access and retrieve data from the projects collection through API endpoints for frontend use.

## Description

The app should have a MongoDB collection to store flashcards. Each project contains detailed information including materials, steps, complexity level, and duration.

## Acceptance criteria

- [ ] MongoDB should have one database named "flip-wise" with the following collection:
  - [ ] flashcards
- [ ] flashcards collection should have the following fields:
  - title: Title of the project (required, string, min length 3)
  - imageUrl: Link to the project image (required, string, default: '/placeholder.jpg')
  - complexity: Difficulty level of the project (required, enum: ['Beginner', 'Intermediate', 'Advanced'])
  - duration: Estimated time to complete (required, string)
  - description: A detailed description of the project (optional, string)
  - materials: Array of required materials (optional, array of strings)
  - steps: Array of project steps (optional, array of strings)
- [ ] Create the GET endpoint API for the flashcards collection.

## Tasks

- [ ] Create a new branch "feature/database-setup"
- [ ] Create a database in MongoDB Atlas for the project and call it "flip-wise"
- [ ] Create flashcards collection
- [ ] Connect the "flip-wise" database to your app by using connect.js from previous flashcards and provide the MongoDB_URI in ".env.local" file
- [ ] Define the Mongoose Schema for flashcards in db/models/Project.js with the fields mentioned above
- [ ] Create the API endpoint "api/flashcards"
- [ ] Implement error handling for database connection issues
