# Activity Details

## Value Proposition

**As a user**

**I want to** access detailed information about each activity,

**so that** I can make informed decisions and plan my activities effectively.

## Description

The activity details page provides a comprehensive view of a single activity. When a user clicks on an activity card from the list, they are taken to this dedicated page that shows all available information about the activity. The page features a clean, organized layout with the activity's image prominently displayed, followed by its title, categories, and full description. Navigation controls allow easy return to the main list.

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
  - Creation date
  - Last update date
- The detailed view includes a "back" link, allowing users to easily navigate back to the list of activities.
- The page implements proper error handling for non-existent activity IDs.
- The page shows a loading state while fetching activity details.

## Tasks

- [ ] Create feature branch `feature/activity-details`
- [ ] Create API endpoint for fetching single activity by ID
  - [ ] Implement MongoDB findById query
  - [ ] Add proper error handling for invalid IDs
  - [ ] Add validation for required fields
- [ ] Create activity details page component
  - [ ] Implement dynamic routing using activity ID
  - [ ] Add loading state component
  - [ ] Add error state component