{
  "rules_directory": "clinerules",
  "task_rules": [
    {
      "task": "Convert patterns and instructions in the 'knowledge/' directory into simple, understandable knowledge for NotebookLM.",
      "process": "1. Create a research plan file in the 'research/' directory for each pattern/subject. 2. Perform research based on the plan (internal files, potentially external search). 3. Synthesize research into simple knowledge (like explaining to a 5th grader). 4. Write the simplified knowledge into a dedicated location (e.g., 'notebooklm-knowledge/'). 5. Update Memory Bank.",
      "management_tool": {
        "tool_name": "sequentialthinking",
        "reason": "Use the sequentialthinking MCP tool to manage the steps and progress for processing each pattern/subject due to the large number of items in the 'knowledge/' directory."
      }
    },
    {
      "task": "Update the GitHub repository after task completion.",
      "process": "1. Add any changes to the Git staging area. 2. Commit the changes with a descriptive message. 3. Push the changes to the remote origin.",
      "trigger": "after_task_completion"
    }
  ]
}
