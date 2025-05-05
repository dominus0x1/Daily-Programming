# HTML Webpage Document Checklist

This checklist ensures HTML webpage documents are standards-compliant, accessible, and optimized for web development, particularly for the MERN stack. It covers mandatory requirements (must-haves for functionality and compliance) and best practices (recommended for quality, maintainability, and user experience). Use this for projects like your portfolio page and future MERN apps.

## Mandatory Requirements
These are non-negotiable for a functional, valid HTML document.

- [ ] **Valid DOCTYPE Declaration**
  - Include `<!DOCTYPE html>` at the start of the document to specify HTML5.
  - Example: `<!DOCTYPE html>`

- [ ] **HTML Root Element with Language**
  - Use `<html lang="en">` to define the document’s language (e.g., `en` for English).
  - Example: `<html lang="en">`

- [ ] **Character Encoding**
  - Include `<meta charset="UTF-8">` in `<head>` to ensure proper character rendering.
  - Example: `<meta charset="UTF-8">`

- [ ] **Document Title**
  - Add a unique, descriptive `<title>` in `<head>` for browser tabs and SEO.
  - Example: `<title>My Portfolio</title>`

- [ ] **Proper Structure**
  - Use `<head>` for metadata and `<body>` for visible content.
  - Ensure no content is outside these tags.
  - Example:
    ```html
    <head>
        <meta charset="UTF-8">
        <title>My Portfolio</title>
    </head>
    <body>
        <h1>Hello</h1>
    </body>
    ```

- [ ] **Closed Tags**
  - Close all non-void elements (e.g., `<p></p>`, `<div></div>`).
  - Use self-closing tags for void elements (e.g., `<img />`, `<input />`).
  - Example: `<p>Text</p>` not `<p>Text`

- [ ] **Correct Attribute Usage**
  - Use valid attributes for elements (e.g., `src` for `<img>`, `href` for `<a>`).
  - Enclose attribute values in quotes (e.g., `class="intro"`).
  - Example: `<img src="image.jpg" alt="Description">`

- [ ] **W3C Validation**
  - Validate the document using the W3C Markup Validator (https://validator.w3.org/) to ensure no errors (e.g., missing tags, invalid nesting).
  - Fix all errors before finalizing.

## Best Practices
These enhance accessibility, maintainability, and performance.

### Structure and Semantics
- [ ] **Use Semantic Elements**
  - Use semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) to improve accessibility and SEO.
  - Example: `<main><article><h2>Content</h2></article></main>`

- [ ] **Logical Nesting**
  - Nest elements correctly (e.g., `<ul><li>Item</li></ul>`, not `<ul><p>Item</p></ul>`).
  - Avoid unnecessary `<div>` wrappers; prefer semantics.
  - Example: `<form><label><input></label></form>`

- [ ] **Consistent Indentation**
  - Indent code (2 or 4 spaces) for readability.
  - Example:
    ```html
    <main>
        <h1>Title</h1>
        <p>Text</p>
    </main>
    ```

- [ ] **Comments for Clarity**
  - Add comments to organize sections (e.g., `<!-- Navigation -->`).
  - Example: `<!-- Form Section --><form>...</form>`

### Accessibility
- [ ] **Alt Text for Images**
  - Provide descriptive `alt` attributes for all `<img>` elements.
  - Use empty `alt=""` for decorative images.
  - Example: `<img src="photo.jpg" alt="My workspace">`

- [ ] **Labels for Form Inputs**
  - Pair `<label>` with `<input>` using `for` and `id` attributes.
  - Example: `<label for="name">Name:</label><input id="name" type="text">`

- [ ] **ARIA Attributes**
  - Add ARIA attributes where needed (e.g., `role="form"`, `aria-label`, `aria-describedby`).
  - Example: `<form role="form"><input aria-describedby="help">`

- [ ] **Keyboard Navigation**
  - Ensure interactive elements (e.g., `<a>`, `<button>`, `<input>`) are keyboard-accessible (use `tabindex="0"` if needed).
  - Test with Tab key.
  - Example: `<button tabindex="0">Submit</button>`

