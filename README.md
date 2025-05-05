# Common Knowledge System

This project aims to build a comprehensive "Common Knowledge" system that serves as a reusable knowledge base for AI assistants (like Google NotebookLM) and human users. The goal is to provide foundational principles, quality criteria, best practices, and common pitfalls across various domains, enhancing the effectiveness of AI tools when processing related information.

The AI/LLM patterns included in this project are sourced from the [Fabric project](https://github.com/danielmiessler/fabric) by Daniel Miessler. This project adopts an MIT License, aligning with the apparent intent of the Fabric project for widespread use of its patterns.

The project is organized into the following key directories:

- **`memory-bank/`**: Contains the core project documentation files (`projectbrief.md`, `productContext.md`, `activeContext.md`, `systemPatterns.md`, `techContext.md`, `progress.md`) that track the project's context, patterns, technology, and progress.
- **`research/`**: Stores the raw web search results gathered on various topics related to common tasks and best practices. Each main topic has a subdirectory containing the search results in Markdown format.
- **`knowledge/`**: Contains the generated Markdown instruction sets for each topic, synthesized from the research. It also stores the full content of AI/LLM pattern definitions provided by the user, organized into subdirectories for each pattern.
- **`patterns/`**: Includes documentation related to the AI/LLM patterns used in the project, such as `pattern_explanations.md` which lists the patterns and their brief descriptions.
- **`clinerules/`**: Holds project-specific `.clinerules` files that define interaction patterns and guidelines for Cline's behavior within this project context.

This structure is designed to keep all project assets organized and accessible, facilitating future work on building and expanding the Common Knowledge system.
