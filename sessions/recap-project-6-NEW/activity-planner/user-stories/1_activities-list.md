# Activities List

## Value Proposition

**As a user**,

**I want to** browse a list of activities,

**so that** I can easily find and explore new activities that interest me.

## Description

The activities list page serves as the main entry point of the application. It displays a scrollable grid of activity cards, each showing an image, title, and associated categories. The activities are fetched from MongoDB and displayed in chronological order (newest first).

## Acceptance Criteria

- The homepage displays a list of activities fetched from MongoDB.
- The activities list is headlined with its purpose.
- Each activity listing includes:
  - Activity title
  - Activity image
  - Activity categories
- The list supports vertical scrolling to accommodate multiple entries.
- Activities are fetched from the MongoDB database.

## Tasks

- [ ] Create feature branch `feature/activities-list`
- [ ] Set up MongoDB connection in the project
  - [ ] Set up a new cluster
  - [ ] Configure environment variables for MongoDB connection
- [ ] Create Activity model with Mongoose schema:
  ```javascript
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    categories: [{ type: String, required: true }],
    description: String,
    area: String,
    country: String,
  }
  ```
- [ ] Create API endpoint to fetch activities
- [ ] Implement server-side sorting (newest first)
- [ ] Add error handling for database connection issues
- [ ] Add loading states for data fetching
- [ ] Add error states for failed data fetching