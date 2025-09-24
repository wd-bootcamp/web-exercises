# Activity Details

## Value Proposition

**As a user**

**I want to** access detailed information about each activity,

**so that** I can make informed decisions and plan my activities effectively.

## Description

Group Todo: Add wireframes

## Acceptance Criteria

- Each activity in the activities list has a link to a details page using MongoDB's unique document ID.
- The details page fetches specific activity data from MongoDB using the activity ID.
- Each details page contains:
  - Activity title
  - Activity image
  - Activity description
  - Activity categories
  - Activity area
  - Activity country
- The detailed view includes a "back" link, allowing users to easily navigate back to the list of activities.
- The page implements proper error handling for non-existent activity IDs.
- The page shows a loading state while fetching activity details.

## Tasks

- [ ] Create feature branch `feature/activity-details`
- [ ] Create API endpoint for fetching single activity by ID
  - [ ] Implement MongoDB findById query
  - [ ] Add proper error handling for invalid IDs
- [ ] Create frontend components
  - [ ] Create `ActivityDetails` page component
  - [ ] Create `ActivityInfo` component for displaying activity data
  - [ ] Create `BackButton` component for navigation
- [ ] Implement dynamic routing and navigation
  - [ ] Set up dynamic route for `/activities/[id]`
  - [ ] Extract activity ID from URL parameters using `useRouter`
  - [ ] Implement navigation from activity list to details page
  - [ ] Add back navigation functionality
- [ ] Implement data fetching and state management
  - [ ] Use SWR hook to fetch activity data: `useSWR('/api/activities/[id]')`
  - [ ] Handle SWR loading state (`isLoading`) and error state (`error`)
  - [ ] Implement conditional rendering based on SWR states
  - [ ] Create "not found" state for non-existent activities