# OSS README Generator

**Tier:** 2-Intermediate

An effective `README.md` is the **front door** to your open-source project. It's the crucial first piece of documentation and your main marketing tool, yet manually writing and maintaining a professional, comprehensive README from scratch is often a tedious and error-prone chore for developers. It’s easy to miss key sections or struggle with complex Markdown formatting.

The **OSS README Generator** is designed to solve a common problem. It gives you a simple, organized interface that walks you through every essential part from basic project info and standard sections to licensing details and professional badges. This takes the difficulty out of writing complex Markdown and boilerplate structure. The main goal is to help developers easily create a professional, consistent, and useful entry point for their code with very little effort.

---

## Constraints

This challenge requires that the developer implementing it follow these constraints:

- The application must use a **reactive, single-page architecture** (like React, Vue, or Angular) to provide a smooth, **live preview** experience.
- The generated output must adhere strictly to the **CommonMark specification** for Markdown.
- The core logic for converting form inputs into the final Markdown string must be **strictly separated from the UI components**.

---

## User Stories

- [ ] User can input basic project metadata (**Name**, **Tagline**, **Author**, **Version**).
- [ ] User can select which standard sections to include (e.g., **Installation**, **Usage**, **Features**, **License**, **Contributing**).
- [ ] User can select **technology badges** (e.g., React, Node.js, Python) to insert, with the tool automatically generating the appropriate [Shields.io](https://shields.io/) markdown tag.
- [ ] User can view a **real-time, rendered preview** of the Markdown output.
- [ ] User can easily **copy the final Markdown code** to their clipboard.
- [ ] User can define a project **status** (e.g., "In Progress," "Stable," "Deprecated") and have a corresponding badge generated.

---

## Bonus features

- [ ] Integrate with the **GitHub API** to fetch a list of available open-source licenses (MIT, GPL, etc.) and auto-insert the selected license text.
- [ ] Allow users to save their profile information (name, social links, GitHub username) for **reuse** across multiple READMEs.
- [ ] Allow users to **import an existing README** file to edit the content within the generator.
- [ ] Provide multiple **visual templates** (e.g., "Minimalist," "Heavy Documentation") to choose from.

---

## Useful links and resources

- [CommonMark Spec](https://commonmark.org/)
- [Shields.io Badge Service](https://shields.io/)
- [GitHub's Choose an Open Source License](https://choosealicense.com/)

---

## Example projects

Try not to view this until you've developed your own solution:

- [readme.so](https://readme.so/) - A popular, simple online README generator.
- [Dillinger](https://dillinger.io/) - An advanced, cloud-enabled Markdown editor that demonstrates a robust live-preview architecture.
- [GitHub Profile README Generator](https://arturssmirnovs.github.io/github-profile-readme-generator/) - An example of a structured tool for generating specific types of Markdown files.
