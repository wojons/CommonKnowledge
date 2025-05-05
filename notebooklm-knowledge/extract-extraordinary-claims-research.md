# Research Paper: Principles and Practices of Finding Claims That Are Hard to Believe (Extracting Extraordinary Claims) (Enhanced for NotebookLM)

## Introduction: What is Finding Claims That Are Hard to Believe (Extracting Extraordinary Claims) and Why Does It Matter?
Imagine someone tells you they can fly by flapping their arms! That's a claim that's hard to believe! Finding claims that are hard to believe (extracting extraordinary claims) is like listening to or reading what people say and finding the statements that seem very unlikely to be true, especially if they go against what science or common sense tells us. It's about spotting claims that are "extraordinary" and need really strong proof to be believed.

**What is it?** An extraordinary claim is a statement that is very unusual or goes against what is generally accepted as true, often in science or common knowledge. Extracting extraordinary claims means reading or listening to what people say (like in conversations) and identifying the statements that seem very unlikely or are scientifically disputed or false. You look for claims that are "extraordinary" and would require very strong evidence to be believed. You then put these claims into a clear list.
**Why it matters?** In a world with lots of information, it's important to be able to tell the difference between claims that are likely true and claims that are very unlikely to be true. Extraordinary claims often require extraordinary evidence! By identifying these claims, you can be cautious about believing them and understand that they might be scientifically disputed or false. It's about thinking critically about what you hear and not believing everything without strong proof! This paper is like your guide to becoming a super claim checker and finding claims that are hard to believe!

## Core Goal: Finding Claims That Are Likely Not True or Need Strong Proof!
The main point of finding claims that are hard to believe (extracting extraordinary claims) is to analyze input text (conversations) and extract extraordinary claims (likely scientifically disputed or false), outputting them as a list in Markdown.

**What's the goal?** To read conversations or text and find the statements that are very unusual, go against what is generally known, or are likely scientifically disputed or false, and then put those "extraordinary claims" into a list in Markdown without bold or italics.
**Why is this the goal?** Because extraordinary claims require extraordinary evidence. By identifying these claims, you highlight statements that are likely to be false or lack sufficient scientific support. This helps users approach such claims with skepticism and encourages a focus on evidence-based reasoning. It's about making sure that claims that are far outside the norm are clearly identified as potentially unreliable.

## Guiding Principles: Your Compass for Extraordinary Claims

These principles are like the directions on a compass, guiding you to find extraordinary claims.

### Principle 1: What Seems Unlikely? (Content Analysis)
Imagine listening to a conversation and hearing someone say something that sounds very unusual or goes against what you know about the world. This principle means understanding the input text (conversations) to identify claims being made that are likely to be extraordinary.

**What is it?** Reading the input text (conversations) and analyzing its content to identify statements that are presented as facts or truths but are likely to be scientifically disputed, false, or very unusual.
**Why it matters:** You need to identify the statements that fit the criteria of being "extraordinary claims."
**How to do it:** Read the text carefully. Look for statements that seem unbelievable, go against scientific consensus, or sound like conspiracy theories or pseudoscience.

### Principle 2: Are They Really Extraordinary? (Claim Evaluation - Implicit)
Imagine someone says, "It's going to rain tomorrow." That's a claim, but it's not extraordinary! This principle means using some way to decide if a claim is "extraordinary" based on how likely it is to be scientifically disputed or false.

**What is it?** Using implicit criteria (like whether the claim contradicts scientific understanding or is widely disputed) to determine if a claim is "extraordinary" and likely scientifically disputed or false.
**Why it matters:** The output should focus only on claims that are truly extraordinary and likely unreliable.
**How to do it:** For each claim you identify, ask: Does this claim go against what scientists generally agree on? Is there strong evidence to suggest this claim is false?

### Principle 3: Put It in a List! (Structured Formatting)
Imagine the extraordinary claims are just scattered around! This principle means presenting the extracted claims as a list.

**What is it?** Presenting the identified extraordinary claims as a list of items using Markdown bullet points or numbered lists.
**Why it matters:** A list format makes the extraordinary claims easy to read and scan.
**How to do it:** Use `-` or `*` at the beginning of each line for an extraordinary claim.

### Principle 4: Just Use What the Text Says! (Objectivity)
Imagine the list of extraordinary claims includes something you just thought of that wasn't in the conversation! This principle means identifying claims as presented in the input, without adding personal judgment on their truthfulness.

**What is it?** Identifying extraordinary claims based solely on the content provided in the input text (conversations), without injecting personal opinions or external claims.
**Why it matters:** The output should accurately reflect the claims made in the original text.
**How to do it:** Focus on extracting the claims that were actually made in the input conversation.

### Principle 5: Make It Right! (Accuracy)
Imagine the extracted claim from the conversation is wrong! This principle means ensuring the extracted claims are correct.

**What is it?** Ensuring that the extracted extraordinary claims accurately reflect the statements made in the input text (conversations).
**Why it matters:** The extracted claims should contain correct information from the original text.
**How to do it:** Double-check that the claims you extracted are accurate compared to the original input text.

