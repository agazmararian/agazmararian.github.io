# Welcome!

This onboarding document explains how to get started as a research assistant (RA) on our team. It includes guidelines for confidentiality, coding practices, file organization, and how to communicate effectively. Please read it carefully and refer back as needed.

I'm excited to be working with you! I view research assistance as not only an opportunity to contribute to social science, but also a chance to develop research skills that are best acquired through hands-on experience.

You will be assisting with a wide range of projects, such as the following: 

- Paper on the political effects of the electric vehicle transition on autoworkers and their unions.

- Book on political trade-offs of using public policy to reshape the economy, with a focus on green industrial policy and decarbonization.

- Paper on how unions inform their members about economic disruption (e.g., EVs, globalization, automation) and the political consequences of the information they do (not) provide.


## Communication Norms

Our primary communication mode is Slack. Please check messages at least once daily during working hours and tag me (`@Alex Gazmararian`) when you have questions.

You can also reach me via email: agazmararian [at] gmail [dot] com.

Please reply to messages within 24 hours on weekdays, even if it’s just to acknowledge receipt and say when you’ll follow up more fully.


## Hours

This role should take about 10-20 hours a week. Don't work more than 30 hours in a week.

Create a Google spreadsheet to track your hours and share it with agazmararian [at] gmail [dot] com.

By the end of Friday, send me a Slack that says (1) how many hours you worked that week, and (2) a brief bullet-point list of what you did.


## Data Privacy

As part of this research team, you may work with sensitive, proprietary, or confidential materials, including unpublished data, code, and survey responses. To ensure the integrity of the research and protect the privacy of participants and collaborators, you are expected to avoid storing data on unapproved devices and use research materials only for approved purposes. 

Please confirm that you’ve read and understood these rules by signing the data privacy policy [here](files/Data_Privacy_Policy.pdf).


## Large Language Models

Large language models (LLMs) such as ChatGPT, Claude, Copilot, and others can be useful tools for brainstorming, drafting code, and summarizing information.

However, do not use LLMs for tasks using confidential or unpublished research data. LLMs will store this data, which could compromise research integrity and participant privacy. If the information is already in the public domain, it is okay to input it into LLMs.

If you use an LLM to assist with code or writing that is incorporated into project deliverables, you must:

- document the use clearly (e.g., in a code comment or note)

- Review and verify all generated content for accuracy, completeness, and originality

- Ensure that no proprietary or confidential information was used as input

You are fully responsible for the accuracy, integrity, and originality of any work submitted, regardless of LLM assistance.


## Code and File Practices

**Reproducibility is the paramount goal.** Here is a summary of coding guidelines:

- **Use R and RStudio** for all data analyses and work within an RProject environment.
- **Use relative file paths** (e.g., `data/cleaned_survey.csv`) rather than absolute paths (e.g., `/Users/alex/Documents/...`).
- **Use descriptive, consistent file names** like `01_clean_data.R`, `02_merge_datasets.R`, etc.
- **Document your code** with brief comments explaining major steps.
- **Commit changes regularly** to GitHub with clear messages (e.g., `cleaned missing values from survey`).

If you’re unsure about any of these, ask!


### Readings

Read the following resources, which outline practices that we generally follow:

- https://www.shirokuriwaki.com/programming/project-organization.html

- https://web.stanford.edu/~gentzkow/research/CodeAndData.pdf

### Workspace

**Work within a single RProject environment, which requires using RStudio.** Working within an RProject environment enhances reproducibility by centralizing all scripts, data, and outputs in a consistent file structure.

### File Names

1.	**Be Descriptive but Concise:** Use names that indicate what the script does, e.g., 01_clean_survey_data.R rather than script1.R. It should indicate specific tasks and avoid redundant info. 
2. **Use Numbering for Order:** Prefix scripts with numbers to show execution sequence, e.g., 01_import, 02_clean, 03_analysis.
3. **Use Lowercase and Snake Case:** e.g., clean_data.R rather than clean-data.R. Avoid spaces or camelCase.
4. **Keep Version Control Out of File Names:** Avoid using names like final_2.R or script_final_revised.R. Only use dates if necessary.

### File Paths

**Always use relative file paths, never absolute file paths.** Relative paths make your work portable, reproducible, and easier to share with collaborators. Absolute paths will break when someone else runs your code on a different computer or folder structure.


✅ Good Example (Relative Path)

```r
read_csv("data/survey_responses.csv")

# We will often use the {here} package
library(here)
read_csv(here("data", "survey_responses.csv"))
```

❌ Bad Example (Absolute Path)

```r
read_csv("/Users/alexgazmararian/Desktop/project/data/survey_responses.csv")
```

### Package Management

We use ```{renv}``` to manage package versions in R. Review the documentation here: https://rstudio.github.io/renv/articles/renv.html.



## Accounts & Tools Setup

Slack (for communication): https://slack.com

R and RStudio (for data analysis): https://posit.co/download/rstudio-desktop/

Asana (for task management): https://asana.com

Dropbox (for file storage): https://www.dropbox.com

Install the Dropbox desktop application: https://www.dropbox.com/install

Qualtrics (for surveys): https://its.umich.edu/data/analytics/qualtrics

GitHub (for version control): https://github.com

## Feedback

Feedback frequency will vary depending on the task. For data entry, I will give feedback after you code the first 2 entries. For data analysis, I will typically provide comments after you have completed the first draft.

I encourage asking questions early.


# Onboarding Checklist

✅ Review this onboarding memo carefully

✅ Review the readings linked above about reproducible data analysis

✅ Set up Slack, Dropbox, Asana, Qualtrics, and GitHub (send me your user information so I can share the relevant projects)

✅ Install R and RStudio (or update to the latest version)

✅ Sign Data Privacy Policy Agreement

✅ Read task description, ask any clarifying questions, and get started!

