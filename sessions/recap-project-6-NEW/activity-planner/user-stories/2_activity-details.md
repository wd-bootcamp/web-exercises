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
  - [ ] Add validation for required fields
- [ ] Create frontend components
  - [ ] Create `ActivityDetails` page component
  - [ ] Create `ActivityInfo` component for displaying activity data
  - [ ] Create `BackButton` component for navigation
  - [ ] Design props interface for `ActivityInfo`:
    - `activity`: object with fields (title, imageUrl, description, categories, area, country)
- [ ] Implement dynamic routing and navigation
  - [ ] Set up dynamic route for `/activities/[id]`
  - [ ] Extract activity ID from URL parameters using `useRouter`
  - [ ] Implement navigation from activity list to details page
  - [ ] Add back navigation functionality
- [ ] Implement data fetching and state management
  - [ ] Use SWR hook to fetch activity data: `useSWR('/api/activities/[id]', fetcher)`
  - [ ] Handle SWR loading state (`isLoading`) and error state (`error`)
  - [ ] Implement conditional rendering based on SWR states
  - [ ] Handle SWR data validation and transformation
  - [ ] Implement URL parameter validation
- [ ] Add loading and error states
  - [ ] Create loading state component/UI for data fetching
  - [ ] Create error state component/UI for invalid IDs or network errors
  - [ ] Create "not found" state for non-existent activities
  - [ ] Implement conditional rendering based on state
- [ ] Implement date formatting
  - [ ] Format creation and update dates for display
  - [ ] Use appropriate date formatting library or native methods
- [ ] Style components
  - [ ] Design detailed view layout with proper typography
  - [ ] Style activity information display with clear visual hierarchy
  - [ ] Implement responsive design for mobile and desktop
  - [ ] Style navigation elements (back button)