# System Patterns

## System Architecture

- [ ] Describe the system architecture.

## Key Technical Decisions

- The primary output artifact is a "Common Knowledge Context Pack" consisting of multiple, distinct instruction sets in Markdown format, designed for consumption by AI assistants (like NotebookLM) and humans.
- The strategy for generating the content of the Context Pack involves using a "Meta-Prompt" with a suitable LLM to generate these individual instruction sets. This is being explored as an alternative to a single "one-shot" prompt for the entire document or a sequential prompting approach where content for each topic is generated iteratively by a human user.

## Design Patterns in Use

- The "Common Knowledge Context Pack" follows a structured Markdown format, acting as a standardized knowledge representation composed of individual instruction sets.
- Each individual instruction set within the pack adheres to a consistent structure: `# Instruction Set: [Main Topic Title]`, `## Core Goal of this Task Area`, `## Guiding Principles for Success`, `## Quality Criteria: What "Good" Looks Like`, `## Best Practices: How to Execute Effectively` (including sub-task specifics), `## Common Pitfalls: What to Avoid`, and optional `## Illustrative Example`.
- The content generation process utilizes a "Meta-Prompt" pattern to instruct an LLM to generate these structured instruction sets. These patterns are sourced from the Fabric project.
- The use of clear Markdown headings (`#`, `##`, `###`) and bullet points (`*`, `-`) within the Context Pack is a key design pattern to ensure the content is well-structured and easily parsable and usable by AI assistants like NotebookLM.

## Component Relationships

- [ ] Explain the relationships between components.

## Critical Implementation Paths

- [ ] Outline the critical implementation paths.
