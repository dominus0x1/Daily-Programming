# Day 3 HTML Learning Content Map

This content map outlines the HTML knowledge to master on your third day of learning web development, completing the foundational HTML needed for the MERN stack. It focuses on multimedia elements, advanced accessibility, and refining skills through a comprehensive project, building on Days 1 and 2. The goal is to create a polished webpage, validate it, and prepare for CSS, while fostering professionalism with *The Clean Coder*.

## 1. Multimedia Elements
- **Purpose**: Embed audio and video content to enhance user experience, relevant for dynamic MERN apps (e.g., media-rich portfolios or content platforms).
- **Key Elements**:
  - `<audio>`: Embeds audio files; attributes: `src`, `controls`, `autoplay`, `loop`.
  - `<video>`: Embeds video files; attributes: `src`, `controls`, `poster` (thumbnail), `width`, `height`.
  - `<source>`: Specifies multiple media formats for compatibility (e.g., MP3, MP4).
  - `<track>`: Adds subtitles or captions for accessibility; attribute: `kind="subtitles"`, `src` (e.g., `.vtt` file).
- **Practice**:
  - Embed an audio clip (use a placeholder MP3 or royalty-free sample) with playback controls.
  - Embed a video (use a placeholder MP4) with a poster image and subtitles.
  - Test compatibility in different browsers (Chrome, Firefox).
- **Example**:
  ```html
  <audio controls>
      <source src="sample.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>
  <video controls width="300" poster="thumbnail.jpg">
      <source src="sample.mp4" type="video/mp4">
      <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English">
      Your browser does not support the video element.
  </video>
  ```

## 2. Advanced Accessibility
- **Purpose**: Deepen accessibility practices to ensure MERN apps are inclusive, building on Day 2’s ARIA attributes.
- **Key Concepts**:
  - **ARIA States and Properties**: Use dynamic ARIA attributes (e.g., `aria-live="polite"` for dynamic content, `aria-describedby` for additional context).
  - **Keyboard Navigation**: Ensure all interactive elements (e.g., forms, buttons) are accessible via keyboard (`tabindex`, `focus` states).
  - **Semantic Structure**: Reinforce use of semantic tags (`<nav>`, `<main>`, `<article>`) to aid screen readers.
  - **Accessible Media**: Provide text alternatives for multimedia (e.g., `<track>` for videos, `aria-label` for controls).
- **Practice**:
  - Add `aria-live="polite"` to a form’s error message area.
  - Ensure your form and buttons are keyboard-navigable (test with Tab key).
  - Add `aria-describedby` to link a form input to a help text.
  - Include a `<track>` element in your video for captions.
- **Example**:
  ```html
  <form role="form">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" aria-describedby="email-help" required>
      <p id="email-help">Enter a valid email address.</p>
      <div aria-live="polite" id="error">Invalid email format.</div>
      <button type="submit" tabindex="0">Submit</button>
  </form>
  ```

## 3. Refining HTML Skills
- **Purpose**: Consolidate and polish HTML knowledge to create robust, error-free code for MERN projects.
- **Key Concepts**:
  - **Code Organization**: Use consistent indentation, comments, and logical grouping of elements.
  - **Error Handling**: Identify and fix common HTML errors (e.g., mismatched tags, invalid attributes).
  - **Validation**: Revisit W3C Markup Validator to ensure standards compliance.
  - **Cross-Browser Testing**: Check rendering in multiple browsers (Chrome, Firefox, Edge).
- **Practice**:
  - Review your Day 2 bio page for indentation and add comments (e.g., `<!-- Form Section -->`).
  - Introduce an intentional error (e.g., unclosed `<div>`) and use W3C Validator to find/fix it.
  - Test your page in two browsers to confirm consistent rendering.
- **Example**:
  ```html
  <!-- Main Content Section -->
  <main>
      <h1>My Portfolio</h1>
      <!-- Skills Table -->
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
                  <td>Intermediate</td>
              </tr>
          </tbody>
      </table>
  </main>
  ```

