## Value proposition

As a developer,  
I want to connect the application to a MongoDB database using Mongoose,  
So that I can access and retrieve data from the projects collection through API endpoints for frontend use.

## Description

The app should have a MongoDB collection to store plants. Each project contains detailed information including materials, steps, complexity level, and duration.

## Acceptance criteria

- [ ] MongoDB should have one database named "plant-pal" with the following collection:
  - [ ] plants
- [ ] plants collection should have the following fields:
  - name: String
  - botanicalName: String
  - imageUrl: String
  - waterNeed: String
  - lightNeed: String
  - fertiliserSeason: String[]
  - description: String

- [ ] Create the GET endpoint API for the plants collection.

## Tasks

- [ ] Create a new branch "feature/database-setup"
- [ ] Create a database in MongoDB Atlas for the project and call it "plant-pal"
- [ ] Create plants collection
- [ ] Connect the "plant-pal" database to your app by using connect.js from previous plants and provide the MongoDB_URI in ".env.local" file
- [ ] Define the Mongoose Schema for plants in db/models/Project.js with the fields mentioned above
- [ ] Create the API endpoint "api/plants"
- [ ] Implement error handling for database connection issues
