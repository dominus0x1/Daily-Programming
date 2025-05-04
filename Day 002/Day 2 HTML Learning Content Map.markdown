# Day 2 HTML Learning Content Map

This content map outlines the HTML knowledge to master on your second day of learning web development, completing the foundational HTML needed for the MERN stack. It focuses on forms, tables, advanced semantics, and metadata, building on Day 1’s basics (syntax, structure, text elements, links, images, lists, semantics). The goal is to create a functional webpage with a form and table, while starting to develop professional habits with *The Clean Coder*.

## 1. HTML Forms
- **Purpose**: Enable user input (e.g., contact forms, signups) critical for interactive MERN apps.
- **Key Elements**:
  - `<form>`: Container for form inputs; attributes: `action` (where data is sent), `method` (GET/POST).
  - `<input>`: Input fields (e.g., `type="text"`, `type="email"`, `type="radio"`, `type="checkbox"`); attributes: `name`, `placeholder`, `required`.
  - `<label>`: Labels for inputs, improving accessibility; attribute: `for` (links to input’s `id`).
  - `<button>`: Submits or triggers actions; attribute: `type="submit"`.
  - `<textarea>`: Multi-line text input; attributes: `rows`, `cols`.
  - `<select>` and `<option>`: Dropdown menus.
- **Practice**:
  - Create a contact form with text, email, and message fields.
  - Add a radio button (e.g., “Preferred contact: Email/Phone”).
  - Experiment with `required` and `placeholder` attributes.
- **Example**:
  ```html
  <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required>
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
      <button type="submit">Send</button>
  </form>
  ```

## 2. HTML Tables
- **Purpose**: Display tabular data (e.g., schedules, product lists) useful for data-driven MERN apps.
- **Key Elements**:
  - `<table>`: Table container.
  - `<tr>`: Table row.
  - `<th>`: Table header cell (bold, centered by default).
  - `<td>`: Table data cell.
  - `<thead>`: Groups header rows.
  - `<tbody>`: Groups body rows.
- **Practice**:
  - Create a table for a weekly schedule (e.g., days vs. tasks).
  - Add headers and at least 3 rows of data.
  - Experiment with `colspan` or `rowspan` for merged cells.
- **Example**:
  ```html
  <table>
      <thead>
          <tr>
              <th>Day</th>
              <th>Task</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Monday</td>
              <td>Learn HTML</td>
          </tr>
          <tr>
              <td>Tuesday</td>
              <td>Learn CSS</td>
          </tr>
      </rosshair.com/2025/05/03/roadmap-for-learning-web-development-from-scratch-in-2025/#day-2-html-learning-content-map)**Example**:
  ```html
  <table>
      <thead>
          <tr>
              <th>Day</th>
              <th>Task</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Monday</td>
              <td>Learn HTML</td>
          </tr>
          <tr>
              <td>Tuesday</td>
              <td>Learn CSS</td>
          </tr>
      </tbody>
  </table>
  ```

## 3. Advanced Semantic HTML
- **Purpose**: Enhance structure, accessibility, and SEO with meaningful tags, preparing for complex MERN layouts.
- **Key Elements**:
  - `<article>`: Independent, self-contained content (e.g., a blog post).
  - `<section>`: Thematic grouping of content (e.g., a chapter or tab).
  - `<aside>`: Content indirectly related to main content (e.g., sidebar).
  - `<figure>` and `<figcaption>`: Images or diagrams with captions.
- **Practice**:
  - Restructure your Day 1 webpage (e.g., bio page) using `<article>`, `<section>`, and `<aside>`.
  - Add a `<figure>` with an image and caption.
- **Example**:
  ```html
  <article>
      <h2>About Me</h2>
      <section>
          <h3>Bio</h3>
          <p>I’m learning web development!</p>
      </section>
      <aside>
          <h3>Fun Facts</h3>
          <p>I love coding and coffee.</p>
      </aside>
      <figure>
          <img src="photo.jpg" alt="My photo">
          <figcaption>My favorite coding setup</figcaption>
      </figure>
  </article>
  ```

## 4. Metadata and Accessibility
- **Purpose**: Optimize webpages for SEO, browsers, and accessibility, foundational for MERN apps.
- **Key Elements**:
  - `<meta>`: Metadata for SEO (e.g., `description`, `keywords`), character set (`charset="UTF-8"`).
  - `<link>`: Favicon (`rel="icon"`).
  - Accessibility: ARIA attributes (e.g., `role`, `aria-label`), enhanced `alt` text.
- **Practice**:
  - Add `<meta>` tags for description and keywords to your webpage.
  - Include a favicon (use a placeholder image if needed).
  - Add ARIA attributes to your form (e.g., `role="form"`).
- **Example**:
  ```html
  <head>
      <meta charset="UTF-8">
      <meta name="description" content="My personal webpage">
      <meta name="keywords" content="web development, portfolio">
      <title>My Webpage</title>
      <link rel="icon" href="favicon.ico">
  </head>
  ```

## 5. Practical Skills
- **Creating a Functional Webpage**:
  - Build a **personal bio page** combining:
    - A contact form (`<form>` with text, email, message).
    - A table (e.g., skills or schedule).
    - Advanced semantics (`<article>`, `<section>`, `<aside>`).
    - Metadata (`<meta>`, favicon) and accessibility (ARIA, `alt`).
  - Example structure:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="My personal bio page">
        <meta name="keywords" content="bio, web development">
        <title>My Bio Page</title>
        <link rel="icon" href="favicon.ico">
    </head>
    <body>
        <header>
            <h1>My Bio</h1>
        </header>
        <main>
            <article>
                <h2>About Me</h2>
                <section>
                    <h3>Introduction</h3>
                    <p>I’m a beginner web developer learning the MERN stack.</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HTML</td>
                                <td>Beginner</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>Not started</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <aside>
                    <h3>Hobbies</h3>
                    <p>Coding, reading, hiking.</p>
                </aside>
                <figure>
                    <img src="photo.jpg" alt="My workspace">
                    <figcaption>My coding environment</figcaption>
                </figure>
            </article>
            <form action="/submit" method="POST" role="form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </main>
        <footer>
            <p>© 2025 My Bio Page</p>
        </footer>
    </body>
    </html>
    ```
