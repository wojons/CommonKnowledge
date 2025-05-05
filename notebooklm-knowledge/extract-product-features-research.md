# Research Paper: Principles and Practices of Finding What a Product Can Do (Extracting Product Features) (Enhanced for NotebookLM)

## Introduction: What is Finding What a Product Can Do (Extracting Product Features) and Why Does It Matter?
Imagine you see a new toy, and you want to know all the cool things it can do, like if it can light up or make sounds! Finding what a product can do (extracting product features) is like reading about a product and finding all the special things it can do or has! It's about spotting the "features" of a product.

**What is it?** A product feature is a special quality, function, or capability of a product (like a phone that can take pictures or a car that can drive itself). Extracting product features means reading a description of a product and identifying all the things it can do or has. You look for the features that make the product useful or special. You then put these features into a clear list.
**Why it matters?** When you are thinking about buying or using a product, you want to know what it can do! By finding and extracting the product features, you can quickly understand the capabilities of the product and decide if it meets your needs. This is useful for comparing different products or learning about a new product. It's about understanding what a product offers! This paper is like your guide to becoming a super product detective and finding what a product can do!

## Core Goal: Finding All the Special Things a Product Can Do!
The main point of finding what a product can do (extracting product features) is to analyze input text describing a product and extract its features, outputting them as a bulleted list in Markdown.

**What's the goal?** To read a piece of text that describes a product and find all the special things it can do or has (its features), and then put those features into a list using bullet points in Markdown without bold or italics.
**Why is this the goal?** Because product features are key aspects that define a product's functionality and value proposition. By extracting a list of product features from a description, you provide a concise overview of what the product offers, making it easy for users to understand its capabilities and compare it with other products. This facilitates product evaluation and decision-making. It's about making sure that all the special things a product can do are clearly identified and listed.

## Guiding Principles: Your Compass for Feature Finding

These principles are like the directions on a compass, guiding you to find features.

### Principle 1: What Can It Do? (Content Analysis)
Imagine reading text and looking for descriptions of what a product is able to do. This principle means understanding the input text to identify descriptions of product features.

**What is it?** Reading the input text carefully to understand its content and identify statements or phrases that describe the functions, capabilities, or characteristics of a product.
**Why it matters:** You need to understand the text to find the product features.
**How to do it:** Read the text carefully. Look for verbs and phrases that describe what the product does or has.

### Principle 2: Is It a Feature? (Feature Identification)
Imagine the description says the product is red. That's a detail, but it might not be a *feature* of what it *does*! This principle means recognizing statements that describe a product's capabilities or characteristics as features.

**What is it?** Distinguishing between descriptions of a product's features (what it does) and other details (like its color or size, unless those are presented as key selling points).
**Why it matters:** The output should focus only on the product's features.
**How to do it:** For each description, ask: Is this something the product *does* or *has* that is important to its function or value?

### Principle 3: Pull Out the Words! (Extraction)
Imagine copying the words that describe the product's features from the description. This principle means accurately pulling out the descriptions of the product features.

**What is it?** Accurately extracting the descriptions of the product's features from the input text.
**Why it matters:** You need the correct words for the features.
**How to do it:** Copy the text that describes the product features accurately.

### Principle 4: Put It in a List! (Structured Formatting)
Imagine the product features are just scattered around! This principle means presenting the extracted features as a list.

**What is it?** Presenting the extracted product features as a list of items using Markdown bullet points or numbered lists.
**Why it matters:** A list format makes the features easy to read and scan.
**How to do it:** Use `-` or `*` at the beginning of each line for a product feature.

### Principle 5: Just Use What the Text Says! (Objectivity)
Imagine the list of features includes something you just thought of that wasn't in the text! This principle means reporting the features as presented in the input, without adding interpretation.

**What is it?** Reporting the extracted product features based solely on the content provided in the input text, without injecting personal opinions or external features.
**Why it matters:** The extracted features should accurately reflect the content of the original text.
**How to do it:** Focus on extracting the features that are actually described in the input text.

### Principle 6: Follow the Rules for Showing It! (Adherence to Constraints)
Imagine the list of features is supposed to be in a certain format, but you don't follow the rules. This principle means following the specific formatting rules for the output, like using Markdown without bold or italics.

**What is it?** Adhering strictly to the specified output instructions, including using Markdown format and not using special characters like bold or italics.
**Why it matters:** Following the formatting rules ensures the output is presented correctly and is easy to use.
**How to do it:** Format your list of product features using Markdown. Do not use asterisks for bold or italics.

