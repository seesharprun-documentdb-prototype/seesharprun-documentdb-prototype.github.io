# DocumentDB website and docs

A concise, modern website prototype for DocumentDB, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). The site features a list of community blog posts and core documentation. Content is managed via YAML and Markdown files for easy editing and extensibility.

## Contributing a Blog Post

1. Open `blogs/content.yml` in the repository.

1. Add your blog post as a new entry, following the format of existing posts (title, author, date, summary, etc).
  - The YAML file is validated against its schema for consistency and editor support.

1. Submit a pull request for review.


## Contributing a Documentation Article

1. Navigate to the appropriate folder under `articles/` (e.g., `articles/quickstart/`, `articles/postgresql/`).

1. Add your article as a Markdown file (`.md`).
  - Update the corresponding `navigation.yml` to include your new article if needed.
  - Ensure your content follows the structure and style of existing articles.

1. Submit a pull request for review.

## Contributing Reference Content

1. Open the relevant file in the `reference/` directory (e.g., `reference/content.yml`, or a command/operator YAML file).

1. Add or update entries according to the schema and format used in existing files.
  - Reference content is organized by command, operator, and type. Follow the folder structure for new additions.
  - Use the schemas in the `schema/` directory for guidance and validation.

1. Submit a pull request for review.

## Develop in GitHub Codespaces

You can develop and preview the site in a fully configured environment using GitHub Codespaces:

- Launch a devcontainer with all dependencies pre-installed.

  [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/documentdb/documentdb.github.io)

- The environment includes Node.js, Next.js, and Tailwind CSS setup for instant development and preview.

- Use `npm run dev` to start the local server and preview changes.

- The environment also includes the required Visual Studio Code extensions to edit the Markdown and YAML files with full completion support.
