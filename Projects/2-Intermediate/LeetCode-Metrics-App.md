# LeetCode Metrics

**Tier:** 2-Intermediate

LeetCode is a popular platform for coding practice and technical interview preparation. This application allows you to retrieve and display a user's LeetCode statistics using just their username. The app fetches data from a LeetCode API and presents key metrics such as problem-solving statistics, ranking, submission history, and skill levels in an easy-to-read dashboard.

The purpose of this application is to help users track their coding progress, compare statistics, and showcase their LeetCode achievements without needing to manually navigate the LeetCode website.

## User Stories

-   [ ] User can enter a LeetCode username
-   [ ] User can click on a search button to retrieve the user's metrics
-   [ ] User can see the user's profile information (name, avatar, ranking)
-   [ ] User can see total problems solved (easy, medium, hard)
-   [ ] User can see acceptance rate and submission count
-   [ ] User can see the user's contest rating and ranking
-   [ ] User can see recent submission activity
-   [ ] User should get an error message if the username is not valid or not found

## Bonus features

-   [ ] User can toggle between dark/light mode
-   [ ] User can view a graphical representation of solved problems by difficulty
-   [ ] User can see skill tags and their proficiency levels
-   [ ] User can compare multiple users side by side
-   [ ] User can export metrics as an image or PDF
-   [ ] Selected theme should persist when user returns to the app
-   [ ] User can see submission calendar/heatmap

## Useful links and resources

To get LeetCode user data, you can use the following API:

- [LeetCode API GraphQL endpoint](https://leetcode.com/graphql) - Official LeetCode GraphQL API
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - For making API calls in JavaScript
- [Node.js Documentation](https://nodejs.org/en/docs/) - For backend server setup
- [Chart.js](https://www.chartjs.org/) - For creating charts and graphs (optional)

Example GraphQL query to fetch user stats:
```graphql
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      realName
      userAvatar
      ranking
    }
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }
}
```

## Example projects

- [LeetCode Stats Card](https://github.com/JacobLinCool/LeetCode-Stats-Card) - GitHub-style stats card for LeetCode
- [LeetCode Profile](https://github.com/arunbohra/leetcode-profile) - A LeetCode profile viewer