### Principle 6: Follow the Rules for Showing It! (Adherence to Constraints)
Imagine the list of extraordinary claims is supposed to be in a certain format, but you don't follow the rules. This principle means following the specific formatting rules for the output, like using Markdown without bold or italics.

**What is it?** Adhering strictly to the specified output instructions, including using Markdown format and not using special characters like bold or italics.
**Why it matters:** Following the formatting rules ensures the output is presented correctly and is easy to use.
**How to do it:** Format your list of extraordinary claims using Markdown. Do not use asterisks for bold or italics.

## Quality Criteria: What "Good" Extraordinary Claim Lists Look Like (The Checklist!)

Here's how you can check if your extraordinary claim finding is super good!

### You Found the Claims That Are Hard to Believe (Content Analysis)
**What it means:** You correctly identified the statements in the text that are likely to be extraordinary.
**Why it matters:** You need to find the extraordinary claims to list them.

### They Are Likely Not True (Claim Evaluation)
**What it means:** The identified claims are likely scientifically disputed or false.
**Why it matters:** The output should focus on claims that are likely unreliable.

### It's in a List (Structured Formatting)
**What it means:** The extracted claims are organized into a list.
**Why it matters:** A list format is easy to read.

### You Just Used What the Text Says (Objectivity)
**What it means:** The list of claims is based on the input text and doesn't include outside ideas.
**Why it matters:** The output should accurately reflect the input.

### The Claims Are Right (Accuracy)
**What it means:** The extracted claims are correct.
**Why it matters:** The output should contain accurate information.

### You Followed All the Rules for Showing It (Correct Format)
**What it means:** Your output is presented in Markdown format without extra characters.
**Why it matters:** Following the format is important.

## Best Practices: Your Toolkit for Extraordinary Claims

These are like the special tools you can use to be an amazing claim checker.

### Read the Conversation Carefully
**What it is:** Carefully analyzing the input text (conversations) to identify any statements that are presented as facts or truths.
**Why it's a best practice:** You need to find the claims to evaluate them.
**How to do it:** Read the input multiple times. Look for sentences that state something as a fact.

### Identify Extraordinary Claims
**What it is:** Figuring out which of the identified claims are likely to be scientifically disputed or false based on general knowledge.
**Why it is a best practice:** These are the claims to include in your list.
**How to do it:** For each claim, ask: Is this claim widely accepted as true? Does it go against scientific understanding?

### Present as a List
**What it is:** Presenting the extracted extraordinary claims as a list of items using Markdown bullet points or numbered lists.
**Why it is a best practice:** This follows the specified output format and makes the list easy to read.
**How to do it:** Use `-` or `*` at the beginning of each line for an extraordinary claim.

### Follow the Output Rules Exactly
**What it is:** Presenting your list of extraordinary claims in Markdown format without using special characters like bold or italics.
**Why it's a best practice:** Following the format is important for compatibility and readability.
**How to do it:** Make sure your generated output is in Markdown and does not use asterisks for bold or italics.

## Common Pitfalls: Traps to Watch Out For in Finding Claims

These are like holes in the path that can make your extraordinary claim finding wrong!

### Not Understanding the Conversation (Misinterpretation)
**What it is:** Misunderstanding the content of the input text (conversations).
**Why it's a pitfall:** This leads to extracting incorrect or irrelevant claims.
**How to avoid:** Read the conversation carefully (Best Practice 1!).

### Missing Claims
**What it is:** Failing to identify all the extraordinary claims in the text.
**Why it's a pitfall:** The list of claims will be incomplete.
**How to avoid:** Read the text specifically looking for claims (Principle 1 & Best Practice 2!).

### Wrong Claims (Not Extraordinary)
**What it is:** Including claims in the list that are not actually extraordinary or are widely accepted as true.
**Why it's a pitfall:** The output should focus only on extraordinary claims.
**How to avoid:** Identify extraordinary claims correctly (Principle 2 & Best Practice 2!).

### Adding Outside Ideas
**What it is:** Including claims in the list that were not in the original conversation.
**Why it's a pitfall:** The extracted claims should be based on the input.
**How to avoid:** Ensure objectivity (Principle 4!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Not using the specific Markdown format or constraints requested, like using bold text.
**Why it's a pitfall:** Your output might be hard to read or use.
**How to avoid:** Follow the output rules exactly (Best Practice 4!). Pay close attention to all instructions.

### Using Bold or Italics
**What it is:** Using bold or italics formatting in the Markdown output.
**Why it's a pitfall:** This violates a specific output instruction.
**How to avoid:** Do not use bold or italics formatting (Output Instructions!).

### Including Warnings or Notes
**What it is:** Including extra text like warnings or notes along with the list of claims.
**Why it's a pitfall:** The output should only be the list of claims.
**How to avoid:** Do not include warnings or notes (Output Instructions!).

## Conclusion: Becoming a Master Claim Checker!
Becoming great at finding claims that are hard to believe (extracting extraordinary claims) is like becoming a super helper who spots claims that need strong proof! It's about what seems unlikely, are they really extraordinary, put it in a list, just use what the text says, make it right, and follow the rules for showing it. By using these principles and best practices, and by watching out for the common traps, you can extract extraordinary claims from conversations. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of finding claims that are hard to believe, making sure you can always spot claims that are likely not true or need strong proof!
