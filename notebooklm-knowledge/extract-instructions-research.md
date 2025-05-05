# Research Paper: Principles and Practices of Finding How-To Steps (Extracting Instructions) (Enhanced for NotebookLM)

## Introduction: What is Finding How-To Steps (Extracting Instructions) and Why Does It Matter?
Imagine you are watching a video that shows you how to build a LEGO castle, and you want to write down the steps so you can build it yourself! Finding how-to steps (extracting instructions) is like watching or reading something that tells you how to do something and writing down the main goal and all the steps in order! It's about pulling out the instructions so you can follow them later.

**What is it?** Instructions are steps that tell you how to do something. A transcript is a written record of what is said in a video. Extracting instructions means reading a video transcript that explains how to do something and finding the main goal (what you will be able to do at the end) and all the clear, actionable steps you need to follow to achieve that goal. You then put these objectives and steps into a clear list.
**Why it matters?** Videos and other content often contain valuable instructions for how to do things, but it can be hard to remember all the steps or find them again later. By finding and extracting the main objectives and the step-by-step instructions, you create a clear guide that you can easily follow to learn a new skill or complete a task. It's about making sure you can easily find and use the instructions you need! This paper is like your guide to becoming a super instruction finder and extracting how-to steps!

## Core Goal: Finding the Steps to Do Something and the Main Goal!
The main point of finding how-to steps (extracting instructions) is to analyze an instructional video transcript and extract main objectives and clear, actionable, step-by-step instructions, presenting them as a concise list in Markdown.

**What's the goal?** To read the written text of something (like a video or podcast) that shows you how to do something and find the main goal (what you will learn or achieve) and all the clear steps you need to follow, and then put those objectives and steps into a list in Markdown without bold or italics.
**Why is this the goal?** Because instructional content often contains valuable knowledge about how to perform tasks, but the instructions may be embedded within a narrative or discussion, making them difficult to follow directly. By extracting the main objectives and the clear, step-by-step instructions, you create a concise and actionable guide that users can easily follow to learn a new skill or complete a task. It's about making sure that instructions are easily identifiable and usable.

## Guiding Principles: Your Compass for Instruction Finding

These principles are like the directions on a compass, guiding you to find instructions.

### Principle 1: What Will I Be Able to Do? (Objective Identification)
Imagine the video shows you how to build a LEGO castle. The main goal is to be able to build that castle! This principle means recognizing the overall goals or objectives of the instructions.

**What is it?** Identifying the main outcome, skill, or result that the user will achieve by following the instructions.
**Why it matters:** Understanding the objective helps the user know what they will learn or be able to do.
**How to do it:** Read the transcript and look for statements that describe what the user will be able to do after following the instructions.

### Principle 2: What Are the Steps? (Step Extraction)
Imagine the video shows you how to build the castle, step by step. This principle means identifying the individual steps of the instructions.

**What is it?** Identifying the individual actions or steps that the user needs to perform to achieve the objective.
**Why it matters:** The steps provide the sequence of actions to follow.
**How to do it:** Read the transcript and look for descriptions of actions the user needs to take. These are often presented in a sequence.

### Principle 3: Are They Clear and Can I Do Them? (Clarity and Actionability)
Imagine the step says, "Do the magic thing!" That's not clear or actionable! This principle means ensuring the extracted instructions are easy to understand and follow.

**What is it?** Ensuring that the extracted instructions are written in clear, simple language and describe actions that the user can actually perform.
**Why it matters:** Instructions need to be easy to understand and follow to be useful.
**How to do it:** Rewrite the steps in simple language. Make sure each step is a clear action.

### Principle 4: Say It Briefly! (Conciseness)
Imagine the list of steps is very long and has too many extra words! This principle means presenting the objectives and instructions briefly.

**What is it?** Summarizing the main objectives and the step-by-step instructions using concise language.
**Why it matters:** The list of instructions should be easy to read quickly.
**How to do it:** Write the objectives and each step using short phrases or sentences.

### Principle 5: Put It in a List! (Structured Formatting)
Imagine the objectives and steps are just scattered around! This principle means organizing the objectives and instructions into a clear list.

**What is it?** Presenting the main objectives and the step-by-step instructions as a clear list of items in Markdown.
**Why it matters:** A list format makes the instructions easy to read and follow.
**How to do it:** Use Markdown bullet points or numbered lists for the objectives and steps.

### Principle 6: Just Use What the Video Said! (Objectivity)
Imagine the list of steps includes things that weren't in the video! This principle means basing the extraction on the transcript content.

**What is it?** Extracting the objectives and instructions based solely on the content provided in the video transcript, without injecting personal opinions or external instructions.
**Why it matters:** The extracted instructions should accurately reflect the content of the original video.
**How to do it:** Focus on extracting the objectives and steps that are actually described in the video transcript.

### Principle 7: Follow the Rules for Showing It! (Adherence to Constraints)
Imagine the list of instructions is supposed to be in a certain format, but you don't follow the rules. This principle means following the specific formatting rules for the output, like using Markdown without bold or italics.

**What is it?** Adhering strictly to the specified output instructions, including using Markdown format and not using special characters like bold or italics.
**Why it matters:** Following the formatting rules ensures the output is presented correctly and is easy to use.
**How to do it:** Format your list of objectives and instructions using Markdown. Do not use asterisks for bold or italics.

## Quality Criteria: What "Good" Instruction Lists Look Like (The Checklist!)

Here's how you can check if your instruction finding is super good!

### You Found the Goal (Objective Identification)
**What it means:** You correctly identified the main objectives of the instructions.
**Why it matters:** Understanding the objective helps the user know what they will learn.

