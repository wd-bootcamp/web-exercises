# Delete Activity

## Value Proposition

**As a user**

**I want to** be able to delete activities that are no longer relevant,

**so that** I can maintain a clean and organised activities list, ensuring it's always up to date.

## Description

The delete activity feature provides a safe way to remove activities from the database. Available from the activity details page, it includes a confirmation dialog to prevent accidental deletions. The interface clearly communicates the permanent nature of deletion and provides feedback throughout the process. After successful deletion, users are automatically redirected to the main activity list, which updates to reflect the removal.

## Acceptance Criteria

- Each activity details view includes an easily accessible delete option.
- Clicking the delete option triggers a confirmation dialog.
- The dialog serves to prevent accidental deletions by asking the user to confirm their intention.
- The dialog includes options for both confirming the deletion and cancelling the action.
- Upon confirming the deletion:
  - The activity document is removed from MongoDB
  - The user is redirected to the activities list
  - A success message is displayed
  - The activities list is automatically updated
- If the deletion fails:
  - An error message is displayed
  - The user remains on the details page
  - The user can retry the deletion
- If all activities are deleted:
  - A message appears indicating that there are no activities
  - An option to add new ones is provided
  - This state is reflected in MongoDB (empty collection)

## Tasks

- [ ] Create feature branch `feature/delete-activity`
- [ ] Create DELETE endpoint for activities
  - [ ] Implement MongoDB findByIdAndDelete
  - [ ] Add proper error handling
  - [ ] Add validation for existing ID
- [ ] Create confirmation dialog component
- [ ] Implement optimistic UI updates
- [ ] Add loading states during deletion
- [ ] Add error handling for:
  - [ ] Network issues
  - [ ] Database errors
  - [ ] Non-existent activities