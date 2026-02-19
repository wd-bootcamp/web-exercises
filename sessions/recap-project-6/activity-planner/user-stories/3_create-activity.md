# Create Activity

## Value Proposition

**As a user**

**I want to** create and save my own personal activities,

**so that** I can easily access and manage them for future use.

## Description

Group Todo: Add wireframes

## Acceptance Criteria

- A form for adding an activity is displayed at the top of the homepage.
- The form is headlined with its purpose.
- The form must include labelled fields for:
  - Activity title
  - Activity description
  - Activity categories (dynamic form fields)
  - Activity area
  - Activity country
- The following fields are mandatory in the MongoDB schema:
  - Activity title
  - Activity categories (dynamic form fields)
- The category is selected via a dropdown menu with the following options: Outdoor, Sport, Water, Nature, Adventure, Winter.
- The categories dropdown must include a default option, "Please select a category", and necessitates a selection.
- Form submission with any empty mandatory fields is blocked, and clear validation messages indicate the fields that need completion.
- Upon successful form submission:
  - The activity is saved to MongoDB
  - The new activity is added to the top of the activities list
  - The form is reset
  - A success message is displayed
- If the database operation fails:
  - The form data is preserved
  - An error message is displayed
  - The user can retry the submission

## Tasks

- [ ] Create feature branch `feature/create-activity`
- [ ] Group Todo: Add tasks