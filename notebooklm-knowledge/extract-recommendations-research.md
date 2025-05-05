# Research Paper: Principles and Practices of Finding Good Advice (Extracting Recommendations) (Enhanced for NotebookLM)

## Introduction: What is Finding Good Advice (Extracting Recommendations) and Why Does It Matter?
Imagine you read something that gives you helpful tips on how to do something better, like how to draw a better picture or how to save money. Finding good advice (extracting recommendations) is like reading text and finding all the suggestions or tips that are given! It's about pulling out the "recommendations" that are offered.

**What is it?** A recommendation is a suggestion or piece of advice about what someone should do. Extracting recommendations means reading a piece of writing and identifying the suggestions or tips that are provided. These recommendations can be clearly stated (like "You should try this...") or they can be ideas that make sense to do based on what the text says. You then put these recommendations into a clear list.
**Why it matters?** Recommendations are valuable because they tell you what you can do to improve, solve a problem, or achieve a goal. By finding and extracting recommendations, you can quickly identify the actionable advice from a piece of content. This is useful for learning what steps to take, understanding what the author suggests, or gathering ideas for improvement. It's about finding the helpful tips! This paper is like your guide to becoming a super advice finder and extracting recommendations!

## Core Goal: Finding the Helpful Tips and Suggestions in a Text!
The main point of finding good advice (extracting recommendations) is to analyze input text and extract practical recommendations, outputting them as a concise bulleted list in Markdown.

**What's the goal?** To read a piece of text and find the helpful tips or suggestions about what someone should do, and then put all those recommendations into a list using bullet points in Markdown, making sure each suggestion is short (no more than 16 words) and there are no warnings or notes.
**Why is this the goal?** Because recommendations provide actionable insights that can guide decisions and actions. By extracting practical recommendations from content, you provide users with clear suggestions for what they can do based on the information presented. This is valuable for applying knowledge, making improvements, or taking next steps. It's about making sure that the helpful tips are clearly identified and presented in a usable format.

## Guiding Principles: Your Compass for Recommendation Finding

These principles are like the directions on a compass, guiding you to find recommendations.

### Principle 1: What Should I Do? (Content Analysis)
Imagine reading text and looking for phrases like "you should" or "it's a good idea to." This principle means understanding the input text to identify suggestions or advice.

**What is it?** Reading the input text carefully to understand its content and identify statements or phrases that suggest actions, steps, or considerations.
**Why it matters:** You need to understand the text to find the recommendations.
**How to do it:** Read the text carefully. Look for phrases that indicate advice or suggestions.

### Principle 2: Is It Advice? (Recommendation Identification)
Imagine the text says, "The sky is blue." That's a fact, not advice! This principle means recognizing statements that are recommendations.

**What is it?** Distinguishing between statements that are recommendations (suggestions for action) and other types of statements (like facts or descriptions).
**Why it matters:** The output should focus only on recommendations.
**How to do it:** For each statement, ask: Is this telling someone what they should do or consider?

### Principle 3: Pull Out the Words! (Extraction)
Imagine copying the words that describe the recommendations from the text. This principle means accurately pulling out the descriptions of the recommendations.

**What is it?** Accurately extracting the descriptions of the recommendations from the input text.
**Why it matters:** You need the correct words for the recommendations.
**How to do it:** Copy the text that describes the recommendations accurately.

### Principle 4: Say It Briefly! (Conciseness)
Imagine a recommendation is explained in a long paragraph, but you need to write it in just 16 words! This principle means summarizing recommendations to fit the word limit.

**What is it?** Summarizing each extracted recommendation into a concise phrase or sentence that is no more than 16 words long.
**Why it matters:** Recommendations need to be short and easy to understand quickly.
**How to do it:** For each recommendation, write a short summary and edit it to be no more than 16 words.

### Principle 5: Put It in a List! (Structured Formatting)
Imagine the recommendations are just scattered around! This principle means presenting the extracted recommendations as a list.

**What is it?** Presenting the extracted recommendations as a list of items using Markdown bullet points.
**Why it matters:** A list format makes the recommendations easy to read and scan.
**How to do it:** Use `-` or `*` at the beginning of each line for a recommendation.

### Principle 6: Just Use What the Text Says! (Objectivity)
Imagine the list of recommendations includes advice you think is good, but it wasn't in the text! This principle means reporting the recommendations as presented or implied in the input, without adding interpretation.

**What is it?** Reporting the extracted recommendations based solely on the content provided in the input text, without injecting personal opinions or external recommendations.
**Why it matters:** The extracted recommendations should accurately reflect the content of the original text.
**How to do it:** Focus on extracting the recommendations that are actually in the input text or that logically flow from it.

### Principle 7: Follow the Rules for Showing It! (Adherence to Constraints)
Imagine the list of recommendations is supposed to be in a certain format, but you don't follow the rules. This principle means following the specific formatting rules for the output, like using Markdown without bold or italics.

**What is it?** Adhering strictly to the specified output instructions, including using Markdown format, bulleted lists, and not using special characters like bold or italics or including warnings/notes.
**Why it matters:** Following the formatting rules ensures the output is presented correctly and is easy to use.
**How to do it:** Format your list of recommendations using Markdown bullet points. Do not use asterisks for bold or italics. Do not include any extra text like warnings.

