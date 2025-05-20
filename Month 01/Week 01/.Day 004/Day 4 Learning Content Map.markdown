# Day 4 Learning Content Map

This content map outlines the tasks for your fourth day of learning web development, serving as a review and consolidation day to solidify HTML knowledge before starting CSS on Day 5. It focuses on reinforcing HTML skills, debugging, analyzing real-world HTML, and introducing CSS concepts, building on Days 1-3 (basic HTML, forms, tables, semantics, metadata, multimedia, accessibility). The goal is to refine your portfolio page, address gaps, and prepare for styling, while fostering professionalism with *The Clean Coder*.

## 1. Reviewing HTML Knowledge
- **Purpose**: Consolidate Days 1-3 HTML concepts to ensure mastery, critical for building robust MERN app foundations.
- **Key Concepts**:
  - **Core Elements**: Review `<h1>-<h6>`, `<p>`, `<a>`, `<img>`, `<ul>`, `<div>` from Day 1.
  - **Forms and Tables**: Revisit `<form>`, `<input>`, `<table>`, `<tr>`, `<th>` from Day 2.
  - **Semantics**: Reinforce `<header>`, `<main>`, `<article>`, `<section>`, `<nav>` from Days 1-2.
  - **Multimedia**: Recap `<audio>`, `<video>`, `<track>` from Day 3.
  - **Accessibility**: Review ARIA attributes (`role`, `aria-label`, `aria-live`), keyboard navigation from Days 2-3.
  - **Metadata**: Confirm `<meta>`, `<link>` usage for SEO and favicon from Day 2.
- **Practice**:
  - Rebuild a simple webpage (e.g., a one-section bio page) from scratch without referencing notes to test recall.
  - Check your Day 3 portfolio page for missing elements (e.g., `alt` on `<img>`, `for` on `<label>`).
  - List 5 HTML elements and their attributes in your notes (e.g., `<input type="text" required>`).
- **Example**:
  ```html
  <!-- Quick Review Page -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Review Page</title>
  </head>
  <body>
      <header>
          <h1>Review</h1>
      </header>
      <main>
          <p>Hello, world!</p>
          <img src="sample.jpg" alt="Sample image">
      </main>
  </body>
  </html>
  ```

## 2. Debugging and Validation
- **Purpose**: Strengthen error-handling skills to ensure error-free HTML, essential for MERN app reliability.
- **Key Concepts**:
  - **Common Errors**: Identify issues like unclosed tags, incorrect nesting, missing attributes (e.g., `alt`, `id`).
  - **W3C Markup Validator**: Use https://validator.w3.org/ to check code compliance.
  - **Browser Developer Tools**: Inspect elements to debug rendering issues (e.g., broken images, misaligned tables).
- **Practice**:
  - Validate your Day 3 portfolio page with W3C Markup Validator; fix any errors (e.g., missing `</td>`).
  - Introduce 2 intentional errors in your portfolio (e.g., unclosed `<form>`, invalid `src` on `<video>`) and debug using validator and browser tools.
  - Test your portfolio in Chrome and Firefox to spot browser-specific issues.
- **Example**:
  ```html
  <!-- Intentional Error: Missing </form> -->
  <form role="form">
      <input type="text" id="name" name="name">
  <!-- Fix: Add </form> -->
  ```

## 3. Exploring Real-World HTML
- **Purpose**: Analyze professional websites to understand practical HTML applications, preparing for MERN project structures.
- **Key Concepts**:
  - **Structure Analysis**: Observe how sites use semantics (`<nav>`, `<main>`), forms, and multimedia.
  - **Accessibility**: Check for ARIA attributes and keyboard navigation.
  - **Code Practices**: Note commenting, indentation, and file organization.
- **Practice**:
  - Visit a simple portfolio or blog site (e.g., a personal developer site).
  - Use browser developer tools (right-click → Inspect) to examine its HTML structure.
  - Identify 3 elements (e.g., `<form>`, `<video>`, `<article>`) and compare to your portfolio.
  - Note 1 accessibility feature (e.g., `aria-label`) and apply it to your portfolio.
- **Example**:
  - If a site uses `<nav role="navigation">`, add similar ARIA to your portfolio’s navigation:
    ```html
    <nav role="navigation">
        <ul>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
    ```

## 4. Introduction to CSS Concepts
- **Purpose**: Preview CSS to ease the transition on Day 5, understanding its role in styling HTML for MERN apps.
- **Key Concepts**:
  - **What is CSS?**: Cascading Style Sheets style HTML elements (e.g., colors, fonts, layouts).
  - **Basic Syntax**: Rules with selectors (e.g., `h1`) and properties (e.g., `color: blue;`).
  - **Linking CSS**: Use `<link>` to connect a `.css` file or `<style>` for inline CSS.
  - **Simple Properties**: `color`, `font-size`, `background-color`.
- **Practice**:
  - Create a `styles.css` file and link it to your portfolio page.
  - Apply basic styles (e.g., change `<h1>` color, set `<p>` font size).
  - Preview changes in the browser to understand CSS’s impact.
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

