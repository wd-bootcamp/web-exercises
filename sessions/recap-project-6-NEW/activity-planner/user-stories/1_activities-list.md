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
- [ ] Create frontend components
  - [ ] Create `ActivityList` component
  - [ ] Create `ActivityCard` component for individual activity display
- [ ] Implement data fetching and state management
  - [ ] Use SWR hook to fetch activities: `useSWR('/api/activities', fetcher)`
  - [ ] Handle SWR loading state (`isLoading`) and error state (`error`)
  - [ ] Implement conditional rendering based on SWR states
- [ ] Implement data mapping and rendering
  - [ ] Map through activities array using `.map()` method
  - [ ] Pass individual activity data as props to `ActivityCard` components
  - [ ] Use unique keys (MongoDB `_id`) for React list rendering