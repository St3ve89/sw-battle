# Star Wars Battle Ground

You can take a look at the app by visiting https://swbattle.netlify.app/

Note: <p style="color: orange">Please note that the backend of this app is hosted on the free hosting of Heroku, so it may take some time for the server to wake up.</p>

## Description of the project

Simple Star Wars game

• The user can choose to play with either people or starships.

• The app makes a GraphQL query to fetch two random resources
of that type (people/starships).

• If the player has chosen people the app compares height else if
they have chosen starship it compares hyperdrive_rating.

• The two resources are then rendered on the screen as “cards” with
some of their attributes displayed and the resource with the highest
value for that attribute declared the winner.

• The user should then be able to play again using a button that re-
peats the same request.

• The user should also be able to go to a route which displays the
history of the results.

Extras

• Add functionality to enable more than two players.

• Deploy two applications with different colour themes.

## To Run the App Locally

1. Git clone this repository.
2. Then, in the project root folder, run the below in the terminal:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

- Test approach: TDD with mainly unit testing

How to run tests

```bash
npm run test
```

Test Coverage

```bash
npm run test:coverage
```

## Other notes

Styling was not a priority for this app.