### You Found the Steps (Step Extraction)
**What it means:** You correctly identified the individual steps of the instructions.
**Why it matters:** The steps are the actions to follow.

### They Are Clear and You Can Do Them (Clarity and Actionability)
**What it means:** The extracted instructions are easy to understand and follow.
**Why it matters:** Instructions need to be clear and actionable.

### You Said It Briefly (Conciseness)
**What it means:** The objectives and instructions are presented concisely.
**Why it matters:** Conciseness is important for a list of instructions.

### It's in a List (Structured Formatting)
**What it means:** The objectives and instructions are organized into a clear list.
**Why it matters:** A list format is easy to read.

### You Just Used What the Video Said (Objectivity)
**What it means:** The extracted information is based on the transcript content and doesn't include outside ideas.
**Why it matters:** The output should accurately reflect the input.

### You Followed All the Rules for Showing It (Correct Format)
**What it means:** Your output is presented in Markdown format without extra characters.
**Why it matters:** Following the format is important.

## Best Practices: Your Toolkit for Instruction Finding

These are like the special tools you can use to be an amazing how-to helper.

### Read the Video Transcript
**What it is:** Carefully analyzing the written record of what is said in the video to understand the instructions and objectives.
**Why it's a best practice:** The transcript is the source for extracting instructions.
**How to do it:** Read the transcript multiple times. Look for phrases that indicate steps or goals.

### Identify Main Objectives
**What it is:** Figuring out the overall goals or outcomes that the instructions are designed to achieve.
**Why it is a best practice:** These are the main things the user will learn or be able to do.
**How to do it:** What is the main purpose of these instructions?

### Identify Step-by-Step Instructions
**What it is:** Figuring out the individual actions or steps that the user needs to perform in order.
**Why it is a best practice:** These are the actions to follow.
**How to do it:** Look for phrases like "first," "next," "then," or descriptions of actions to take.

### Ensure Clarity and Actionability
**What it is:** Making sure the extracted steps are easy to understand and describe actions the user can actually perform.
**Why it is a best practice:** Instructions need to be clear and actionable to be useful.
**How to do it:** Rewrite the steps in simple language. Make sure each step is a clear action.

### Summarize Concisely
**What it is:** Writing the objectives and each step using concise language.
**Why it's a best practice:** The list of instructions should be easy to read quickly.
**How to do it:** Write the objectives and each step as short phrases or sentences.

### Format as a List
**What it is:** Presenting the main objectives and the step-by-step instructions as a clear list in Markdown.
**Why it is a best practice:** This follows the specified output format and makes the instructions easy to read.
**How to do it:** Use Markdown bullet points or numbered lists for the objectives and steps.

### Follow the Output Rules Exactly
**What it is:** Presenting your list of objectives and instructions in Markdown format without using special characters like bold or italics.
**Why it's a best practice:** Following the format is important for compatibility and readability.
**How to do it:** Make sure your generated output is in Markdown and does not use asterisks for bold or italics.

## Common Pitfalls: Traps to Watch Out For in Finding Instructions

These are like holes in the path that can make your instruction finding wrong!

### Not Understanding the Video (Misinterpretation)
**What it is:** Misunderstanding the content of the video based on the transcript.
**Why it's a pitfall:** This leads to extracting incorrect objectives or steps.
**How to avoid:** Read the video transcript carefully (Best Practice 1!).

### Missing Steps or Objectives
**What it is:** Failing to identify all the main objectives or individual steps in the transcript.
**Why it's a pitfall:** The list of instructions will be incomplete.
**How to avoid:** Identify main objectives and step-by-step instructions (Principle 1 & 2 & Best Practice 2 & 3!).

### Instructions Not Clear or Actionable
**What it is:** Extracting steps that are hard to understand or describe actions the user cannot perform.
**Why it's a pitfall:** Instructions need to be clear and actionable.
**How to avoid:** Ensure clarity and actionability (Principle 3 & Best Practice 4!).

### Not Concise
**What it is:** Providing objectives or steps that are too long.
**Why it's a pitfall:** The list should be concise.
**How to avoid:** Summarize concisely (Principle 4 & Best Practice 5!).

### Adding Outside Ideas
**What it is:** Including objectives or steps in the list that were not in the original video transcript.
**Why it's a pitfall:** The extracted information should be based on the transcript.
**How to avoid:** Ensure objectivity (Principle 6!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Not using the specific Markdown format or constraints requested, like using bold text.
**Why it's a pitfall:** Your output might be hard to read or use.
**How to avoid:** Follow the output rules exactly (Best Practice 7!). Pay close attention to all instructions.

### Using Bold or Italics
**What it is:** Using bold or italics formatting in the Markdown output.
**Why it's a pitfall:** This violates a specific output instruction.
**How to avoid:** Do not use bold or italics formatting (Output Instructions!).

### Including Warnings or Notes
**What it is:** Including extra text like warnings or notes along with the list of instructions.
**Why it's a pitfall:** The output should only be the list of objectives and instructions.
**How to avoid:** Do not include warnings or notes (Output Instructions!).

## Conclusion: Becoming a Master How-To Helper!
Becoming great at finding how-to steps (extracting instructions) is like becoming a super helper who makes guides easy to follow! It's about what will I be able to do, what are the steps, are they clear and can I do them, say it briefly, put it in a list, just use what the video said, and follow the rules for showing it. By using these principles and best practices, and by watching out for the common traps, you can extract clear, actionable step-by-step instructions and main objectives from instructional video transcripts. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of finding how-to steps, making sure you can always find the steps to do something and the main goal!
