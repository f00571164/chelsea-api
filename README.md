# chelsea-api
3.2 Assignment: Api 

# Chelsea API

This is a simple REST API built with Node.js, Express.js, and MongoDB, that allows for management of Chelsea soccer team's player data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. 

### Installing

To install the dependencies, run the following command:
`npm install`

### Running the app

To start the server, run:
`npm start`


The server will start running at `http://localhost:3000`.

## API Endpoints

- POST `/players`: Add a new player.
- PUT `/players/:id`: Update a player.
- DELETE `/players/:id`: Delete a player.
- GET `/top-scorer`: Fetch the player with the most goals.
- GET `/top-assist`: Fetch the player with the most assists.
- GET `/red-cards`: Fetch the players sorted by most to fewest red cards.
- GET `/penalty-goals`: Fetch the player with the most penalty goals.
- GET `/least-assists`: Fetch players sorted from fewest to most assists.

## Built With

- [Express.js](https://expressjs.com) - The web framework used.
- [Mongoose](https://mongoosejs.com) - Elegant MongoDB object modeling for Node.js.

## Authors

- **Shuaib Kadher** - *Initial work* - [f00571164](https://github.com/f00571164)

## License

This project is licensed under the MIT License.