## 4. Practical Skills
- **Creating a Polished Webpage**:
  - Build a **portfolio page** combining:
    - Multimedia (`<audio>` or `<video>` with `<track>` for accessibility).
    - A form with advanced ARIA attributes (e.g., `aria-live`, `aria-describedby`).
    - A table (e.g., project list).
    - Advanced semantics (`<nav>`, `<article>`, `<section>`).
    - Metadata (`<meta>`, favicon) and keyboard accessibility.
  - Example structure:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="My portfolio page">
        <meta name="keywords" content="portfolio, web development, MERN">
        <title>My Portfolio</title>
        <link rel="icon" href="images/favicon.ico">
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
                    </tbody>
                </table>
            </article>
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
- **Testing and Debugging**:
  - Open `index.html` in a browser to test multimedia, form, and navigation.
  - Use browser developer tools to inspect HTML structure and test keyboard navigation (Tab key).
  - Validate with W3C Markup Validator (https://validator.w3.org/) to ensure error-free code.
- **Organizing Files**:
  - Store in a `my-portfolio` folder.
  - Create `images` and `media` subfolders for assets (e.g., `images/favicon.ico`, `media/intro.mp4`, `media/subtitles.vtt`).
  - Reference assets correctly (e.g., `src="media/intro.mp4"`).

## 5. Professional Habits
- **Reading**: *The Clean Coder* by Robert C. Martin, Chapter 2 (Saying No).
  - Focus: Learning to manage commitments and prioritize quality over rushed work.
  - Practice: Write a 1-paragraph reflection on how saying no to cutting corners (e.g., skipping validation) applies to your Day 3 tasks.
- **Code Quality**:
  - Maintain consistent indentation (2 or 4 spaces).
  - Add comments to organize sections (e.g., `<!-- Navigation -->`).
  - Commit your portfolio page to a Git repository (if set up from the roadmap’s Day 11 plan).

## 6. Best Practices
- **Accessibility**:
  - Use `aria-label` for navigation links and `aria-describedby` for form inputs.
  - Ensure multimedia includes `<track>` for captions and text fallbacks.
  - Test keyboard navigation for all interactive elements.
- **SEO and Metadata**:
  - Include relevant `<meta>` tags (e.g., `description`, `keywords`) for search visibility.
  - Use a descriptive `<title>` (e.g., “My Portfolio”).
- **File Naming**:
  - Use lowercase (e.g., `index.html`, `media/intro.mp4`).
  - Avoid spaces or special characters in filenames.

## 7. Learning Activities
- **Build a Portfolio Page**:
  - Create a multi-section portfolio with multimedia, a form, a project table, semantic structure, and metadata.
  - Save as `index.html` in a `my-portfolio` folder.
  - Validate with W3C Markup Validator and test in two browsers (Chrome, Firefox).
- **Experiment**:
  - Add an `<audio>` element with multiple `<source>` formats (e.g., MP3, OGG).
  - Try `aria-hidden="true"` on a decorative element to hide it from screen readers.
  - Break your code (e.g., omit a `<source>` in `<video>`) and debug using validator or browser tools.
- **Explore**:
  - Inspect a real portfolio website’s HTML to see how it uses multimedia or ARIA.
  - Compare its structure to your portfolio page.
- **Reflect**:
  - Note what you found challenging or exciting about multimedia or accessibility.
  - Reflect on *The Clean Coder* Ch. 2 in your notes, connecting it to your commitment to quality HTML.

## 8. Resources for Day 3
- **Tutorials**:
  - freeCodeCamp: HTML Multimedia and Accessibility sections.
  - W3Schools: `<audio>`, `<video>`, ARIA Attributes.
- **References**:
  - MDN Web Docs: `<audio>`, `<video>`, `<track>`, ARIA States and Properties.
  - W3C: Web Accessibility Initiative (WAI-ARIA).
- **Practice**:
  - Create separate `.html` files to test `<audio>` and `<video>` individually.
  - Use CodePen to experiment with ARIA-enhanced forms.

## 9. Goals for Day 3
- Master HTML multimedia elements (`<audio>`, `<video>`, `<track>`).
- Deepen accessibility with advanced ARIA attributes and keyboard navigation.
- Build and validate a polished portfolio page with multimedia, a form, and semantic structure.
- Continue *The Clean Coder* Ch. 2 and reflect on professional commitment to quality.
- Prepare for CSS (Day 5) with a strong, error-free HTML foundation.