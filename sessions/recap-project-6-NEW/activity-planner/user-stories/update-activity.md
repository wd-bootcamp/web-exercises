# Update Activity

## Value Proposition

**As a user**

**I want to** update the details of existing activities,

**so that** they reflect the most accurate and relevant information.

## Description

The update activity feature enables users to modify existing activities through a pre-filled form. Accessed via the edit button on the activity details page, this form comes populated with the current activity data. Users can modify any field while maintaining the same validation rules as creation. The interface provides clear feedback about the update process and includes both save and cancel options to ensure users can easily manage their changes.

## Acceptance Criteria

- Each activity details page includes an easily accessible edit option.
- Clicking the edit option opens a new page with a form pre-filled with the activity's existing details fetched from MongoDB.
- The form allows for edits to all activity details, including:
  - Activity title
  - Activity description
  - Activity categories (dynamic form fields)
  - Activity area
  - Activity country
- The following fields remain mandatory in MongoDB:
  - Activity title
  - Activity categories (dynamic form fields)
- The form section includes options for both saving and cancelling the action.
- The cancellation option allows the user to back out of the edit process.
- Submissions with empty required fields are blocked, with validation messages indicating the missing required fields.
- Upon successful update:
  - The activity document is updated in MongoDB
  - The updatedAt timestamp is automatically updated
  - The user is redirected to the details page
  - A success message is displayed
- If the update operation fails:
  - The form data is preserved
  - An error message is displayed
  - The user can retry the submission

## Tasks

- [ ] Create feature branch `feature/update-activity`
- [ ] Create PUT/PATCH endpoint for updating activities
  - [ ] Implement MongoDB findByIdAndUpdate
  - [ ] Add validation middleware
  - [ ] Add error handling
- [ ] Create edit form component
  - [ ] Pre-fill form with existing activity data
  - [ ] Add validation
  - [ ] Add loading states
  - [ ] Add error handling
- [ ] Implement optimistic updates in the UI

> 💡 It is not yet possible to edit images at this stage.

> 💡 You can accommodate multiple categories by using dynamic form fields, which allow additional input fields to be added as needed.