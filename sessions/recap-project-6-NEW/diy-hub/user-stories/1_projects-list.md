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
- [ ] Create API endpoint for fetching projects
  - [ ] Connect to existing MongoDB collection
  - [ ] Implement server-side sorting (newest first)
  - [ ] Add error handling for database queries
- [ ] Create frontend components
  - [ ] Create `ProjectsList` component
  - [ ] Create `ProjectCard` component for individual project display
  - [ ] Design props interface for `ProjectCard`:
    - `id`: string (MongoDB ObjectId)
    - `title`: string
    - `imageUrl`: string
    - `complexity`: string
    - `duration`: string
- [ ] Implement data fetching and state management
  - [ ] Use SWR hook to fetch projects: `useSWR('/api/projects', fetcher)`
  - [ ] Handle SWR loading state (`isLoading`) and error state (`error`)
  - [ ] Implement conditional rendering based on SWR states
  - [ ] Handle SWR data validation and transformation
- [ ] Implement data mapping and rendering
  - [ ] Map through projects array using `.map()` method
  - [ ] Pass individual project data as props to `ProjectCard` components
  - [ ] Use unique keys (MongoDB `_id`) for React list rendering
- [ ] Add loading and error states
  - [ ] Create loading state component/UI
  - [ ] Create error state component/UI
  - [ ] Implement conditional rendering based on state
- [ ] Style components
  - [ ] Implement responsive grid/list layout
  - [ ] Style project cards with proper spacing and visual hierarchy
  - [ ] Ensure mobile-friendly design
