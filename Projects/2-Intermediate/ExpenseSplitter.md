# Expense Splitter – Smart Group Expense Tracker

**Tier:** 2-Intermediate

An app that helps groups (friends, roommates, colleagues) split shared expenses easily and track who owes whom.  
Perfect for trips, parties, or shared living arrangements where managing expenses manually becomes confusing.

## User Stories

- [ ] User can create a new group (e.g., "Goa Trip" or "Flatmates")
- [ ] User can add members to a group
- [ ] User can add expenses with:
  - Amount
  - Description
  - Who paid
  - How it should be split (equally or custom)
- [ ] App automatically calculates balances (who owes whom)
- [ ] User can view a summary screen showing each member’s balance
- [ ] User can mark an expense as settled

## Bonus Features

- [ ] Split expenses unevenly using custom percentages
- [ ] Currency selector for international trips
- [ ] Export summary as PDF or CSV
- [ ] Group chat or comments per expense
- [ ] Login & sync using Firebase or Supabase
- [ ] Offline mode (store data in localStorage/IndexedDB)
- [ ] Visual charts showing spending per person or category

## Example Scenario

A group of 5 friends goes on a trip.  
- Riya pays ₹2,000 for hotel  
- Aviraj pays ₹1,000 for food  
The app calculates everyone’s share (₹600 each) and shows:  
> “Aviraj owes Riya ₹400”

Once payment is made, the expense can be marked as **settled**.

## Useful Links & Resources

- [Splitwise (Inspiration)](https://www.splitwise.com/)
- [React Hooks – useState & useEffect](https://react.dev/learn/state-a-components-memory)
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

## Possible Tech Stack

- **Frontend:** React + Tailwind CSS (or Flutter for mobile)
- **State Management:** Redux Toolkit / Zustand
- **Backend:** Node.js + Express + MongoDB
- **Auth:** Firebase / Clerk
- **Charts:** Recharts or Chart.js

---

