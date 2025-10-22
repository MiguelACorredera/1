# DailyStacked - Learn By Contributing

**Tier:** 2-Intermediate

`Purpose:`
DailyStacked aims to motivate developers to contribute to forums like StackOverflow by answering queries about the frameworks and languages they use. This helps others, deepens the developer's understanding of the technologies, and builds a portfolio as an open-source contributor.

`Main Features:` 
- The application provides a REST API that enables users to select tech-related topics from StackOverflow (e.g., Python, Django, Rails, version control).
- Users can subscribe to topics of their interest, view their subscriptions, update their subscriptions, and receive URLs of unanswered questions related to their subscribed topics.
- Authentication is token-based (JWT or simple token).

`Resources Needed:`  
- Access to the Stack Exchange API (register an app to obtain an API_KEY).
- Knowledge of building REST APIs (e.g., using Django, Flask, or any other preferred framework).
- Familiarity with token-based authentication (e.g., JWT).

## User Stories

- [ ] User can register an account and authenticate using token-based authentication (JWT or simple token).
- [ ] User can select and subscribe to tech-related topics from StackOverflow.
- [ ] User can view the list of topics they are subscribed to.
- [ ] User can receive a list of 3 unanswered questions' URLs for each topic they are subscribed to.
- [ ] User can update the topics they are subscribed to.
- [ ] User will receive daily email notifications with new unanswered questions for subscribed topics using some cron scheduling.

## Bonus features

- [ ] User can unsubscribe from topics or remove all subscriptions at once.
- [ ] User can see the top contributors for each subscribed topic.
- [ ] Admins can view user activity statistics (e.g., number of topics subscribed to, questions answered).

## Useful links and resources

- [Stack Exchange API Documentation](https://api.stackexchange.com/docs)
- [How to build a REST API with Django REST Framework](https://www.django-rest-framework.org/tutorial/quickstart/)
- [Understanding JWT](https://jwt.io/introduction/)
  
## Example projects

- N/A