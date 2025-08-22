## Value proposition

As a developer,  
I want to connect the application to a MongoDB database using Mongoose,  
So that I can access and retrieve data from two defined collections through API endpoints for frontend use.

## Description

The Activity Planner app should have two MongoDB collections: one to store the "Activities" and the other to store the "Categories". One activity can be associated with multiple categories.

## Acceptance criteria

-   [ ] MongoDB should have one database named "activity-planner" with two collections as follows:
    -   [ ] Activities
    -   [ ] Categories
-   [ ] Activities collection should have the following fields:
    -   title: Title of the activity (required, string, min length 3)
    -   imageUrl: Link to the activity image (required, string, default: '/placeholder.jpg')
    -   categories: Array of category IDs (required, references Categories collection)
    -   description: A detailed description of the activity (optional, string)
    -   area: Location area of the activity (optional, string)
    -   country: Country where the activity takes place (optional, string)
-   [ ] Categories collection should have the following field:
    -   name: Name of the category (e.g., 'Outdoor', 'Sport', 'Water', 'Nature', 'Adventure', 'Winter')

-   [ ] Create the GET endpoint API for each collection.

## Tasks

-   [ ] Create a new branch "feature/database-setup"
-   [ ] Create a database in MongoDB Atlas for the project and call it "activity-planner"
-   [ ] Create Activities and Categories collections
-   [ ] Connect the "activity-planner" database to your app by using connect.js from previous projects and provide the MongoDB_URI in ".env.local" file
-   [ ] Define the Mongoose Schema for activities in db/models/Activity.js with the fields mentioned above
-   [ ] Define the Mongoose Schema for categories in db/models/Category.js with the fields mentioned above
-   [ ] Create the API endpoints "api/activities" and "api/categories"
-   [ ] Connect to API endpoints "api/activities" and "api/categories" to read the data from the database
-   [ ] Implement error handling for database connection issues
