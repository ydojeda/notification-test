# notification-test

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Task

- [x] Load the list of notifications from provided end point\
- [x] Create a scrollable list to display notifications
- [x] Show an avatar icon with initials and a random solid color
- [x] Show a small dot to indicate unread notifications
- [X] When clicking on a specific notification:
  - check the action if `CREATE_TODO` is available
  - if so, call the mock-action endpoint
  - ! But this is returning an error

## Suggested Improvements
### UX-improvements
- responsive design, width of notification cards adjusts/has a maximum width
- feedback upon clicking/pressing a card
- success/failure message for user from create to do response
- a "create todo" button instead of assuming that the users know that pressing a notification can potentially create a todo
- a notification card state to tell that the action is ongoing/being done
- differentiate cards visually from those with available actions or none
- a notifications count
- sort notifications according creation date


### Code-wise
- implement store for handling data from api calls (avoid fetching every time Notification is mounted)
- Improve error handling, logging, and corresponding error states
- at least two tests to ensure that the avatar works and the notification card works (as those might become more complicated in the future)
- For navigation bar: assume navigation items is a list and iterate through it instead of explicitly listing items
  - In case navigation items are fetched in the future or new ones are added
- Avatar: allow a size prop in case it is needed in another component in the future