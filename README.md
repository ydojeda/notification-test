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
- [] When clicking on a specific notification:
  - check the action if `CREATE_TODO` is available
  - if so, call the mock-action endpoint
