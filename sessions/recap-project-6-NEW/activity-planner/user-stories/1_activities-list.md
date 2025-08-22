# Activities List

## Value Proposition

**As a user**,

**I want to** browse a list of activities,

**so that** I can easily find and explore new activities that interest me.

## Description

![wireframe](./assets/activities-list.png)

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
- [ ] Connect to existing API endpoint to fetch activities
- [ ] Implement server-side sorting (newest first)
- [ ] Add error handling for database queries
- [ ] Add loading states for data fetching
- [ ] Add error states for failed data fetching