## Quality Criteria: What "Good" Feature Lists Look Like (The Checklist!)

Here's how you can check if your feature finding is super good!

### You Found What It Can Do (Content Analysis)
**What it means:** You correctly identified the descriptions of product features in the text.
**Why it matters:** You need to find the features to extract them.

### It's a Feature (Feature Identification)
**What it means:** You correctly identified statements that describe a product's capabilities or characteristics as features.
**Why it matters:** The output should focus on features.

### You Pulled Out the Words (Extraction)
**What it means:** You accurately extracted the descriptions of the product features.
**Why it matters:** You need the correct words for the features.

### It's in a List (Structured Formatting)
**What it means:** The extracted features are organized into a list.
**Why it matters:** A list format is easy to read.

### You Just Used What the Text Says (Objectivity)
**What it means:** The list of features is based on the input text and doesn't include outside ideas.
**Why it matters:** The output should accurately reflect the input.

### You Followed All the Rules for Showing It (Correct Format)
**What it means:** Your output is presented in Markdown format without extra characters.
**Why it matters:** Following the format is important.

## Best Practices: Your Toolkit for Feature Finding

These are like the special tools you can use to be an amazing product detective.

### Read the Product Description Carefully
**What it is:** Carefully analyzing the input text that describes a product to understand its content and identify its features.
**Why it's a best practice:** You need to read the description to find the features accurately.
**How to do it:** Read the input multiple times. Look for statements about what the product does or has.

### Identify Product Features
**What it is:** Figuring out the specific statements in the text that describe the product's capabilities, functions, or characteristics.
**Why it is a best practice:** These are the items to include in your list.
**How to do it:** What does the product do? What special things does it have?

### Present as a Bulleted List
**What it is:** Presenting the extracted product features as a list of items using Markdown bullet points or numbered lists.
**Why it is a best practice:** This follows the specified output format and makes the list easy to read.
**How to do it:** Use `-` or `*` at the beginning of each line for a product feature.

### Follow the Output Rules Exactly
**What it is:** Presenting your list of product features in Markdown format without using special characters like bold or italics.
**Why it's a best practice:** Following the format is important for compatibility and readability.
**How to do it:** Make sure your generated output is in Markdown and does not use asterisks for bold or italics.

## Common Pitfalls: Traps to Watch Out For in Finding Features

These are like holes in the path that can make your feature finding wrong!

### Not Understanding the Product (Misinterpretation)
**What it is:** Misunderstanding the product or its description.
**Why it's a pitfall:** This leads to extracting incorrect or irrelevant features.
**How to avoid:** Read the product description carefully (Best Practice 1!).

### Missing Features
**What it is:** Failing to identify all product features in the text.
**Why it's a pitfall:** The list of features will be incomplete.
**How to avoid:** Read the text specifically looking for features (Principle 1 & Best Practice 2!).

### Wrong Items (Not Features)
**What it is:** Extracting information that is not a product feature.
**Why it's a pitfall:** The output should only contain features.
**How to avoid:** Ensure relevance (Principle 2!).

### Adding Outside Ideas
**What it is:** Including features in the list that were not in the original description.
**Why it's a pitfall:** The extracted features should be based on the input.
**How to avoid:** Ensure objectivity (Principle 5!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Not using the specific Markdown format or constraints requested, like using bold text.
**Why it's a pitfall:** Your output might be hard to read or use.
**How to avoid:** Follow the output rules exactly (Best Practice 4!). Pay close attention to all instructions.

### Using Bold or Italics
**What it is:** Using bold or italics formatting in the Markdown output.
**Why it's a pitfall:** This violates a specific output instruction.
**How to avoid:** Do not use bold or italics formatting (Output Instructions!).

### Including Warnings or Notes
**What it is:** Including extra text like warnings or notes along with the list of features.
**Why it's a pitfall:** The output should only be the list of features.
**How to avoid:** Do not include warnings or notes (Output Instructions!).

## Conclusion: Becoming a Master Product Detective!
Becoming great at finding what a product can do (extracting product features) is like becoming a super helper who finds all the special things! It's about what can it do, is it a feature, pull out the words, put it in a list, just use what the text says, and follow the rules for showing it. By using these principles and best practices, and by watching out for the common traps, you can extract product features from the provided input. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of finding what a product can do, making sure you can always find all the special things a product can do!
