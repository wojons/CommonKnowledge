# Research Paper: Principles and Practices of Making Computer Instructions Better (Improving Prompts) (Enhanced for NotebookLM)

## Introduction: What is Making Computer Instructions Better (Improving Prompts) and Why Does It Matter?
Imagine you want a computer to draw a picture for you, and you tell it, "Draw a dog." It might draw any kind of dog! But if you tell it, "Draw a small, fluffy brown dog sitting in a park," you'll get a much better picture! Making computer instructions better (improving prompts) is like taking the instructions you give to a smart computer (like an AI) and making them super clear and specific so the computer understands exactly what you want and gives you a much better result! It's about making your instructions (prompts) better.

**What is it?** A prompt is the instruction or question you give to a smart computer program (like a large language model or AI) to get it to do something or give you information. Improving a prompt means taking an instruction that might be unclear or too simple and rewriting it to make it better. This involves adding more details, telling the computer exactly what kind of answer you want, showing it examples, or breaking down a big task into smaller steps. The goal is to make the instruction so clear that the computer knows exactly what to do and gives you the best possible output.
**Why it matters?** Smart computers are powerful tools, but they need clear instructions to work well! If your instructions are vague, the computer might guess what you want and give you a wrong or unhelpful answer. By making your instructions better, you can get much more accurate, relevant, and useful results from the computer. It's about talking to computers in a way they understand best! This paper is like your guide to becoming a super computer talker and making computer instructions better!

## Core Goal: Getting the Best Possible Results from Smart Computers by Giving Clear Instructions!
The main point of making computer instructions better (improving prompts) is to analyze an existing LLM prompt and generate an improved version based on provided prompt writing strategies and tactics, outputting only the improved prompt in Markdown.

**What's the goal?** To take an instruction you would give to a smart computer (a prompt) and make it better so the computer understands exactly what you want and gives you a great answer. You do this by adding details, telling the computer how to answer, or breaking down the task, and then you show only the improved instruction in Markdown.
**Why is this the goal?** Because the quality of the output from a smart computer (like an AI) depends heavily on the quality of the instruction it receives. By improving prompts, you reduce ambiguity, provide necessary context, and guide the model towards generating more accurate, relevant, and useful responses. This is valuable for anyone using AI for tasks like writing, coding, analysis, or getting information. It's about making sure that the instructions you give to computers are clear and effective.

## Guiding Principles: Your Compass for Prompt Improvement

These principles are like the directions on a compass, guiding you to make prompts better.

### Principle 1: Say Exactly What You Want! (Clarity and Specificity)
Imagine telling the computer "Draw a dog" versus "Draw a small, fluffy brown dog sitting in a park." The second is much clearer! This principle means writing prompts that clearly and precisely communicate the desired task and output.

**What is it?** Making sure your instructions are easy to understand and include all the necessary details so the computer knows exactly what you want it to do and how you want the answer to look.
**Why it matters:** Computers can't read your mind! If your instructions are vague, the computer might guess what you mean and give you a wrong or unhelpful answer. Clear instructions lead to better results.
**How to do it:** Include all important details in your prompt. Tell the computer what kind of answer you want (e.g., a summary, a list, a story).

### Principle 2: Give the Computer Helpful Information! (Context Provision)
Imagine asking the computer about a movie without telling it which movie you mean. This principle means including relevant information or constraints to guide the model's response.

**What is it?** Providing the computer with any necessary background information, examples, or rules that will help it understand the task and generate a relevant answer.
**Why it matters:** Providing context helps the computer understand the situation and give you a more accurate and relevant response.
**How to do it:** If you are asking about a document, provide the document. If you want a specific style, show an example. Tell the computer any rules it needs to follow.

### Principle 3: Break Down Big Jobs! (Task Decomposition)
Imagine asking the computer to write an entire book in one instruction! That's a huge job. This principle means breaking down complex tasks into simpler steps for the computer.

**What is it?** Dividing a large or complicated task into a sequence of smaller, more manageable steps that the computer can follow one by one.
**Why it matters:** Complex tasks are harder for computers to do correctly in one go. Breaking them down reduces the chance of errors.
**How to do it:** If you have a big task, think about the smaller steps needed to complete it. Ask the computer to do one step at a time, or list the steps in your prompt.

