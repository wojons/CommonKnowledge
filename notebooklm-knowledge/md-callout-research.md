# Research Paper: Principles and Practices of Highlighting Important Text (Markdown Callouts) (Enhanced for NotebookLM)

## Introduction: What is Highlighting Important Text (Markdown Callouts) and Why Does It Matter?
Imagine you are reading something, and there is a sentence that is a super important tip, or a warning about something dangerous! Highlighting important text (Markdown callouts) is like putting a special box around that sentence to make it stand out and show that it's important! It's a way to highlight different kinds of important information in writing.

**What is it?** Markdown is a way to format text for websites and documents. A callout is a special block of text that is visually set apart from the rest of the writing to draw attention to it. Markdown callouts are a way to create these special boxes in Markdown. There are different types of callouts for different kinds of important information, like a "Note" for general information, a "Tip" for helpful advice, an "Important" for crucial information, a "Warning" for potential problems, and a "Caution" for things to be very careful about. Finding callouts means reading text and deciding what kind of important information a sentence or paragraph contains, and then putting that text inside the correct callout box using Markdown.
**Why it matters?** Highlighting important text helps readers quickly spot information that is crucial, helpful, or potentially dangerous! It makes the writing easier to scan and ensures that readers don't miss key details. This is useful in instructions, guides, or any writing where certain information needs to stand out. It's about making sure important words get noticed! This paper is like your guide to becoming a super text highlighter and highlighting important text!

## Core Goal: Making Important Text Stand Out with Special Boxes!
The main point of highlighting important text (Markdown callouts) is to analyze input text, classify its content based on its nature, select the most appropriate Markdown callout type, and generate the corresponding Markdown callout block containing the original text.

**What's the goal?** To read a piece of text and figure out what kind of important information it contains (like if it's a tip, a warning, or just a note). You then choose the right kind of special box (callout) for that information and put the text inside that box using Markdown, showing only the box and the text inside it, without any extra notes.
**Why is this the goal?** Because visually highlighting important information improves readability and ensures that readers pay attention to crucial details. By classifying the content's nature and using the appropriate callout type (Note, Tip, Important, Warning, Caution), you effectively communicate the significance and purpose of the highlighted text. This is valuable for creating clear and user-friendly documentation, guides, and other written content. It's about making sure that important information is easy to spot and understand.

## Guiding Principles: Your Compass for Callout Creation

These principles are like the directions on a compass, guiding you to create callouts.

### Principle 1: What Kind of Important Info Is It? (Content Classification)
Imagine reading a sentence and thinking, "This is a helpful tip!" This principle means classifying the input text based on its nature and purpose (e.g., a note, a tip, a warning).

**What is it?** Analyzing the input text to determine the type of important information it contains, such as a general note, a helpful suggestion, crucial information, or a caution about a potential problem.
**Why it matters:** The type of information determines which callout box is most appropriate.
**How to do it:** Read the text carefully. Is it giving advice? Is it warning you about something? Is it just a general piece of information?

### Principle 2: Choose the Right Box! (Mapping)
Imagine you decided the sentence is a tip, and you choose the "Tip" callout box. This principle means selecting the callout type that best matches the content's classification.

**What is it?** Based on the classification of the input text, selecting the most appropriate Markdown callout type from the available options (Note, Tip, Important, Warning, Caution).
**Why it matters:** Using the correct callout type effectively communicates the significance and purpose of the highlighted text to the reader.
**How to do it:** Match the nature of the content to the description of the callout types. If it's a helpful suggestion, choose "Tip." If it's about something dangerous, choose "Warning" or "Caution."

### Principle 3: Build the Box! (Formatting)
Imagine writing the special code in Markdown to create the callout box. This principle means generating the correct Markdown syntax for the selected callout type.

**What is it?** Writing the specific Markdown code required to create a callout block of the selected type.
**Why it matters:** The correct Markdown syntax is needed for the callout to display properly.
**How to do it:** Use the correct Markdown syntax for callouts, which typically involves a special marker (like `>`) followed by the callout type in brackets (e.g., `> [!TIP]`).

