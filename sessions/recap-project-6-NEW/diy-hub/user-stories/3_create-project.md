# Create Project

## Value Proposition

**As a user**

**I want to** create and store new DIY projects,

**so that** I can keep track of my projects and share them with others.

## Description

Group Todo: Add wireframes

## Acceptance Criteria

- A form for adding a project is displayed at the top of the homepage.
- The form is headlined with its purpose.
- The form must include labelled fields for:
  - Project title
  - Project description
  - Project categories (dynamic form fields)
  - Project difficulty level
  - Estimated completion time
- The following fields are mandatory in the MongoDB schema:
  - Project title
  - Project categories (dynamic form fields)
- The category is selected via a dropdown menu with the following options: Woodworking, Electronics, Crafts, Home Improvement, Garden, Upcycling.
- The categories dropdown must include a default option, "Please select a category", and necessitates a selection.
- Form submission with any empty mandatory fields is blocked, and clear validation messages indicate the fields that need completion.
- Upon successful form submission:
  - The project is saved to MongoDB
  - The new project is added to the top of the projects list
  - The form is reset
  - A success message is displayed
- If the database operation fails:
  - The form data is preserved
  - An error message is displayed
  - The user can retry the submission

## Tasks

- [ ] Create feature branch `feature/create-project`
- [ ] Group Todo: Add tasks