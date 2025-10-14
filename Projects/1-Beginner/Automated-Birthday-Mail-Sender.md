# Automated Birthday Mail Sender
**Tier:** 1-Beginner

## Description
This application automatically sends personalized birthday emails to your contacts. Users maintain a CSV file with names, birthdays, and email addresses. The app checks for birthdays daily and sends emails using customizable templates, while storing email credentials securely via environment variables.

## Purpose
To automate the process of remembering and sending birthday wishes, saving time and ensuring personalized messages for friends, family, or colleagues.

## Resources Needed
- Python 3  
- CSV file with contact information (name, month, day, email)  
- Access to an email account (Gmail, Outlook, Yahoo, etc.) with SMTP enabled  
- `smtplib` and `email` Python libraries  

## User Stories
- [ ] User can add contacts and their birthdays in a CSV file.  
- [ ] User can create and customize email templates for birthday wishes.  
- [ ] User can store email credentials securely using environment variables.  
- [ ] User can send personalized birthday emails automatically on the correct date.  
- [ ] User can choose the SMTP provider and port for sending emails.  

## Bonus Features
- [ ] User can schedule emails in advance or set recurring reminders for anniversaries or other special events.  
- [ ] User can integrate with calendar APIs to automatically fetch birthdays.  
- [ ] User can add a GUI interface for managing contacts and templates.  

## Useful Links and Resources
- [Python CSV Documentation](https://docs.python.org/3/library/csv.html)  
- [Python `smtplib` Documentation](https://docs.python.org/3/library/smtplib.html)  
- [Environment Variables in Python](https://www.geeksforgeeks.org/how-to-use-environment-variables-in-python/)  

## Example Projects
- [Birthday Reminder App – GitHub](https://github.com/nagapraneethk/Auto-Birthday-Wisher)
