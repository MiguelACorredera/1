# Markdown Blog Generator

- **Objective:** To build a command-line tool that takes a folder of Markdown files as input, processes them, and generates a complete, static HTML website (a blog) as output. This mimics the basic functionality of popular static site generators like Jekyll or Eleventy.

## User Stories

- [ ] User can run the tool from the command line, specifying an input directory (containing Markdown files) and an output directory (for the generated HTML files).
- [ ] Each Markdown file in the input directory should be converted into a corresponding HTML page in the output directory.
- [ ] The tool must parse YAML frontmatter at the top of each Markdown file to get metadata like `title`, `author`, and `date`.
- [ ] The tool must generate an `index.html` page in the output directory that lists all blog posts, linking to each one. The list should be sorted with the most recent post first.
- [ ] User can provide a basic HTML template file that the tool will use to wrap the converted Markdown content for each post. The template should have a placeholder like `{{content}}`.
- [ ] The final generated site should be "static" – meaning it's just HTML, CSS, and JavaScript files that can be hosted anywhere without a server-side language.

## Bonus Features

- [ ] **RSS Feed:** Automatically generate an `rss.xml` file for the blog so people can subscribe to it.
- [ ] **Tagging:** Allow users to add `tags` in the frontmatter. The tool should then generate separate index pages for each tag (e.g., `/tags/programming.html`).
- [ ] **"Watch" Mode:** Add a feature where the tool watches the input directory for changes and automatically rebuilds the site whenever a file is saved.
- [ ] **Theming:** Allow a user to specify a "theme" directory which contains the HTML templates and static assets (like CSS/JS), making the blog's appearance easily customizable.

## Resources and Links

- **Markdown Parsing:** You will need a library to convert Markdown to HTML.
  - **(JavaScript)** [marked.js](https://github.com/markedjs/marked)
  - **(Python)** [Python-Markdown](https://python-markdown.github.io/)
- **Frontmatter Parsing:** A library to parse the YAML metadata block.
  - **(JavaScript)** [front-matter](https://github.com/jxson/front-matter)
  - **(Python)** [Python-Frontmatter](https://github.com/eyeseast/python-frontmatter)
- **Templating:** A library to insert your HTML content into templates.
  - **(JavaScript)** [EJS](https://ejs.co/) or [Handlebars](https://handlebarsjs.com/)
  - **(Python)** [Jinja2](https://jinja.palletsprojects.com/en/3.1.x/)
- **Inspiration:** Look at how popular static site generators work.
  - [Jekyll](https://jekyllrb.com/)
  - [Eleventy (11ty)](https://www.11ty.dev/)