### Principle 4: Put the Text Inside! (Inclusion)
Imagine putting the important sentence inside the callout box you built. This principle means including the original input text within the generated callout block.

**What is it?** Placing the original text that you want to highlight inside the Markdown callout block you generated.
**Why it matters:** The callout is meant to highlight the original text.
**How to do it:** Put the original input text on the lines following the callout type marker, indented if necessary.

### Principle 5: Just Use What You Were Given! (Objectivity)
Imagine classifying the text as a warning when it was just a general note! This principle means basing the classification and callout selection on the input content and callout type definitions.

**What is it?** Classifying the content and selecting the callout type based solely on the nature and purpose of the input text and the provided descriptions of the callout types, without injecting personal opinions or interpretations.
**Why it matters:** The classification and callout should accurately reflect the content's nature.
**How to do it:** Focus on understanding the input text and matching it to the provided callout type descriptions.

### Principle 6: Follow the Rules for Showing It! (Adherence to Constraints)
Imagine the output is supposed to be only the callout box, but you include extra notes outside the box! This principle means following the specific formatting rules for the output, like not including warnings or notes.

**What is it?** Adhering strictly to the specified output instructions, including outputting only the Markdown callout block containing the original text and not including any warnings or notes.
**Why it matters:** Following the formatting rules ensures the output is presented correctly and is easy to use as intended.
**How to do it:** Make sure your generated output contains only the Markdown callout block and no other text.

## Quality Criteria: What "Good" Markdown Callouts Look Like (The Checklist!)

Here's how you can check if your text highlighting is super good!

### You Understood the Text (Content Analysis)
**What it means:** You correctly understood the content and nature of the input text.
**Why it matters:** Understanding the content is essential for classification.

### You Said What Kind of Info It Is (Classification)
**What it means:** You correctly classified the content's nature (note, tip, warning, etc.).
**Why it matters:** Classification guides callout selection.

### You Chose the Right Box (Mapping)
**What it means:** You selected the most appropriate callout type for the content.
**Why it matters:** Using the correct type communicates significance.

### You Built the Box Right (Formatting)
**What it means:** You generated the correct Markdown syntax for the callout block.
**Why it matters:** Correct syntax is needed for display.

### You Put the Text Inside (Inclusion)
**What it means:** You included the original input text within the callout block.
**Why it matters:** The callout highlights the original text.

### You Just Used What You Were Given (Objectivity)
**What it means:** The classification and callout selection are based on the input text and definitions.
**Why it matters:** Analysis should be objective.

### You Followed All the Rules (Adherence to Constraints)
**What it means:** Your output is only the callout block, with no extra text.
**Why it matters:** Following all rules is important.

## Best Practices: Your Toolkit for Callout Creation

These are like the special tools you can use to be an amazing text highlighter.

### Read the Text Carefully
**What it is:** Carefully analyzing the input text to understand its content and determine its nature (e.g., is it a tip, a warning, a note).
**Why it's a best practice:** You need to understand the text to classify it correctly.
**How to do it:** Read the input multiple times. What is the main point of this text? What is its purpose?

### Classify the Content
**What it is:** Determining the type of important information the text contains based on the provided callout types (Note, Tip, Important, Warning, Caution).
**Why it is a best practice:** This guides the selection of the appropriate callout type.
**How to do it:** Based on the text's nature, which callout type description does it best match?

### Select the Callout Type
**What it is:** Choosing the specific Markdown callout type (e.g., TIP, WARNING) that is the most appropriate match for the content's classification.
**Why it is a best practice:** Using the correct type effectively communicates the significance of the highlighted text.
**How to do it:** Match your classification to the callout types. If it's a helpful suggestion, choose TIP. If it's about something dangerous, choose WARNING or CAUTION.