### Principle 4: Tell the Computer How to Show the Answer! (Structured Output)
Imagine asking the computer for information and it gives you a messy paragraph when you wanted a list. This principle means specifying the desired format and structure of the model's response.

**What is it?** Clearly telling the computer how you want the output to be organized, such as a list, a table, a summary, or a specific computer format like JSON.
**Why it matters:** Specifying the format helps ensure the output is easy for you to read and use.
**How to do it:** Tell the computer: "Output as a bulleted list," "Provide the answer in a table," or "Format the output as JSON."

### Principle 5: Keep Trying and Making It Better! (Iterative Improvement)
Imagine trying to get the perfect picture from the computer on the first try. Sometimes you need to try different instructions! This principle means recognizing that prompt writing is an iterative process of testing and refinement.

**What is it?** Understanding that you might need to try different versions of your prompt and refine them based on the results you get from the computer.
**Why it matters:** Improving prompts is often a process of trial and error. By refining your prompts, you can get better and better results over time.
**How to do it:** Try a prompt. If the output isn't what you wanted, think about why and change the prompt. Try again.

### Principle 6: Use the Computer's Strengths! (Leveraging Model Capabilities)
Imagine the computer is really good at doing math. This principle means using strategies and tactics that align with how smart computers process information and generate responses.

**What is it?** Using specific techniques or approaches that are known to work well with smart computer programs to get better results.
**Why it matters:** Different techniques can help the computer understand your instructions better and perform tasks more effectively.
**How to do it:** Use techniques like giving the computer time to "think" before answering, providing reference text, or using tools that the computer can access (like a calculator or a search tool).

## Quality Criteria: What "Good" Improved Prompts Look Like (The Checklist!)

Here's how you can check if your computer instructions are super good!

### It Says Exactly What You Want (Clear and Specific)
**What it means:** The prompt clearly and precisely tells the computer what task to do and what kind of answer to give.
**Why it matters:** Clear instructions lead to better results.

### It Gives Helpful Information (Context Provided)
**What it means:** The prompt includes relevant background information, examples, or rules to guide the computer.
**Why it matters:** Context helps the computer understand the task.

### Big Jobs Are Broken Down (Task Decomposed)
**What it means:** Complex tasks are divided into simpler steps in the prompt.
**Why it matters:** Breaking down tasks reduces errors.

### It Tells How to Show the Answer (Structured Output Specified)
**What it means:** The prompt specifies the desired format and structure of the computer's response.
**Why it matters:** Specifying format makes the output usable.

### It's Easy to Read (Human-Readable)
**What it means:** The prompt is written in a clear and easy-to-understand way.
**Why it matters:** Prompts should be easy for humans to read and write.

### It's Only the Prompt (Correct Format)
**What it means:** The output contains only the improved prompt and nothing else.
**Why it matters:** The output should be a clean, usable prompt.

## Best Practices: Your Toolkit for Improving Prompts

These are like the special tools you can use to be an amazing computer talker.

### Include Details
**What it is:** Adding all the important information and context to your prompt so the computer doesn't have to guess what you mean.
**Why it is a best practice:** More details lead to more relevant and accurate answers.
**How to do it:** Think about everything the computer needs to know to do the task correctly. Include dates, names, specific requirements, etc.

### Specify the Output Format
**What it is:** Clearly telling the computer how you want the answer to be structured (e.g., a list, a table, a summary).
**Why it is a best practice:** This helps ensure the output is in a format that is easy for you to use.
**How to do it:** Tell the computer: "Output as a bulleted list," "Provide the answer in a table," or "Format the output as JSON."

### Break Down Steps
**What it is:** If the task is complex, listing the steps the computer should follow to complete it.
**Why it is a best practice:** Breaking down tasks reduces the chance of errors.
**How to do it:** Write out the task as a sequence of steps for the computer to follow.