## 5. Practical Skills
- **Refining the Portfolio Page**:
  - Enhance your Day 3 portfolio page by:
    - Adding a new section (e.g., `<section>` for skills or hobbies).
    - Improving accessibility (e.g., `aria-live` for form feedback, `<track>` for video).
    - Fixing any validation errors from W3C Markup Validator.
    - Applying basic CSS (e.g., color, font size) to preview styling.
  - Example updated portfolio:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="My portfolio page">
        <meta name="keywords" content="portfolio, web development, MERN">
        <title>My Portfolio</title>
        <link rel="icon" href="images/favicon.ico">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <h1>My Portfolio</h1>
            <nav role="navigation">
                <ul>
                    <li><a href="#about" aria-label="Go to About section">About</a></li>
                    <li><a href="#projects" aria-label="Go to Projects section">Projects</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <article id="about">
                <h2>About Me</h2>
                <section>
                    <p>Learning the MERN stack to build web apps.</p>
                    <video controls width="300" poster="thumbnail.jpg">
                        <source src="intro.mp4" type="video/mp4">
                        <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English">
                        Your browser does not support video.
                    </video>
                </section>
            </article>
            <article id="projects">
                <h2>My Projects</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bio Page</td>
                            <td>HTML-only personal page</td>
                        </tr>
                        <tr>
                            <td>Portfolio</td>
                            <td>Enhanced HTML page</td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>HTML: Intermediate</li>
                    <li>CSS: Beginner</li>
                </ul>
            </section>
            <form role="form" action="/submit" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" aria-describedby="name-help" required>
                <p id="name-help">Enter your full name.</p>
                <div aria-live="polite" id="error"></div>
                <button type="submit" tabindex="0" aria-label="Submit contact form">Submit</button>
            </form>
        </main>
        <footer>
            <p>© 2025 My Portfolio</p>
        </footer>
    </body>
    </html>
    ```
  - Save in a `my-portfolio` folder with `styles.css` and subfolders (`images`, `media`).
- **Testing and Debugging**:
  - Test the updated portfolio in a browser, checking multimedia, form, and navigation.
  - Validate with W3C Markup Validator to ensure no errors.
  - Use browser developer tools to inspect CSS application and keyboard navigation.
- **Organizing Files**:
  - Maintain `my-portfolio` folder with `index.html`, `styles.css`, `images` (e.g., `favicon.ico`), and `media` (e.g., `intro.mp4`).
  - Ensure correct asset paths (e.g., `src="media/intro.mp4"`).

## 6. Professional Habits
- **Reading**: *The Clean Coder* by Robert C. Martin, Chapter 3 (Saying Yes).
  - Focus: Committing to realistic goals and delivering quality work.
  - Practice: Write a 1-paragraph reflection on how saying yes to thorough debugging and validation aligns with your Day 4 tasks.
- **Code Quality**:
  - Use consistent indentation (2 or 4 spaces).
  - Add comments to clarify sections (e.g., `<!-- Skills Section -->`).
  - Save changes incrementally, preparing for Git (introduced Day 11).

## 7. Best Practices
- **Accessibility**:
  - Double-check ARIA attributes (`aria-label`, `aria-describedby`) and keyboard accessibility.
  - Ensure multimedia has `<track>` and text fallbacks.
- **SEO and Metadata**:
  - Verify `<meta>` tags (`description`, `keywords`) are relevant.
  - Use a clear `<title>` (e.g., “My Portfolio”).
- **File Naming**:
  - Use lowercase (e.g., `index.html`, `styles.css`).
  - Avoid spaces or special characters.

## 8. Learning Activities
- **Refine Portfolio Page**:
  - Update your Day 3 portfolio with a new section, improved accessibility, and basic CSS.
  - Validate with W3C Markup Validator and test in Chrome/Firefox.
  - Save in `my-portfolio` folder.
- **Experiment**:
  - Modify your portfolio’s form (e.g., add a `<select>` dropdown).
  - Apply different CSS properties (e.g., `background-color`) to see effects.
  - Break your HTML (e.g., remove `</table>`) and debug using validator.
- **Explore**:
  - Analyze a professional website’s HTML/CSS using developer tools.
  - Note 1 CSS property (e.g., `color`) and try it in your portfolio.
- **Reflect**:
  - Write what you found challenging or exciting about debugging or CSS preview.
  - Reflect on *The Clean Coder* Ch. 3, connecting it to your commitment to quality.

## 9. Resources for Day 4
- **Tutorials**:
  - freeCodeCamp: HTML Review, Intro to CSS.
  - W3Schools: HTML Recap, CSS Introduction.
- **References**:
  - MDN Web Docs: HTML Elements, CSS Basics.
  - W3C: Markup Validator, Accessibility Guidelines.
- **Practice**:
  - Rebuild small HTML snippets (e.g., a form or table) to test recall.
  - Use CodePen to experiment with HTML and basic CSS.

## 10. Goals for Day 4
- Solidify HTML knowledge by reviewing Days 1-3 concepts.
- Debug and validate your portfolio page for error-free code.
- Analyze real-world HTML to understand practical applications.
- Preview CSS with basic styling to prepare for Day 5.
- Continue *The Clean Coder* Ch. 3 and reflect on professional commitments.