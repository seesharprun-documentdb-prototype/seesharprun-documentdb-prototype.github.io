# DocumentDB website and docs

A concise, modern website prototype for DocumentDB, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). The site features a list of community blog posts and core documentation. Content is managed via YAML and Markdown files for easy editing and extensibility.

## Contribute a Blog Post

1. Open `blogs/content.yml` in the repository.

1. Add your blog post as a new YAML entry, following the format of existing posts (title, author, date, summary, etc).

    > [!TIP]
    > The YAML file includes an associated schema that will give you completion support in editors like Visual Studio Code.

1. Submit a pull request for review.

## Develop in GitHub Codespaces

You can develop and preview the site in a fully configured environment using GitHub Codespaces:

- Launch a devcontainer with all dependencies pre-installed.

  [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/documentdb/documentdb.github.io)

- The environment includes Node.js, Next.js, and Tailwind CSS setup for instant development and preview.

- Use `npm run dev` to start the local server and preview changes.

- The environment also includes the required Visual Studio Code extensions to edit the Markdown and YAML files with full completion support.
