# Research Plan: Analyse Email Headers

**Goal:** To create simple, understandable knowledge for NotebookLM explaining how to look at email headers to find clues about where an email came from and if it's safe, like explaining to a 5th grader.

**Relevant Internal Files:**
- knowledge/analyse_email_headers/system.md
- knowledge/analyse_email_headers/user.md (if exists and contains relevant info)
- patterns/pattern_explanations.md

**Key Concepts to Understand and Explain Simply:**
- What are email headers (like an envelope on a letter)?
- What kind of information is in headers (sender, receiver, path taken)?
- What are SPF, DKIM, DMARC, and ARC and why they are like security stamps?
- How to check these security stamps to see if an email is real or fake.
- Simple analogies (e.g., checking the return address and postmarks on a letter).

**Potential External Research Topics:**
- Simple explanations of email headers and email security for kids or beginners.

**Steps to Take in ACT MODE:**
1. Read `knowledge/analyse_email_headers/system.md` and potentially `knowledge/analyse_email_headers/user.md`.
2. Synthesize the information from these files and the key concepts into a simple explanation.
3. Write the simplified knowledge into a new file (location to be determined, e.g., `notebooklm-knowledge/analyse_email_headers.md`).
4. Update Memory Bank (`progress.md`, `activeContext.md`) to reflect completion for this pattern.
