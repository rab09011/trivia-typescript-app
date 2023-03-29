# Trivia

#### Made with Create React App & TypeScript

<details>
<summary> Available Scripts </summary>
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

</details>

## The App

After the single page application is launched in the browser, the user can choose two settings before starting the game.

- The number of trivia questions, from a choice of 5, 10, 15, or 20 questions.
- The difficulty of the trivia questions: easy, medium, or hard.

These selections are sent as part of the fetch request to the Trivia DB API. The response from the API is then converted to JSON, and the data is massaged to allow for the shuffling of the potential trivia answers. Transforming the data into a different object also allows for the ability to showcase, via the UI, the correct vs. incorrect trivia answer when a user makes a selection.

## API

Trivia questions are sourced from [Open Trivia DB](https://opentdb.com/): a free to use trivia database.

## TBD

- Add tests using React Testing Library.
- Look into adding more user settings for the start of the game.
- Improve the CSS.
