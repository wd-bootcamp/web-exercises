# Projects List

## Value Proposition

**As a user**

**I want to** browse a list of DIY projects,

**so that** I can easily find and explore new projects that interest me.

## Description

The projects list page serves as the main entry point of the application. It displays a scrollable grid of project cards, each showing an image, title, and complexity level. The projects are fetched from MongoDB and displayed in chronological order (newest first).

## Acceptance Criteria

- The homepage displays a list of projects fetched from MongoDB.
- The projects list is headlined with its purpose.
- Each project listing includes:
  - Project title
  - Project image
  - Project complexity
  - Project duration
- The list supports vertical scrolling to accommodate multiple entries.
- Projects are fetched from the MongoDB database.

## Tasks

- [ ] Create feature branch `feature/projects-list`
- [ ] Set up MongoDB connection in the project
  - [ ] Set up a new cluster
  - [ ] Configure environment variables for MongoDB connection
- [ ] Create Project model with Mongoose schema:
  ```javascript
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    complexity: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    duration: { type: String, required: true },
    description: String,
    materials: [{ type: String }],
    steps: [{ type: String }]
  }
  ```
- [ ] Create API endpoint to fetch projects
- [ ] Implement server-side sorting (newest first)
- [ ] Add error handling for database connection issues
- [ ] Add loading states for data fetching
- [ ] Add error states for failed data fetching
