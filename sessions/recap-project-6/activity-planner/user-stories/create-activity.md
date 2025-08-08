# Create Activity

## Value Proposition

**As a user**

**I want to** create and save my own personal activities,

**so that** I can easily access and manage them for future use.

## Description

Capstone Group Todo: Add wireframes

## Acceptance Criteria

- A form for adding an activity is displayed at the top of the homepage.
- The form is headlined with its purpose.
- The form must include labelled fields for:
  - Activity title
  - Activity description
  - Activity categories (dynamic form fields)
  - Activity area
  - Activity country
- The following fields are mandatory:
  - Activity title
  - Activity categories (dynamic form fields)
- The category is selected via a dropdown menu with the following options: Outdoor, Sport, Water, Nature, Adventure, Winter.
- The categories dropdown must include a default option, "Please select a category", and necessitates a selection.
- Form submission with any empty mandatory fields is blocked, and clear validation messages indicate the fields that need completion.
- Upon form submission, the new activity is added to the top of the activities list.

## Tasks

- [ ] Create feature branch `feature/create-activity`
- [ ] The category options are listed in the [`categories.json`](./assets/categories.json) file
- [ ] Capstone Group Todo: Add tasks

> 💡 It is not yet possible to add images at this stage. For this reason, a placeholder image should be saved when creating an activity.

> 💡 You can accommodate multiple categories by using dynamic form fields, which allow additional input fields to be added as needed.