- [ ] **Accessible Multimedia**
  - Include `<track>` for `<video>` or `<audio>` captions.
  - Provide text fallbacks for unsupported browsers.
  - Example:
    ```html
    <video controls>
        <source src="video.mp4" type="video/mp4">
        <track kind="subtitles" src="subtitles.vtt" srclang="en">
        Video not supported.
    </video>
    ```

### SEO and Metadata
- [ ] **Meta Description**
  - Add `<meta name="description" content="...">` for SEO.
  - Keep it concise (150-160 characters).
  - Example: `<meta name="description" content="My portfolio showcasing MERN skills">`

- [ ] **Meta Keywords (Optional)**
  - Include `<meta name="keywords" content="...">` for additional SEO context.
  - Example: `<meta name="keywords" content="portfolio, MERN, web development">`

- [ ] **Favicon**
  - Link a favicon for branding using `<link rel="icon">`.
  - Example: `<link rel="icon" href="images/favicon.ico">`

### File and Asset Management
- [ ] **Organized File Structure**
  - Store HTML in a project folder (e.g., `my-portfolio`).
  - Use subfolders for assets (e.g., `images/`, `media/`).
  - Example: `my-portfolio/index.html`, `my-portfolio/images/photo.jpg`

- [ ] **Correct Asset Paths**
  - Use relative paths for assets (e.g., `src="images/photo.jpg"`).
  - Test paths to ensure assets load.
  - Example: `<img src="images/photo.jpg" alt="Photo">`

- [ ] **Lowercase Filenames**
  - Use lowercase for files (e.g., `index.html`, `styles.css`).
  - Avoid spaces or special characters.

### CSS Integration
- [ ] **Link External CSS**
  - Use `<link rel="stylesheet" href="styles.css">` for maintainable styling.
  - Example: `<link rel="stylesheet" href="styles.css">`

- [ ] **Avoid Inline CSS**
  - Minimize `style` attributes; prefer external CSS for consistency.
  - Example: Use `styles.css` instead of `<p style="color: blue;">`

- [ ] **Accessible Styling**
  - Ensure CSS maintains accessibility (e.g., sufficient color contrast, visible `:focus` states).
  - Example: `.button:focus { outline: 2px solid blue; }`

### Testing and Debugging
- [ ] **Cross-Browser Testing**
  - Test the webpage in at least two browsers (e.g., Chrome, Firefox) for consistent rendering.
  - Example: Check if `<video>` plays in both browsers.

- [ ] **Browser Developer Tools**
  - Use developer tools to inspect HTML/CSS and debug issues (e.g., broken images, misaligned elements).
  - Example: Right-click → Inspect to check `<form>` structure.

- [ ] **Validate Accessibility**
  - Use tools like WAVE (https://wave.webaim.org/) to check accessibility (e.g., contrast, missing `alt`).
  - Fix identified issues.

## Usage Notes
- **How to Use**: Check each item as you build or review your HTML document (e.g., `index.html` for your portfolio page). Ensure all mandatory items are complete and aim to implement best practices.
- **MERN Context**: This checklist ensures your HTML is robust for React components, accessible for all users, and maintainable for full-stack development.
- **Professional Habits**: Aligns with *The Clean Coder* by emphasizing quality, error-free code, and deliberate practice.
- **Frequency**: Apply to every HTML file you create, especially project pages (e.g., portfolio, bio page).

## Example Compliant HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="My portfolio page">
    <meta name="keywords" content="portfolio, MERN">
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
            </ul>
        </nav>
    </header>
    <main>
        <article id="about">
            <h2>About Me</h2>
            <p>Learning the MERN stack.</p>
            <img src="images/photo.jpg" alt="My workspace">
        </article>
        <form role="form" action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" aria-describedby="name-help" required>
            <p id="name-help">Enter your full name.</p>
            <button type="submit" tabindex="0">Submit</button>
        </form>
    </main>
    <footer>
        <p>© 2025 My Portfolio</p>
    </footer>
</body>
</html>
```