# Project Details

## Value Proposition

**As a user**

**I want to** access detailed information about each project,

**so that** I can effectively utilize the information to complete my DIY projects.

## Description

Group Todo: Add wireframes

## Acceptance Criteria

- Each project in the projects list has a link to a details page using MongoDB's unique document ID.
- The details page fetches specific project data from MongoDB using the project ID.
- Each details page contains:
  - Project title
  - Project image
  - Project description
  - Project complexity
  - Project duration
  - Project materials list
  - Project steps list
- The detailed view includes a "back" link, allowing users to easily navigate back to the list of projects.
- The page implements proper error handling for non-existent project IDs.
- The page shows a loading state while fetching project details.

## Tasks

- [ ] Create feature branch `feature/project-details`
- [ ] Create API endpoint for fetching single project by ID
  - [ ] Implement MongoDB findById query
  - [ ] Add proper error handling for invalid IDs
- [ ] Create frontend components
  - [ ] Create `ProjectDetails` page component
  - [ ] Create `ProjectInfo` component for displaying project data
  - [ ] Create `MaterialsList` component for project materials
  - [ ] Create `StepsList` component for project steps
  - [ ] Create `BackButton` component for navigation
- [ ] Implement dynamic routing and navigation
  - [ ] Set up dynamic route for `/projects/[id]`
  - [ ] Extract project ID from URL parameters using `useRouter`
  - [ ] Implement navigation from projects list to details page
  - [ ] Add back navigation functionality
- [ ] Implement data fetching and state management
  - [ ] Use SWR hook to fetch project data: `useSWR('/api/projects/[id]')`
  - [ ] Handle SWR loading state (`isLoading`) and error state (`error`)
  - [ ] Implement conditional rendering based on SWR states
  - [ ] Create "not found" state for non-existent projects
