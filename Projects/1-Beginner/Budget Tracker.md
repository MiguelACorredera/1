Tier: 1-Beginner

A personal budget tracker is a powerful tool for managing finances. Building one is an excellent exercise for learning fundamental web development concepts, including handling user input, performing CRUD (Create, Read, Update, Delete) operations, manipulating the DOM, and persisting data using local browser storage. This project will challenge you to build a clean UI and manage the application's state as the user interacts with it.

User Stories

- User can see a summary section displaying their total income, total expenses, and the current balance.
- User can see a form to add a new transaction with fields for a description (text), an amount (number), and a selector to specify if it is 'Income' or 'Expense'.
- User can see a history list of all the transactions they have added.
- User can submit the form to add a new transaction. The new transaction will immediately appear in the history list, and the summary section (income, expenses, balance) will update accordingly.
- User can click a 'delete' button next to a transaction in the history list to remove it. The summary section will update to reflect this change.
- User's transactions are saved in the browser's local storage, so their data persists even after they close or refresh the page.

Bonus features

- User can see a graphical representation of their expenses, such as a pie chart breaking down spending by category.
- User can assign a category to each expense (e.g., 'Food', 'Transport', 'Bills').
- User can filter the transaction history to show only income or only expenses.
- User can click an 'edit' button on a transaction to modify its description or amount.

Useful links and resources
MDN - Web Storage API (localStorage): Learn how to save data in the browser.
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
MDN - Manipulating documents: A guide to adding, changing, and removing elements in the DOM.
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
Chart.js: A popular and easy-to-use library for creating charts (for the bonus feature).
https://www.chartjs.org/

Example projects

- JavaScript Expense Tracker by Traversy Media
- Budget App by Web Dev Simplified
- Simple Budgeting App with Vanilla JS
