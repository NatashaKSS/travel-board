# Travel

The app that helps you find the better MRT travel route.

Built with TypeScript + ReactJS + Redux + Material UI Framework + Jest. This project was bootstrapped with Create React App.

[[_TOC_]]

## Getting Started

### Installing

1. Clone this repo

```

```

2. Navigate to the project directory

```bash

```

3. Install dependencies

```bash
npm install
```

### Run Locally

1. Spin up a local development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
npm start
```

### Run Unit Tests

- Launch `jest`, our test runner in interactive watch mode.

```bash
npm test
```

- Launch `jest`, with test coverage reporting. Your jest test coverage report will be generated at `./coverage`, and you can open the `index.html` web page there to take a look at your coverage stats.

```bash
# interactive watch mode (runs only on your staged files)
npm test

# test coverage report generation
npm run test:coverage
```

<br/>

## Project Structure

```
.
├── coverage                     # Test coverage reports
├── public                       # Static site assets
├── src
│   ├── api                      # Modules that handle business logic
│   │   ├── route-generation
│   │   |   └── ...etc
│   │   ├── ...etc
│   ├── lib                      # Common library modules
│   │   ├── assets
│   │   |   ├── icons
│   │   |   ├── images
│   │   |   ├── fonts
│   │   |   └── ...etc
│   │   ├── components           # Base React components
│   │   |   ├── buttons
│   │   |   ├── forms
│   │   |   ├── inputs
│   │   |   ├── modals
│   │   |   ├── banners
│   │   |   └── ...etc
│   │   └── util                 # Common utility functions, e.g. compute base64
│   │       └── ...etc
│   └── ui                       # Modules containing UI components for individual features
│       ├── app                  # Top-level app component
│           ├── components       # React components that make up this module
│           ├── ducks            # Redux action creators, reducers, selectors for this module
│           ├── hooks            # React hooks for reuse within this module
│           └── ...etc
│       ├── from-to              # Origin / Destination selection module
│           ├── components
│           ├── ducks
│           ├── hooks
│           └── ...etc
│       ├── route-suggestion     # List of route and steps suggestions
│       └── ...etc
└── ...
```

<br/>

`> End of README`
