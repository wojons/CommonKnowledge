# Tech Context

## Technologies Used

- [ ] List the technologies being used.

## Development Setup

- [ ] Describe the development setup.

## Technical Constraints

- Google NotebookLM Source Limits:
    - Maximum Size: 200MB for a single locally uploaded file.
    - Maximum Word Count: 500,000 words for a single source (uploaded, pasted, Docs/Slides/URLs, YouTube transcripts).
    - Supported Types: Google Docs, Google Slides, PDFs, Text (.txt), Markdown (.md), web URLs, copy-pasted text, YouTube URLs (public with captions), audio files (MP3, WAV, etc.).
- Gemini 2.5 Pro Maximum Output Length:
    - Maximum Output Tokens: 65,536 tokens in a single response.
    - While the input context window is large (1 million tokens), output per turn is capped.
- ChatGPT Maximum Output Length (Per Response Turn):
    - GPT-3.5 Turbo: 4,096 output tokens.
    - GPT-4 Turbo: 4,096 output tokens.
    - GPT-4o: 16,384 output tokens (with potential practical limits).
    - o1-preview (Pro): 32,000 output tokens.
    - o1-mini (Pro/Plus): 64,000 output tokens.
    - o3 (upcoming): 48,000 output tokens.
    - o3-mini (upcoming): 32,000 output tokens.
    - Note: Models might stop generating before hitting the absolute maximum limit; prompting with "continue" or "keep going" is a workaround.

### NotebookLM Source Best Practices

- Structure sources to be informative and educational, presenting information as if teaching a human user.
- Include the "what" and "why" behind concepts and best practices, not just directive instructions.
- Organize content logically with clear headings and structure (like Markdown) to help NotebookLM parse and reference information effectively.
- Be mindful of source size and number limits when compiling the Context Pack.

### Principles of AI Deep Research Systems

- Involve iterative processing of information from multiple sources.
- Synthesize findings from diverse data types (text, images, PDFs).
- Break down complex questions into manageable parts.
- Focus on retrieving and leveraging authoritative information.
- May perform iterative cycles to refine understanding and gather additional details.

## Dependencies

- [ ] List the dependencies.

## Tool Usage Patterns

- When using Gemini 2.5 Pro for generating long content (potentially for the Context Pack), very long outputs exceeding 65,536 tokens per turn will require breaking the task down into smaller, iterative steps (e.g., generating section by section).
- The strength of Gemini 2.5 Pro for deep research lies in its ability to process extensive input information rather than producing single outputs longer than 65k tokens.
- For generating very long, detailed research outputs with ChatGPT (thousands of words or more), which generally exceeds single-turn limits, strategies include:
    - Sequential Prompting: Breaking the task into sections and prompting for each part, providing previous output as context.
    - "Continue" Prompts: Asking the model to continue if it stops mid-way.
- OpenAI has a dedicated "Deep Research" feature designed for comprehensive investigations and compiling in-depth reports (potentially a few thousand words). This feature has its own usage limits based on account tier (e.g., Plus gets 10 standard tasks/month, Pro gets 125). This feature likely orchestrates multiple steps internally (web Browse, synthesis) rather than just generating one extremely long, continuous text block vastly exceeding standard token limits.
