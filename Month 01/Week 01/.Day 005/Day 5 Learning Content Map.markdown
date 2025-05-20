# Day 5 Learning Content Map

This content map outlines the CSS knowledge to master on your fifth day of learning web development, starting the styling phase for the MERN stack. It focuses on CSS syntax, selectors, and essential properties to enhance your Day 3/4 portfolio page, building on HTML mastery (Days 1-3) and review (Day 4). The goal is to style a webpage effectively, understand CSS fundamentals, and maintain professionalism with *The Clean Coder*.

## 1. CSS Basics
- **Purpose**: Style HTML elements to create visually appealing MERN app interfaces (e.g., React components).
- **Key Concepts**:
  - **What is CSS?**: Cascading Style Sheets control the presentation of HTML (colors, fonts, layouts).
  - **Syntax**: Rules with a selector (e.g., `h1`) and declarations (e.g., `color: blue;`).
    ```css
    selector {
        property: value;
    }
    ```
  - **Ways to Apply CSS**:
    - **External**: `<link rel="stylesheet" href="styles.css">` (preferred for organization).
    - **Internal**: `<style>` in `<head>`.
    - **Inline**: `style` attribute (e.g., `<p style="color: red;">`).
  - **Cascading**: Styles are applied based on specificity and order (later rules override earlier ones).
- **Practice**:
  - Create or update `styles.css` in your `my-portfolio` folder.
  - Style your portfolio’s `<h1>` (e.g., `color: navy;`) and `<p>` (e.g., `font-size: 16px;`).
  - Test inline vs. external CSS to see differences.
- **Example**:
  ```html
  <!-- In index.html -->
  <head>
      <link rel="stylesheet" href="styles.css">
  </head>
  ```
  ```css
  /* In styles.css */
  h1 {
      color: navy;
  }
  p {
      font-size: 16px;
  }
  ```

## 2. CSS Selectors
- **Purpose**: Target specific HTML elements for styling, essential for precise MERN app designs.
- **Key Selectors**:
  - **Element**: Targets tags (e.g., `p { color: black; }`).
  - **Class**: Targets elements with `class` attribute (e.g., `.intro { font-weight: bold; }`).
  - **ID**: Targets unique elements with `id` attribute (e.g., `#header { background-color: gray; }`).
  - **Universal**: Targets all elements (e.g., `* { margin: 0; }`).
  - **Descendant**: Targets elements inside others (e.g., `nav a { text-decoration: none; }`).
- **Practice**:
  - Add classes to your portfolio’s elements (e.g., `<p class="intro">`).
  - Style using element selectors (e.g., `h2`), class selectors (e.g., `.intro`), and ID selectors (e.g., `#about`).
  - Experiment with a descendant selector (e.g., style `<a>` inside `<nav>`).
- **Example**:
  ```html
  <!-- In index.html -->
  <h2 class="intro">About Me</h2>
  <nav>
      <a href="#about">About</a>
  </nav>
  ```
  ```css
  /* In styles.css */
  h2 {
      color: green;
  }
  .intro {
      font-weight: bold;
  }
  nav a {
      text-decoration: none;
  }
  ```

## 3. Essential CSS Properties
- **Purpose**: Apply visual styles to HTML elements, forming the basis for MERN app aesthetics.
- **Key Properties**:
  - **Text**: `color` (e.g., `color: #333;`), `font-size` (e.g., `font-size: 18px;`), `font-family` (e.g., `font-family: Arial, sans-serif;`), `font-weight` (e.g., `font-weight: 700;`).
  - **Background**: `background-color` (e.g., `background-color: #f0f0f0;`), `background-image` (e.g., `background-image: url('bg.jpg');`).
  - **Spacing**: `margin` (e.g., `margin: 10px;`), `padding` (e.g., `padding: 15px;`).
  - **Border**: `border` (e.g., `border: 1px solid black;`).
- **Practice**:
  - Style your portfolio’s `<header>` with a background color and padding.
  - Change text styles for `<h1>`, `<h2>`, and `<p>` (e.g., different `font-family` or `color`).
  - Add a border to your portfolio’s table.
- **Example**:
  ```css
  /* In styles.css */
  header {
      background-color: #e6e6e6;
      padding: 20px;
  }
  table {
      border: 2px solid #333;
  }
  h1 {
      font-family: 'Helvetica', sans-serif;
      color: #0066cc;
  }
  ```

