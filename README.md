# GNews App

This is a React news app that shows top headlines in English, Hindi, and Gujarati categories. It is designed to be simple, clean, and easy to explain in a resume or portfolio.

Features

- News categories like business, technology, sports, health, and world
- Multi-language support: English, Hindi, Gujarati
- Responsive news layout using React and Bootstrap
- Simple environment-based API configuration

Project structure

- `src/App.js` — main routing and page setup
- `src/pages/` — individual category pages
- `src/components/` — reusable UI sections like navbar and footer
- `src/api/gnews.js` — API helper for fetching GNews content
- `src/config.js` — environment configuration

How to run locally

1. Install dependencies:

npm install


2. Create a `.env` file in the project root:


REACT_APP_GNEWS_API_KEY=your_gnews_api_key_here


3. Start the app:


npm start


4. Open the browser at:


http://localhost:3000


Production build


npm run build


This generates the optimized production files in the `build` folder.

Important notes

- Never push your `.env` file to GitHub.
- Do not hardcode your API key in source files.
- Use the value from GNews: https://gnews.io



Before sharing this project publicly, make sure these are removed or ignored:

- `.env` file with secret keys
- Any API key hardcoded directly in source code
- Unused default CRA boilerplate text
- Debug logs or test data

This project is good for a resume because it is easy to explain as:

> A multilingual news application built with React that fetches live headlines from the GNews API and presents them by category and language.

