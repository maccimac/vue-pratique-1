# Impact Job Listing Page

- This web application lists available job posts.
- Additionally, user can filter posts by interactive job tags.
- This app runs on Vue and TypeScript.

## Getting Started (Installation)

```bash
# Install dependencies
npm install

# Start development server
npm run serve
```

Access the app at `http://localhost:8080`

```bash
# Run tests
npm run test
```

## Architecture

### Views

**`JobListingView.vue`** -
Main view containing jobs listings and the filtering logic

### Types

1. **`JobListing`** - Represents job listing. Includes metadata such as position and requirements.
2. **`JobTag`** - Represents requirements for the JobListing. Displayed as tags (chips/tablets). Can be role, level, language, or tool.

### Components

1.  **`job-listing/JobListingCard.vue`** -
    Displays job post details. Slot is supported and specially designed to hold tags.

        ```vue
        <JobListingCard :job="job">
            Custom content goes here.
        </JobListingCard>
        ```

2.  **`job-listing/JobListingFilterBar.vue`** -
    Displays all selected chips. Represents by what posts are being filtered. Allows for removal of chip.

        ```vue
        const selectionOfTools = [{tool: "Vue"}, {level: "Midweight"}];
        <JobListingFilterBar v-model="selectionOfTools"/>

        ```

3.  **`chips/ChipTag.vue`** -
    Reusable component that represents a tool, language, role, or level.

        ```vue
        <ChipTag :tag="{
            tool: 'Vue'
        }"/>
        <ChipTag :tag="{
            level: 'Midweight'
        }"/>
        ```

## Features and Considerations

- This web application runs on Vue3 (Options API), TypeScript, Bootstrap, SCSS, Jest, Vue Test Utils, and Webpack
- Vue Router is supported
- Vuex is supported
- Theming is supported
  ```app.scss
      .theme-default {
          --primary: #5ca5a5;
          --light-bg: #f7f8fa;
          --darker: #2b3939;
          ...more
      }
  ```
- Tests are mostly unit tests (behavior, user interaction, data transformation)
  - Specs are stored in `__tests__` directories. A `src/test/` directory is available on utils
  ```
  ├── components/
  ├── chips/
      ├── ChipTag.vue
      └── __tests__/
          ├── ChipTag.spec.ts
  ```
- Keyboard navigation, semantic html, and other accessibility best practices applied
- Mobile responsiveness is also supported for all browser widths

## Author

Margaret Macaranas

- Email: web@webcrafterinc.com
- Email: macci.web@gmail.com

Have a nice day :)
