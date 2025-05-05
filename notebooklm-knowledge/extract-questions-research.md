# Research Paper: Principles and Practices of Finding Questions (Extracting Questions) (Enhanced for NotebookLM)

## Introduction: What is Finding Questions (Extracting Questions) and Why Does It Matter?
Imagine you are reading a conversation where one person is asking questions to learn about the other person, like in an interview! Finding questions is like reading that conversation and finding all the sentences that end with a question mark or are asking for information! It's about pulling out the questions that someone asked.

**What is it?** A question is a sentence that asks for information. Extracting questions means reading a piece of writing (like a conversation or an interview transcript) and identifying all the sentences that are questions. You look for the questions that were asked by a specific person (like the interviewer). You then put these questions into a clear list.
**Why it matters?** Questions are important for getting information and understanding what someone wants to know! By finding and extracting the questions from a conversation or interview, you can quickly see what topics were discussed and what information the interviewer was trying to get. This can be useful for analyzing interviews, understanding what someone is curious about, or preparing for future conversations. It's about finding out what was asked! This paper is like your guide to becoming a super question spotter and extracting questions!

## Core Goal: Finding All the Questions Asked by the Interviewer!
The main point of finding questions (extracting questions) is to analyze input text (conversation/interview) and extract all questions asked by the interviewer, outputting them as a list in Markdown.

**What's the goal?** To read a piece of text that is a conversation or interview and find all the sentences that are questions that were asked by the interviewer, and then put all those questions into a list in Markdown without bold or italics.
**Why is this the goal?** Because identifying the questions asked by an interviewer is crucial for understanding the flow and focus of an interview or conversation. By extracting a list of these questions, you provide a clear overview of the topics covered and the information sought, which is valuable for analyzing the interview, preparing for future interviews, or understanding the interviewer's technique. It's about making sure that the questions that drive a conversation are clearly identified and listed.

## Guiding Principles: Your Compass for Question Finding

These principles are like the directions on a compass, guiding you to find questions.

### Principle 1: What Is Being Asked? (Content Analysis)
Imagine reading text and looking for sentences that end with a question mark. This principle means understanding the input text (conversation/interview) to identify questions.

**What is it?** Reading the input text carefully to understand its content and identify statements that are phrased as questions or end with a question mark.
**Why it matters:** You need to understand the text to find the questions.
**How to do it:** Read the text carefully. Look for sentences that are asking for information.

### Principle 2: Is It a Question? (Question Identification)
Imagine a sentence ends with a question mark, but it's actually a statement said with surprise! This principle means recognizing statements that are truly questions.

**What is it?** Distinguishing between sentences that are actual questions and those that might be phrased similarly but are not asking for information.
**Why it matters:** The output should only contain actual questions.
**How to do it:** For each sentence that looks like a question, ask: Is this sentence asking for information?

### Principle 3: Who Asked It? (Role Identification)
Imagine the person being interviewed asks a question back to the interviewer. This principle means distinguishing questions asked by the interviewer from those asked by others.

**What is it?** Identifying which participant in the conversation or interview is the interviewer and extracting only the questions that they asked.
**Why it matters:** The output should focus only on the interviewer's questions.
**How to do it:** Determine which person is the interviewer based on the context of the conversation. Only extract questions attributed to that person.

### Principle 4: Pull Out the Words! (Extraction)
Imagine copying the words of the questions asked by the interviewer. This principle means accurately pulling out the questions asked by the interviewer.

**What is it?** Accurately extracting the exact wording of the questions asked by the interviewer from the input text.
**Why it matters:** You need the correct words for the questions.
**How to do it:** Copy the text of the questions asked by the interviewer accurately.

### Principle 5: Put It in a List! (Structured Formatting)
Imagine the questions are just scattered around! This principle means presenting the extracted questions as a list.

**What is it?** Presenting the extracted questions asked by the interviewer as a list of items using Markdown bullet points or numbered lists.
**Why it matters:** A list format makes the questions easy to read and scan.
**How to do it:** Use `-` or `*` at the beginning of each line for a question.

### Principle 6: Just Use What the Text Says! (Objectivity)
Imagine the list of questions includes a question you just thought of that wasn't in the conversation! This principle means reporting the questions as presented in the input, without adding interpretation.

**What is it?** Reporting the extracted questions based solely on the content provided in the input text, without injecting personal opinions or external questions.
**Why it matters:** The extracted questions should accurately reflect the content of the original text.
**How to do it:** Focus on extracting the questions that were actually asked by the interviewer in the input text.

### Principle 7: Follow the Rules for Showing It! (Adherence to Constraints)
Imagine the list of questions is supposed to be in a certain format, but you don't follow the rules. This principle means following the specific formatting rules for the output, like using Markdown without bold or italics.

**What is it?** Adhering strictly to the specified output instructions, including using Markdown format and not using special characters like bold or italics.
**Why it matters:** Following the formatting rules ensures the output is presented correctly and is easy to use.
**How to do it:** Format your list of questions using Markdown. Do not use asterisks for bold or italics.

## Quality Criteria: What "Good" Question Lists Look Like (The Checklist!)

Here's how you can check if your question finding is super good!