## 4. Practical Skills
- **Styling the Portfolio Page**:
  - Enhance your Day 3/4 portfolio page by:
    - Applying CSS to `<header>`, `<nav>`, `<main>`, `<form>`, `<table>`, and `<footer>` using selectors and properties.
    - Adding classes/IDs for specific styling (e.g., `.button` for `<button>`).
    - Ensuring accessibility (e.g., visible focus states for keyboard navigation).
  - Example styled portfolio snippet:
    ```html
    <!-- In index.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="My portfolio page">
        <title>My Portfolio</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header id="header">
            <h1>My Portfolio</h1>
            <nav role="navigation">
                <ul>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#projects" class="nav-link">Projects</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <article id="about">
                <h2 class="intro">About Me</h2>
                <p>Learning the MERN stack.</p>
            </article>
            <form role="form" action="/submit" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="input-field" required>
                <button type="submit" class="button">Submit</button>
            </form>
        </main>
        <footer>
            <p>© 2025 My Portfolio</p>
        </footer>
    </body>
    </html>
    ```
    ```css
    /* In styles.css */
    #header {
        background-color: #f4f4f4;
        padding: 20px;
    }
    .nav-link {
        color: #0066cc;
        text-decoration: none;
    }
    .intro {
        font-size: 24px;
        color: #333;
    }
    .input-field {
        border: 1px solid #ccc;
        padding: 5px;
    }
    .button {
        background-color: #0066cc;
        color: white;
        padding: 10px;
        border: none;
    }
    ```
- **Testing and Debugging**:
  - Open `index.html` in a browser to verify CSS styles.
  - Use browser developer tools (right-click → Inspect) to adjust styles (e.g., tweak `padding`) and check accessibility (e.g., focus states).
  - Validate HTML with W3C Markup Validator (https://validator.w3.org/) to ensure no errors affect styling.
- **Organizing Files**:
  - Store in `my-portfolio` folder with `index.html`, `styles.css`, and subfolders (`images`, `media`).
  - Ensure correct paths (e.g., `href="styles.css"`).

## 5. Professional Habits
- **Reading**: *The Clean Coder* by Robert C. Martin, Chapter 4 (Coding).
  - Focus: Writing clean, maintainable code and practicing deliberate coding habits.
  - Practice: Write a 1-paragraph reflection on how clean CSS (e.g., organized selectors, clear comments) aligns with your Day 5 tasks.
- **Code Quality**:
  - Use consistent indentation in `styles.css` (2 or 4 spaces).
  - Add comments to group CSS rules (e.g., `/* Header Styles */`).
  - Save changes incrementally, preparing for Git (Day 11).

## 6. Best Practices
- **CSS Organization**:
  - Group related styles (e.g., all `<nav>` styles together).
  - Prefer external CSS (`styles.css`) over inline or internal for maintainability.
- **Accessibility**:
  - Ensure styled elements remain accessible (e.g., sufficient color contrast, visible `:focus` states).
  - Use tools like WAVE (https://wave.webaim.org/) to check contrast.
- **File Naming**:
  - Use lowercase (e.g., `styles.css`, `index.html`).
  - Avoid spaces or special characters.

## 7. Learning Activities
- **Style Portfolio Page**:
  - Apply CSS to your Day 3/4 portfolio, styling `<header>`, `<nav>`, `<form>`, and `<table>`.
  - Save in `my-portfolio` folder with `styles.css`.
  - Test in Chrome/Firefox and validate HTML.
- **Experiment**:
  - Change `font-family` for different elements (e.g., `Arial` vs. `Georgia`).
  - Try a universal selector (`* { margin: 0; }`) and observe its impact.
  - Break your CSS (e.g., use invalid `color: blu;`) and debug using browser tools.
- **Explore**:
  - Inspect a professional website’s CSS (e.g., a portfolio) using developer tools.
  - Note 2 CSS properties (e.g., `padding`, `border`) and apply them to your portfolio.
- **Reflect**:
  - Write what you found exciting or challenging about CSS styling.
  - Reflect on *The Clean Coder* Ch. 4, connecting it to writing organized CSS.

## 8. Resources for Day 5
- **Tutorials**:
  - freeCodeCamp: CSS Basics, Selectors.
  - W3Schools: CSS Introduction, Selectors, Properties.
- **References**:
  - MDN Web Docs: CSS Syntax, Selectors, Properties.
  - CSS-Tricks: CSS Basics Guide.
- **Practice**:
  - Create a separate `.html` and `.css` to test selectors and properties.
  - Use CodePen to experiment with CSS styles.

## 9. Goals for Day 5
- Master CSS syntax, selectors, and essential properties.
- Style your portfolio page with colors, fonts, and spacing.
- Ensure HTML remains valid and accessible with CSS applied.
- Continue *The Clean Coder* Ch. 4 and reflect on clean coding practices.
- Build confidence in CSS for styling MERN app interfaces.