### Generate Markdown Callout
**What it is:** Writing the correct Markdown syntax to create the callout block with the selected type.
**Why it is a best practice:** This creates the visual highlight.
**How to do it:** Use the syntax `> [!TYPE]` where TYPE is the selected callout type (NOTE, TIP, IMPORTANT, WARNING, CAUTION).

### Include Original Text
**What it is:** Placing the original input text inside the generated Markdown callout block.
**Why it is a best practice:** The callout is meant to highlight the original text.
**How to do it:** Put the original text on the lines following the `> [!TYPE]` line, making sure each line of the original text starts with `>`.

### Output Only Callout
**What it is:** Presenting only the generated Markdown callout block containing the original text as the final output, without any additional text, warnings, or notes.
**Why it is a best practice:** The output should be a clean, usable callout block.
**How to do it:** Make sure your generated output contains only the Markdown callout block and nothing else.

### Follow Output Rules Exactly
**What it is:** Presenting your output in Markdown format, adhering to all constraints including outputting only the callout block and no warnings or notes.
**Why it is a best practice:** Following all rules is essential for a correct output.
**How to do it:** Double-check your output against all the instructions before finalizing. Ensure it's a valid Markdown callout and has no extra text.

## Common Pitfalls: Traps to Watch Out For in Callout Creation

These are like holes in the path that can make your text highlighting wrong!

### Not Understanding Text (Misinterpretation)
**What it is:** Misunderstanding the content or nature of the input text.
**Why it's a pitfall:** This leads to incorrect classification and callout selection.
**How to avoid:** Read the text carefully (Best Practice 1!).

### Wrong Classification
**What it is:** Incorrectly classifying the content's nature (e.g., calling a warning a tip).
**Why it is a pitfall:** The selected callout type will be inappropriate.
**How to avoid:** Classify the content correctly based on its nature (Principle 1 & Best Practice 2!).

### Wrong Callout Type
**What it is:** Selecting a callout type that does not match the content's classification.
**Why it is a pitfall:** The callout will not accurately communicate the significance of the text.
**How to avoid:** Select the callout type that is the most appropriate match (Principle 2 & Best Practice 3!).

### Wrong Markdown
**What it is:** Generating incorrect Markdown syntax for the callout block.
**Why it is a pitfall:** The callout will not display correctly.
**How to avoid:** Generate the correct Markdown callout syntax (Principle 3 & Best Practice 4!).

### Missing Text
**What it is:** Failing to include the original input text within the callout block.
**Why it is a pitfall:** The callout is meant to highlight the original text.
**How to avoid:** Include original text within the callout block (Principle 4 & Best Practice 5!).

### Outputting Extra Stuff
**What it is:** Including text, warnings, or notes along with the Markdown callout block.
**Why it is a pitfall:** The output should only be the callout.
**How to avoid:** Output only callout (Principle 6 & Best Practice 6!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Not using the specific Markdown format or following all formatting rules.
**Why it's a pitfall:** Your output might not display correctly.
**How to avoid:** Follow output rules exactly (Best Practice 7!).

### Using Bold or Italics
**What it is:** Using bold or italics formatting in the Markdown output.
**Why it's a pitfall:** This violates a specific output instruction.
**How to avoid:** Do not use bold or italics formatting (Output Instructions!).

### Including Warnings or Notes
**What it is:** Including extra text like warnings or notes along with the callout.
**Why it's a pitfall:** The output should only be the callout.
**How to avoid:** Do not give warnings or notes (Output Instructions!).

## Conclusion: Becoming a Master Text Highlighter!
Becoming great at highlighting important text (Markdown callouts) is like becoming a super helper who makes important words stand out! It's about what kind of important info is it, choose the right box, build the box, put the text inside, just use what you were given, and follow all the rules. By using these principles and best practices, and by watching out for the common traps, you can classify content and generate a Markdown callout based on the provided text. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of highlighting important text, making sure important words get noticed!
