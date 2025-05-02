# Day 1 HTML Learning Content Map

This content map outlines the essential HTML knowledge to master on your first day of learning web development. It covers foundational concepts, syntax, and practical skills to create a basic webpage.

## 1. Understanding HTML Basics
- **What is HTML?**
  - Definition: HyperText Markup Language, the standard language for structuring content on the web.
  - Purpose: Defines the structure and content of a webpage (e.g., headings, paragraphs, images).
  - Role: Acts as the "skeleton" of a webpage, which CSS and JavaScript enhance.
- **How HTML Works**
  - HTML files (e.g., `index.html`) are read by browsers to render webpages.
  - Browsers interpret HTML tags to display content.
- **File Setup**
  - Create a `.html` file (e.g., `index.html`).
  - Open it in a browser to view the webpage (Live Server Extention is recommended
  -).
  - Use a text editor like Visual Studio Code for writing HTML.

## 2. HTML Syntax and Structure
- **Basic Syntax**
  - Tags: Markup enclosed in angle brackets (e.g., `<p>`, `</p>`).
  - Opening tags (e.g., `<p>`) and closing tags (e.g., `</p>`) surround content.
  - Self-closing tags (e.g., `<img />`) don’t need a closing tag.
  - Elements: The combination of opening tag, content, and closing tag (e.g., `<p>Hello</p>`).
- **Attributes**
  - Provide additional information to tags (e.g., `src` in `<img src="image.jpg">`).
  - Format: `attribute="value"` inside the opening tag.
  - Common attributes: `id`, `class`, `src`, `href`, `alt`.
- **Document Structure**
  - `<!DOCTYPE html>`: Declares the document as HTML5.
  - `<html>`: Root element, contains all other elements.
  - `<head>`: Contains metadata (e.g., title, character set).
  - `<body>`: Contains visible content (e.g., text, images).
  - Example:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>My First Webpage</title>
    </head>
    <body>
        <h1>Welcome</h1>
    </body>
    </html>
    ```

## 3. Essential HTML Elements
- **Text Elements**
  - Headings: `<h1>` to `<h6>` for titles and subtitles (e.g., `<h1>Main Title</h1>`).
  - Paragraphs: `<p>` for blocks of text (e.g., `<p>This is a paragraph.</p>`).
  - Bold and Italic: `<strong>` for bold, `<em>` for italic (e.g., `<strong>Bold text</strong>`).
- **Links**
  - Anchor tag: `<a>` for hyperlinks.
  - Attribute: `href` specifies the URL (e.g., `<a href="https://example.com">Click me</a>`).
- **Images**
  - Image tag: `<img>` (self-closing).
  - Attributes: `src` (image path), `alt` (text description for accessibility).
  - Example: `<img src="photo.jpg" alt="A sunset">`.
- **Lists**
  - Unordered lists: `<ul>` with `<li>` for bullet points (e.g., `<ul><li>Item 1</li></ul>`).
  - Ordered lists: `<ol>` with `<li>` for numbered items (e.g., `<ol><li>First</li></ol>`).
- **Divisions**
  - `<div>`: A container to group content (e.g., `<div><p>Text</p></div>`).
  - Used for organization and styling (later with CSS).

## 4. Semantic HTML
- **What is Semantic HTML?**
  - Using meaningful tags to describe content (e.g., `<header>` instead of just `<div>`).
  - Improves accessibility and SEO.
- **Key Semantic Elements**
  - `<header>`: For introductory content or navigation.
  - `<nav>`: For navigation links.
  - `<main>`: For the main content of the page.
  - `<footer>`: For footer content (e.g., copyright info).
  - Example:
    ```html
    <header>
        <h1>My Website</h1>
    </header>
    <main>
        <p>Welcome to my page.</p>
    </main>
    <footer>
        <p>© 2025</p>
    </footer>
    ```

## 5. Practical Skills
- **Creating a Simple Webpage**
  - Combine elements to build a basic page with:
    - A heading (`<h1>`).
    - A paragraph (`<p>`).
    - A link (`<a>`).
    - An image (`<img>`).
    - A list (`<ul>` or `<ol>`).
  - Example:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>My Day 1 Page</title>
    </head>
    <body>
        <h1>My First Webpage</h1>
        <p>Welcome to my site!</p>
        <a href="https://example.com">Visit Example</a>
        <img src="sample.jpg" alt="Sample image">
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </body>
    </html>
    ```
- **Testing and Debugging**
  - Open your `.html` file in a browser to see the output.
  - Check for errors (e.g., missing closing tags) if content doesn’t display correctly.
  - Use browser developer tools (right-click → Inspect) to explore the HTML structure.
- **Organizing Files**
  - Create a project folder (e.g., `my-website`).
  - Store images in a subfolder (e.g., `my-website/images/sample.jpg`).
  - Reference images correctly (e.g., `<img src="images/sample.jpg">`).

## 6. Best Practices
- **Code Readability**
  - Use proper indentation for nested elements.
  - Add comments (`<!-- Comment -->`) to explain sections.
- **Accessibility**
  - Always include `alt` attributes for images.
  - Use semantic tags (e.g., `<main>`, `<nav>`) for better screen reader support.
  - Ensure `lang` attribute in `<html lang="en">` for language specification.
- **File Naming**
  - Use lowercase for file names (e.g., `index.html`, not `Index.HTML`).
  - Avoid spaces or special characters in file names.

## 7. Learning Activities
- **Build a Personal Bio Page**
  - Include: A heading with your name, a paragraph about yourself, a list of hobbies, a link to a favorite website, and an image (use a placeholder if needed).
- **Experiment**
  - Change text in `<p>` or `<h1>` and refresh the browser.
  - Add more list items or nested lists (e.g., `<ul><li>Item<ul><li>Subitem</li></ul></li></ul>`).
  - Try breaking the code (e.g., remove a closing tag) to see what happens, then fix it.
- **Explore**
  - View the HTML of a simple website using browser developer tools.
  - Compare your code structure to real-world examples.

## 8. Resources for Day 1
- **Tutorials**
  - FreeCodeCamp: HTML beginner lessons.
  - W3Schools: HTML tutorials and “Try It Yourself” editor.
- **References**
  - MDN Web Docs: HTML element and attribute guides.
- **Practice**
  - Create multiple small HTML files to test different elements (e.g., one for lists, one for images).

## 9. Goals for Day 1
- Understand what HTML is and its role in web development.
- Write a valid HTML document with proper structure (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`).
- Use at least 5 different HTML elements (e.g., `<h1>`, `<p>`, `<a>`, `<img>`, `<ul>`).
- Create and view a simple webpage in a browser.
- Feel confident experimenting with HTML tags and attributes.