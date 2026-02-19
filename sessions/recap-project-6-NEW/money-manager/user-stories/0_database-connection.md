## Value proposition

As a developer,  
I want to connect the application to a MongoDB database using Mongoose,  
So that I can access and retrieve data from the projects collection through API endpoints for frontend use.

## Description

The app should have a MongoDB collection to store transactions. Each project contains detailed information including materials, steps, complexity level, and duration.

## Acceptance criteria

- [ ] MongoDB should have one database named "money-manager" with the following collection:
  - [ ] transactions
- [ ] transactions collection should have the following fields:
  - amount: Number
  - title: String
  - category: String
  - date: Date
- [ ] Create the GET endpoint API for the transactions collection.

## Tasks

- [ ] Create a new branch "feature/database-setup"
- [ ] Create a database in MongoDB Atlas for the project and call it "money-manager"
- [ ] Create transactions collection
- [ ] Connect the "money-manager" database to your app by using connect.js from previous transactions and provide the MongoDB_URI in ".env.local" file
- [ ] Define the Mongoose Schema for transactions in db/models/Project.js with the fields mentioned above
- [ ] Create the API endpoint "api/transactions"
- [ ] Implement error handling for database connection issues
