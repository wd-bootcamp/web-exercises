# Update Project

## Value Proposition

**As a user**

**I want to** update the details of existing projects,

**so that** they reflect the most accurate and relevant information.

## Description

The update project feature enables users to modify existing projects through a pre-filled form. Accessed via the edit button on the project details page, this form comes populated with the current project data. Users can modify any field while maintaining the same validation rules as creation. The interface provides clear feedback about the update process and includes both save and cancel options to ensure users can easily manage their changes.

## Acceptance Criteria

- Each project details page includes an easily accessible edit option.
- Clicking the edit option opens a new page with a form pre-filled with the project's existing details fetched from MongoDB.
- The form allows for edits to all project details, including:
  - Project title
  - Project description
  - Project complexity
  - Project duration
  - Project materials (dynamic form fields)
  - Project steps (dynamic form fields)
- The following fields remain mandatory in MongoDB:
  - Project title
  - Project complexity
  - Project duration
- The form section includes options for both saving and cancelling the action.
- The cancellation option allows the user to back out of the edit process.
- Submissions with empty required fields are blocked, with validation messages indicating the missing required fields.
- Upon successful update:
  - The project document is updated in MongoDB
  - The updatedAt timestamp is automatically updated
  - The user is redirected to the details page
  - A success message is displayed
- If the update operation fails:
  - The form data is preserved
  - An error message is displayed
  - The user can retry the submission

## Tasks

- [ ] Create feature branch `feature/update-project`
- [ ] Create PUT/PATCH endpoint for updating projects
  - [ ] Implement MongoDB findByIdAndUpdate
  - [ ] Add validation middleware
  - [ ] Add error handling
- [ ] Create edit form component
  - [ ] Pre-fill form with existing project data
  - [ ] Add validation
  - [ ] Add loading states
  - [ ] Add error handling
- [ ] Implement optimistic updates in the UI

> 💡 It is not yet possible to edit images at this stage.

> 💡 You can accommodate multiple materials and steps by using dynamic form fields, which allow additional input fields to be added as needed.