### You Found What Is Being Asked (Content Analysis)
**What it means:** You correctly identified the statements in the text that are questions.
**Why it matters:** You need to find the questions to extract them.

### They Are Questions (Question Identification)
**What it means:** You correctly identified statements that are questions.
**Why it matters:** The output should only contain questions.

### They Were Asked by the Interviewer (Role Identification)
**What it means:** You correctly identified and extracted only the questions asked by the interviewer.
**Why it matters:** The output should focus on the interviewer's questions.

### You Pulled Out the Words (Extraction)
**What it means:** You accurately extracted the wording of the questions.
**Why it matters:** You need the correct words for the questions.

### It's in a List (Structured Formatting)
**What it means:** The extracted questions are organized into a list.
**Why it matters:** A list format is easy to read.

### You Just Used What the Text Says (Objectivity)
**What it means:** The list of questions is based on the input text and doesn't include outside ideas.
**Why it matters:** The output should accurately reflect the input.

### You Followed All the Rules for Showing It (Correct Format)
**What it means:** Your output is presented in Markdown format without extra characters.
**Why it matters:** Following the format is important.

## Best Practices: Your Toolkit for Question Finding

These are like the special tools you can use to be an amazing question spotter.

### Read the Conversation Carefully
**What it is:** Carefully analyzing the input text (conversation or interview transcript) to understand its content and identify statements that are questions.
**Why it's a best practice:** You need to read the text to find the questions.
**How to do it:** Read the input multiple times. Look for sentences that end with a question mark or are phrased as questions.

### Identify Questions
**What it is:** Figuring out the specific statements in the text that are questions.
**Why it is a best practice:** These are the items to extract.
**How to do it:** What sentences are asking for information?

### Determine the Interviewer
**What it is:** Identifying which participant in the conversation is the interviewer.
**Why it is a best practice:** You need to extract questions only from the interviewer.
**How to do it:** Based on the context, figure out who is asking the questions to learn about the other person.

### Extract Interviewer Questions
**What it is:** Pulling out the specific questions that were asked by the interviewer.
**Why it is a best practice:** These are the questions to include in your list.
**How to do it:** Copy the text of the questions asked by the interviewer.

### Present as a List
**What it is:** Presenting the extracted interviewer questions as a list of items using Markdown bullet points or numbered lists.
**Why it is a best practice:** This follows the specified output format and makes the list easy to read.
**How to do it:** Use `-` or `*` at the beginning of each line for a question.

### Follow the Output Rules Exactly
**What it is:** Presenting your list of interviewer questions in Markdown format without using special characters like bold or italics.
**Why it's a best practice:** Following the format is important for compatibility and readability.
**How to do it:** Make sure your generated output is in Markdown and does not use asterisks for bold or italics.

## Common Pitfalls: Traps to Watch Out For in Finding Questions

These are like holes in the path that can make your question finding wrong!

### Not Understanding the Conversation (Misinterpretation)
**What it is:** Misunderstanding the content of the input text.
**Why it's a pitfall:** This leads to extracting incorrect or irrelevant questions.
**How to avoid:** Read the conversation carefully (Best Practice 1!).

### Missing Questions
**What it is:** Failing to identify all questions asked by the interviewer in the text.
**Why it's a pitfall:** The list of questions will be incomplete.
**How to avoid:** Read the text specifically looking for questions (Principle 1 & Best Practice 1!).

### Wrong Items (Not Questions)
**What it is:** Extracting statements that are not actually questions.
**Why it's a pitfall:** The output should only contain questions.
**How to avoid:** Identify questions correctly (Principle 2 & Best Practice 2!).

### Including Questions from Others
**What it is:** Extracting questions asked by participants other than the interviewer.
**Why it's a pitfall:** The output should only contain the interviewer's questions.
**How to avoid:** Determine the interviewer and extract only their questions (Principle 3 & Best Practice 3 & 4!).

### Adding Outside Ideas
**What it is:** Including questions in the list that were not in the original text.
**Why it's a pitfall:** The extracted questions should be based on the input.
**How to avoid:** Ensure objectivity (Principle 6!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Not using the specific Markdown format or constraints requested, like using bold text.
**Why it's a pitfall:** Your output might be hard to read or use.
**How to avoid:** Follow the output rules exactly (Best Practice 6!). Pay close attention to all instructions.

### Using Bold or Italics
**What it is:** Using bold or italics formatting in the Markdown output.
**Why it's a pitfall:** This violates a specific output instruction.
**How to avoid:** Do not use bold or italics formatting (Output Instructions!).

### Including Warnings or Notes
**What it is:** Including extra text like warnings or notes along with the list of questions.
**Why it's a pitfall:** The output should only be the list of questions.
**How to avoid:** Do not include warnings or notes (Output Instructions!).

## Conclusion: Becoming a Master Question Spotter!
Becoming great at finding questions (extracting questions) is like becoming a super helper who finds out what was asked! It's about what is being asked, is it a question, who asked it, pull out the words, put it in a list, just use what the text says, and follow the rules for showing it. By using these principles and best practices, and by watching out for the common traps, you can extract all questions asked by the interviewer in a conversation or interview. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of finding questions, making sure you can always find all the questions asked by the interviewer!