- **Testing and Debugging**:
  - Open your `.html` file in a browser to test the form and table.
  - Use browser developer tools (right-click → Inspect) to check HTML structure.
  - Validate your code with the W3C Markup Validator.
- **Organizing Files**:
  - Store your project in a folder (e.g., `my-bio-page`).
  - Create an `images` subfolder for assets (e.g., `photo.jpg`, `favicon.ico`).
  - Reference assets correctly (e.g., `src="images/photo.jpg"`).

## 6. Professional Habits
- **Reading**: *The Clean Coder* by Robert C. Martin, Chapter 1 (Professionalism).
  - Focus: Taking responsibility for your code, committing to learning, and practicing deliberately.
  - Practice: Write a 1-paragraph reflection on how professionalism applies to your Day 2 learning (e.g., ensuring your HTML is error-free).
- **Code Quality**:
  - Use consistent indentation (2 or 4 spaces).
  - Add comments (`<!-- Comment -->`) to explain sections (e.g., `<!-- Contact Form -->`).
  - Save and commit your work to a Git repository (if set up).

## 7. Best Practices
- **Accessibility**:
  - Use `for` attributes in `<label>` to link to `<input>` IDs.
  - Include descriptive `alt` text for images.
  - Add ARIA attributes where applicable (e.g., `role="form"`).
- **SEO and Metadata**:
  - Ensure `<meta>` tags are relevant and concise.
  - Use a meaningful `<title>` (e.g., “My Bio Page”).
- **File Naming**:
  - Use lowercase (e.g., `index.html`, `images/photo.jpg`).
  - Avoid spaces or special characters.

## 8. Learning Activities
- **Build a Personal Bio Page**:
  - Include a contact form, skills table, semantic structure, and metadata.
  - Save as `index.html` in a `my-bio-page` folder.
  - Test in a browser and validate with W3C.
- **Experiment**:
  - Add a dropdown (`<select>`) to your form.
  - Try merging table cells with `colspan` or `rowspan`.
  - Break your code (e.g., remove a closing tag) to observe errors, then fix it.
- **Explore**:
  - Inspect a real website’s HTML (e.g., a portfolio) using developer tools.
  - Compare its use of forms and tables to yours.
- **Reflect**:
  - Write a short note on what you found challenging or exciting about forms or tables.
  - Reflect on *The Clean Coder* Ch. 1 in your notes.

## 9. Resources for Day 2
- **Tutorials**:
  - freeCodeCamp: HTML Forms and Tables sections.
  - W3Schools: HTML Forms, Tables, Semantics, Meta Tags.
- **References**:
  - MDN Web Docs: `<form>`, `<table>`, `<article>`, `<meta>`, ARIA.
- **Practice**:
  - Create separate `.html` files to test forms and tables individually.
  - Use CodePen to experiment with small snippets.

## 10. Goals for Day 2
- Master HTML forms, tables, advanced semantics, and metadata.
- Build and validate a personal bio page with a form, table, and semantic structure.
- Understand accessibility and SEO basics for MERN app foundations.
- Start *The Clean Coder* Ch. 1 and reflect on professionalism.
- Feel confident combining HTML elements into a cohesive webpage.