### Provide Examples
**What it is:** Showing the computer examples of the kind of input and output you want.
**Why it is a best practice:** Examples can help the computer understand the desired style or format, especially if it's hard to describe in words.
**How to do it:** Show the computer a few examples of what you want the output to look like based on a given input.

### Tell the Computer How Long the Answer Should Be
**What it is:** Specifying the desired length of the output (e.g., in words, sentences, or paragraphs).
**Why it is a best practice:** This helps the computer provide an answer that is the right length for your needs.
**How to do it:** Tell the computer: "Summarize in about 50 words," or "Provide the answer in 2 paragraphs."

### Give the Computer Time to "Think"
**What it is:** Instructing the computer to reason or work out its solution before giving a final answer.
**Why it is a best practice:** This can lead to more accurate results, especially for tasks that require reasoning.
**How to do it:** Include instructions like "First work out your own solution" or "Reason step-by-step before concluding."

### Use Delimiters
**What it is:** Using special characters (like triple quotes """ or XML tags <tag>) to clearly separate different parts of the input text.
**Why it is a best practice:** Delimiters help the computer understand which parts of the input are instructions, which are text to process, etc.
**How to do it:** Put text that the computer needs to process inside delimiters and tell the computer what to do with the text inside the delimiters.

### Follow Output Rules Exactly
**What it is:** Presenting the improved prompt in Markdown format, ensuring it is clean, human-readable, and contains only the prompt itself.
**Why it is a best practice:** The output should be a usable prompt that can be given directly to an LLM.
**How to do it:** Make sure your generated output is only the improved prompt and nothing else.

## Common Pitfalls: Traps to Watch Out For in Improving Prompts

These are like holes in the path that can make your prompt improvement wrong!

### Not Clear Enough (Lack of Specificity)
**What it is:** Writing prompts that are too vague or don't include enough details, so the computer has to guess what you want.
**Why it is a pitfall:** Vague prompts lead to inaccurate or irrelevant outputs.
**How to avoid:** Include details and be specific (Principle 1 & Best Practice 1!).

### Not Enough Information (Lack of Context)
**What it is:** Not providing the computer with necessary background information or examples.
**Why it is a pitfall:** The computer might not have enough information to give a good answer.
**How to avoid:** Provide relevant context (Principle 2 & Best Practice 2!).

### Big Jobs Not Broken Down
**What it is:** Asking the computer to do a complex task in a single instruction without breaking it down into steps.
**Why it is a pitfall:** Complex tasks have a higher error rate.
**How to avoid:** Break down complex tasks into simpler steps (Principle 3 & Best Practice 3!).

### Not Telling How to Show Answer
**What it is:** Not specifying the desired format or structure of the output.
**Why it is a pitfall:** The output might be in a format that is hard for you to use.
**How to avoid:** Specify the output format (Principle 4 & Best Practice 2!).

### Making Mistakes in the Output (Incorrect Format)
**What it is:** Including extra content, warnings, or notes along with the improved prompt.
**Why it's a pitfall:** The output should only be the improved prompt.
**How to avoid:** Follow output rules exactly (Best Practice 8!).

### Not Iterating
**What it is:** Not trying different versions of your prompt and refining them based on the results.
**Why it is a pitfall:** Prompt writing is often iterative; the first version might not be the best.
**How to avoid:** Be prepared to refine your prompts (Principle 5!).

### Using Complicated Language
**What it is:** Using jargon or overly complex language in the prompt that might confuse the computer.
**Why it is a pitfall:** Prompts should be clear and easy for the computer to understand.
**How to avoid:** Use clear and simple language.

## Conclusion: Becoming a Master Prompt Improver!
Becoming great at making computer instructions better (improving prompts) is like becoming a super helper who talks to computers! It's about say exactly what you want, give the computer helpful information, break down big jobs, tell the computer how to show the answer, keep trying and making it better, use the computer's strengths, and follow all the rules. By using these principles and best practices, and by watching out for the common traps, you can improve an LLM/AI prompt. This guide gives you the tools and ideas to help you (and NotebookLM!) become a master of improving prompts, making sure you can always get the best possible results from smart computers by giving clear instructions!
