# Research Paper: Principles and Practices of Finding What People Think Will Happen (Extracting Predictions) (Enhanced for NotebookLM)

## Introduction: What is Finding What People Think Will Happen (Extracting Predictions) and Why Does It Matter?
Imagine someone says, "I think it will rain tomorrow." That's a prediction – they are saying what they think will happen in the future! Finding what people think will happen (extracting predictions) is like reading text and finding all the statements where someone says what they believe will happen in the future! It's about spotting predictions and also finding details about when they think it will happen, how sure they are, and how we will know if they were right.

**What is it?** A prediction is a statement about what someone thinks will happen in the future. Extracting predictions means reading a piece of writing and identifying the statements that are predictions. For each prediction, you also look for specific details like: the date or time when the prediction is expected to happen, how confident the person is that it will happen (confidence level), and any mentioned method for verifying the prediction's accuracy. You then present these predictions and their details in a list.
**Why it matters?** Predictions are often based on someone's understanding of how things work and what they expect to happen. By finding and extracting predictions, you can understand what people believe about the future and the reasons behind their expectations. This can be useful for understanding different viewpoints, evaluating potential outcomes, or tracking whether predictions turn out to be accurate. It's about finding out what people expect to happen! This paper is like your guide to becoming a super future finder and extracting predictions!

## Core Goal: Finding Statements About the Future and Their Details!
The main point of finding what people think will happen (extracting predictions) is to analyze input text and extract predictions about the future, including specific details such as date, confidence level, and verification method, outputting them in Markdown.

**What's the goal?** To read a piece of text and figure out the statements that say what someone thinks will happen in the future (predictions), and for each prediction, find details like when it's expected to happen, how sure they are, and how we will check if it was right, and then present these predictions with their details in Markdown without bold or italics.
**Why is this the goal?** Because predictions are valuable for understanding expectations about the future and the reasoning behind those expectations. By extracting predictions and their associated details (date, confidence, verification method), you provide a structured overview of anticipated future events and the basis for evaluating their accuracy over time. This is valuable for tracking forecasts, assessing expertise, and understanding different perspectives on future outcomes. It's about making sure that statements about the future are clearly identified and presented with relevant context for evaluation.

## Guiding Principles: Your Compass for Prediction Finding

These principles are like the directions on a compass, guiding you to find predictions.

### Principle 1: What Will Happen? (Content Analysis)
Imagine reading text and looking for sentences that talk about the future. This principle means understanding the input text to identify statements about the future.

**What is it?** Reading the input text carefully to understand its content and identify statements or phrases that describe anticipated future events or outcomes.
**Why it matters:** You need to understand the text to find the predictions.
**How to do it:** Read the text carefully. Look for phrases like "will happen," "is expected to," "forecast," "predicts."

### Principle 2: Is It a Prediction? (Prediction Identification)
Imagine the text says, "It rained yesterday." That's about the past, not a prediction! This principle means recognizing statements that are predictions about the future.

**What is it?** Distinguishing between statements about the past or present and statements that are predictions about future events or outcomes.
**Why it matters:** The output should focus only on predictions.
**How to do it:** For each statement about time, ask: Is this about something that already happened, is happening now, or is expected to happen in the future?

### Principle 3: Find the Details! (Detail Extraction)
Imagine the prediction is "It will rain," but you also find details about *when* it will rain and *how sure* they are. This principle means accurately pulling out specific details associated with each prediction.

**What is it?** For each identified prediction, extracting specific details such as the date or timeframe when the prediction is expected to occur, the stated or implied level of confidence in the prediction, and any mentioned method for verifying the prediction's accuracy.
**Why it matters:** These details provide important context for the prediction.
**How to do it:** After finding a prediction, look for information about when, how sure, and how to check if it was right.

### Principle 4: Follow the Rules for Showing It! (Adherence to Constraints)
Imagine the list of predictions is supposed to be in a certain format, but you don't follow the rules. This principle means following the specific formatting rules for the output, like using Markdown without bold or italics.

**What is it?** Adhering strictly to the specified output instructions, including using Markdown format and not using special characters like bold or italics.
**Why it matters:** Following the formatting rules ensures the output is presented correctly and is easy to use.
**How to do it:** Format your list of predictions and their details using Markdown. Do not use asterisks for bold or italics.