## Quality Criteria: What "Good" Recommendation Lists Look Like (The Checklist!)

Here's how you can check if your advice finding is super good!

### You Found the Suggestions (Content Analysis)
**What it means:** You correctly identified the suggestions or advice in the text.
**Why it matters:** You need to find the recommendations to extract them.

### They Are Recommendations (Recommendation Identification)
**What it means:** You correctly identified statements that are recommendations.
**Why it matters:** The output should only contain recommendations.

### They Are Short (Conciseness)
**What it means:** Each recommendation is no more than 16 words long.
**Why it matters:** Recommendations should be concise.

### It's in a List (Structured Formatting)
**What it means:** The extracted recommendations are organized into a bulleted list.
**Why it matters:** A list format is easy to read.

### You Just Used What the Text Says (Objectivity)
**What it means:** The list of recommendations is based on the input text and doesn't include outside ideas.
**Why it matters:** The output should accurately reflect the input.

### You Followed All the Rules for Showing It (Correct Format)
**What it means:** Your output is presented in Markdown format without extra characters or warnings.
**Why it matters:** Following the format is important.

## Best Practices: Your Toolkit for Recommendation Finding

These are like the special tools you can use to be an amazing advice finder.

### Read the Text Carefully
**What it is:** Carefully analyzing the input text to understand its content and identify any suggestions or advice.
**Why it's a best practice:** You need to read the text to find the recommendations accurately.
**How to do it:** Read the input multiple times. Look for phrases that indicate advice or suggestions.

### Identify Recommendations
**What it is:** Figuring out the specific statements in the text that are recommendations, whether clearly stated or implied.
**Why it is a best practice:** These are the items to include in your list.
**How to do it:** What is the author suggesting that someone should do or consider?

### Summarize Recommendations
**What it is:** Condensing each recommendation into a concise phrase or sentence that is no more than 16 words long.
**Why it is a best practice:** This meets the word count requirement for each bullet point.
**How to do it:** For each recommendation, write a short summary and edit it to be no more than 16 words.

### Present as a Bulleted List
**What it is:** Presenting the extracted and summarized recommendations as a list of items using Markdown bullet points.
**Why it is a best practice:** This follows the specified output format and makes the list easy to read.
**How to do it:** Use `-` or `*` at the beginning of each line for a recommendation.

### Follow the Output Rules Exactly
**What it is:** Presenting your list of recommendations in Markdown format without using special characters like bold or italics and without including any warnings or notes.
**Why it's a best practice:** Following the format is important for compatibility and readability.
**How to do it:** Make sure your generated output is in Markdown, uses bullet points, and does not use asterisks for bold or italics or include any extra text.

## Common Pitfalls: Traps to Watch Out For in Finding Recommendations

These are like holes in the path that can make your recommendation finding wrong!

### Not Understanding the Text (Misinterpretation)
**What it is:** Misunderstanding the content of the input text.
**Why it's a pitfall:** This leads to extracting incorrect or irrelevant recommendations.
**How to avoid:** Read the text carefully (Best Practice 1!).

### Missing Recommendations
**What it is:** Failing to identify all relevant recommendations in the text.
**Why it's a pitfall:** The list of recommendations will be incomplete.
**How to avoid:** Read the text specifically looking for recommendations (Principle 1 & Best Practice 2!).

### Wrong Items (Not Recommendations)
**What it is:** Extracting information that is not a recommendation.
**Why it's a pitfall:** The output should only contain recommendations.
**How to avoid:** Ensure it's advice (Principle 2!).

### Recommendations Too Long
**What it is:** Providing recommendations that are longer than 16 words.
**Why it's a pitfall:** This violates the word count requirement.
**How to avoid:** Summarize recommendations to fit the word limit (Principle 4 & Best Practice 3!).

### Adding Outside Ideas
**What it is:** Including recommendations in the list that were not in the original text or logically implied by it.
**Why it's a pitfall:** The extracted recommendations should be based on the input.
**How to avoid:** Ensure objectivity (Principle 6!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Not using the specific Markdown format or constraints requested, like using bold text or including warnings.
**Why it's a pitfall:** Your output might be hard to read or use.
**How to avoid:** Follow the output rules exactly (Best Practice 5!). Pay close attention to all instructions.

### Using Bold or Italics
**What it is:** Using bold or italics formatting in the Markdown output.
**Why it's a pitfall:** This violates a specific output instruction.
**How to avoid:** Do not use bold or italics formatting (Output Instructions!).

### Including Warnings or Notes
**What it is:** Including extra text like warnings or notes along with the list of recommendations.
**Why it's a pitfall:** The output should only be the list of recommendations.
**How to avoid:** Do not include warnings or notes (Output Instructions!).

## Conclusion: Becoming a Master Advice Finder!
Becoming great at finding good advice (extracting recommendations) is like becoming a super helper who finds the helpful tips! It's about what should I do, is it advice, pull out the words, say it briefly, put it in a list, just use what the text says, and follow the rules for showing it. By using these principles and best practices, and by watching out for the common traps, you can extract practical recommendations from input. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of finding good advice, making sure you can always find the helpful tips and suggestions in a text!
