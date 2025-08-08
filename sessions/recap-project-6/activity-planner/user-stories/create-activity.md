# Create Activity

## Value Proposition

**As a user**

**I want to** create and save my own personal activities,

**so that** I can easily access and manage them for future use.

## Description

The create activity feature allows users to add new activities to the database through a user-friendly form. The form is accessible from the main page and includes fields for all necessary activity information. It features a dynamic category selection system where users can add multiple categories to better classify their activity. The form includes clear validation feedback and handles both successful submissions and errors gracefully, ensuring users always know the status of their submission.

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
- [ ] Create POST endpoint for new activities
  - [ ] Add server-side validation
  - [ ] Add error handling
- [ ] Update Activity model with proper validation:
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
    categories: [{
      type: String,
      required: true,
      enum: ['Outdoor', 'Sport', 'Water', 'Nature', 'Adventure', 'Winter']
    }],
    description: String,
    area: String,
    country: String,
  }
  ```
- [ ] Implement form with proper validation
- [ ] Add loading state during submission
- [ ] Add error handling for network issues
- [ ] Add success/error notifications

> 💡 It is not yet possible to add images at this stage. For this reason, a placeholder image should be saved when creating an activity.

> 💡 You can accommodate multiple categories by using dynamic form fields, which allow additional input fields to be added as needed.