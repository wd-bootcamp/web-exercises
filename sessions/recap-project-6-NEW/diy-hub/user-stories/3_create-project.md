# Create Project

## Value Proposition

**As a user**

**I want to** create and store new DIY projects,

**so that** I can keep track of my projects and share them with others.

## Description

The create project feature allows users to add new DIY projects to the database through a user-friendly form. The form is accessible from the main page and includes fields for all necessary project information. It features dynamic form fields for materials and steps, allowing users to add multiple items as needed. The form includes clear validation feedback and handles both successful submissions and errors gracefully, ensuring users always know the status of their submission.

## Acceptance Criteria

- A form for adding projects is displayed at the top of the homepage.
- The form is headlined with its purpose.
- The form must include labelled fields for:
  - Project title
  - Project description
  - Project complexity
  - Project duration
  - Project materials (dynamic form fields)
  - Project steps (dynamic form fields)
- The following fields are mandatory in the MongoDB schema:
  - Project title
  - Project complexity
  - Project duration
- The complexity is selected via a dropdown menu with the following options: Beginner, Intermediate, or Advanced.
- The complexity dropdown must include a default option, "Please select a complexity level", and necessitates a selection.
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
- [ ] Create POST endpoint for new projects
  - [ ] Add server-side validation
  - [ ] Add error handling
- [ ] Update Project model with proper validation:
  ```javascript
  {
    title: { 
      type: String, 
      required: true,
      trim: true,
      minLength: 3
    },
    imageUrl: { 
      type: String, 
      required: true,
      default: '/placeholder.jpg'
    },
    complexity: {
      type: String,
      required: true,
      enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    duration: {
      type: String,
      required: true
    },
    description: String,
    materials: [{ type: String }],
    steps: [{ type: String }]
  }
  ```
- [ ] Implement form with proper validation
- [ ] Add loading state during submission
- [ ] Add error handling for network issues
- [ ] Add success/error notifications

> 💡 It is not yet possible to add images at this stage. For this reason, a placeholder image should be saved when creating a new project.

> 💡 You can accommodate multiple materials and steps by using dynamic form fields, which allow additional input fields to be added as needed.