## Quality Criteria: What "Good" Prediction Lists Look Like (The Checklist!)

Here's how you can check if your prediction finding is super good!

### You Found What Will Happen (Content Analysis)
**What it means:** You correctly identified the statements about the future in the text.
**Why it matters:** You need to find the predictions to extract them.

### They Are Predictions (Prediction Identification)
**What it means:** You correctly identified statements that are predictions about the future.
**Why it matters:** The output should focus on predictions.

### You Found the Details (Detail Extraction)
**What it means:** You accurately extracted the date, confidence level, and verification method for each prediction.
**Why it matters:** Details provide context for predictions.

### You Followed All the Rules for Showing It (Correct Format)
**What it means:** Your output is presented in Markdown format without extra characters.
**Why it matters:** Following the format is important.

## Best Practices: Your Toolkit for Prediction Finding

These are like the special tools you can use to be an amazing future finder.

### Read the Text Carefully
**What it is:** Carefully analyzing the input text to understand its content and identify statements about future events or outcomes.
**Why it's a best practice:** You need to read the text to find the predictions.
**How to do it:** Read the input multiple times. Look for phrases that indicate the future.

### Identify Predictions
**What it is:** Figuring out the specific statements in the text that are predictions about the future.
**Why it is a best practice:** These are the items to extract.
**How to do it:** What does the author think will happen in the future?

### Extract Prediction Details
**What it is:** For each identified prediction, finding the associated details about when it's expected, how sure they are, and how to check if it was right.
**Why it is a best practice:** These details provide important context.
**How to do it:** Look for dates, percentages (for confidence), or descriptions of how the prediction will be verified.

### Present Predictions with Details
**What it is:** Presenting each extracted prediction along with its associated details in a clear format in Markdown.
**Why it is a best practice:** This follows the specified output format.
**How to do it:** For each prediction, list the prediction statement and its date, confidence, and verification method.

### Follow the Output Rules Exactly
**What it is:** Presenting your list of predictions and their details in Markdown format without using special characters like bold or italics.
**Why it's a best practice:** Following the format is important for compatibility and readability.
**How to do it:** Make sure your generated output is in Markdown and does not use asterisks for bold or italics.

## Common Pitfalls: Traps to Watch Out For in Finding Predictions

These are like holes in the path that can make your prediction finding wrong!

### Not Understanding the Text (Misinterpretation)
**What it is:** Misunderstanding the content of the input text.
**Why it's a pitfall:** This leads to extracting incorrect or irrelevant predictions.
**How to avoid:** Read the text carefully (Best Practice 1!).

### Missing Predictions
**What it is:** Failing to identify all predictions in the text.
**Why it's a pitfall:** The list of predictions will be incomplete.
**How to avoid:** Read the text specifically looking for predictions (Principle 1 & Best Practice 2!).

### Wrong Items (Not Predictions)
**What it is:** Extracting statements that are not actually predictions about the future.
**Why it's a pitfall:** The output should only contain predictions.
**How to avoid:** Identify predictions correctly (Principle 2 & Best Practice 2!).

### Missing Details
**What it is:** Failing to extract all the relevant details (date, confidence, verification) for each prediction.
**Why it's a pitfall:** The predictions will be incomplete.
**How to avoid:** Extract prediction details (Principle 3 & Best Practice 3!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Not using the specific Markdown format or constraints requested, like using bold text.
**Why it's a pitfall:** Your output might be hard to read or use.
**How to avoid:** Follow the output rules exactly (Best Practice 5!). Pay close attention to all instructions.

### Using Bold or Italics
**What it is:** Using bold or italics formatting in the Markdown output.
**Why it's a pitfall:** This violates a specific output instruction.
**How to avoid:** Do not use bold or italics formatting (Output Instructions!).

### Including Warnings or Notes
**What it is:** Including extra text like warnings or notes along with the list of predictions.
**Why it's a pitfall:** The output should only be the list of predictions and their details.
**How to avoid:** Do not include warnings or notes (Output Instructions!).

## Conclusion: Becoming a Master Future Finder!
Becoming great at finding what people think will happen (extracting predictions) is like becoming a super helper who finds statements about the future! It's about what will happen, is it a prediction, find the details, and follow the rules for showing it. By using these principles and best practices, and by watching out for the common traps, you can extract predictions from input. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of finding what people think will happen, making sure you can always find statements about the future and their details!
