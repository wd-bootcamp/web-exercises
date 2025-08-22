# Projects List

## Value Proposition

**As a user**

**I want to** browse a list of DIY projects,

**so that** I can easily find and explore new projects that interest me.

## Description

![wireframe](./assets/projects-list.png)

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
- [ ] Connect to existing API endpoint to fetch projects
- [ ] Implement server-side sorting (newest first)
- [ ] Add error handling for database queries
- [ ] Add loading states for data fetching
- [ ] Add error states for failed data fetching
