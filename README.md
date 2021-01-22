# Travel

The app that helps you find the better MRT travel route.

Built with TypeScript + ReactJS + Redux + Material UI Framework + Jest. This project was bootstrapped with Create React App.

### Features:

1. Find the best route between any 2 MRT stations
2. Shows you the path in a timeline view, with interchanges
3. Computes approx. travel time and the no. of stations you need to take
4. Mobile responsive and works on most devices
5. ... Stay tuned for more!

[[_TOC_]]

## Getting Started

### Installing

1. Download this repo

2. Navigate to the project directory

```bash
travel-board
```

3. Install dependencies

```bash
npm install
```

1. Run a local server to serve the application

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

Components of this project are unit tested. To contribute to tests:

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
│   ├── data                     # Modules that handle data access
│   │   ├── stations
│   │   |   └── ...etc
│   │   └── ...etc
│   ├── services                 # Modules that handle business logic
│   │   ├── mapShortestRoute     # Services that handle some algorithmic logic
│   │   ├── models               # Business Data Models
│   │   |   └── ...etc
│   │   ├── ...etc
│   ├── lib                      # Common library modules
│   │   ├── assets
│   │   |   ├── icons
│   │   |   ├── images
│   │   |   ├── fonts
│   │   |   └── ...etc
│   │   ├── ui                   # Common, App-Wide React components
│   │   |   ├── components
│   │   |       ├── buttons
│   │   |       ├── forms
│   │   |       ├── inputs
│   │   |       ├── modals
│   │   |       ├── banners
│   │   |       └── ...etc
│   │   └── theme                # Common theme components or attributes for reuse
│   │       └── ...etc
│   └── ui                       # Modules containing UI components for individual features
│       ├── app                  # Top-level app component
│           ├── components       # React components that make up this module
│           └── ...etc
│       ├── travel               # Travel route suggestion UI components
│           ├── components       # React components that make up this module
│           ├── ducks            # Redux action creators, reducers, selectors for this module
│           ├── hooks
│           └── ...etc
│       └── ...etc
└── ...
```

<br/>

`> End of README`
