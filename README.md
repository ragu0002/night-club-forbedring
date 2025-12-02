# Regler for navngivning

### Component Structure & Naming Conventions

We use an atomic design–inspired structure with three component categories.

#### Organisms (`o-`)

Organisms are complex components composed of multiple smaller components.  
All organism components must be placed in a folder starting with `o-`.

#### Molecules (`m-`)

Molecules are simpler components that may consist of multiple elements or smaller components.  
All molecule components must be placed in a folder starting with `m-`.

#### Atoms (`a-`)

Atoms are basic components built from a single element, such as a button or typography.  
All atom components must be placed in a folder starting with `a-`.

---

## Naming Conventions

#### PascalCase

Used for component names.

#### camelCase

Used for variables and functions.

#### kebab-case

Used for CSS class names.

#### Folder Naming

Folders always start with a lowercase letter.

##### Example structure:

home/
o-componentName/
m-componentName/
a-componentName/

---

## Styling Guidelines

#### Global CSS

We maintain a global CSS file with global rules.

#### Component-Specific CSS

For custom or specific styles, create a CSS file (e.g. `Button.css`) and import it directly inside the component.

#### Typography

Typography is managed through a dedicated component that defines text styles and passes them as props.

#### Colors

Colors are defined in `@themes` inline inside our global CSS.

#### Vanilla CSS

For custom properties or more complex visual styles and functionalities, styles can be defined inside:

(globals.css)

`@layer components  {
  /* component-specific styles */
}`

#### Tailwind

Tailwind is used for:

- sizing

- colors

- responsiveness

- general utilities

## Branching

Branch names are defined by Linear.

#### Main Branch Rules

- Never write code directly in main.

- There must never be errors when merging into main.

#### Commit Messages

Commit messages must follow this format:

name-description-more-description
