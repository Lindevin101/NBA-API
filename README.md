# NBA API

## Overview
This repository contains an NBA API that provides access to various information about the National Basketball Association (NBA), including player details, team statistics, and game data. It offers functionalities to retrieve information from the NBA, which can be used for analysis, application development, or any other purpose.

## Features
- Retrieve player details, including information like height, weight, and statistics.
- Get team information, including team rosters and statistics.
- Access game data, including scores, schedules, and match details.
- Filter data based on specific criteria, such as dates, teams, or player statistics.

## Usage
To use the NBA API, follow these steps:

1. Clone the repository:
git clone https://github.com/Lindevin101/NBA-API.git
    

2. Install dependencies:
Install dependencies using npm install(make sure to have node.js and npm installed already)


3. Run the API:
To run the project, use the command npm start.
To run the project in development mode with hot reloading, use the command npm run dev.
It's important to make sure you have all the dependencies listed in the package.json file installed and correctly configured before running the project.

4. Access the API endpoints using a web browser or tools like cURL, Postman, or any HTTP client.

## Endpoints
- `/players`: Retrieve a list of NBA players.(https://nba-api-lin-e943d2a631f5.herokuapp.com/nbaplayers)
- `/teams`: Get information about NBA teams.(https://nba-api-lin-e943d2a631f5.herokuapp.com/nbateams)

## Sample API Request
- Retrieve NBA player details:
{
      "id": 1043,
      "first_name": "Kobe",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Bryant",
      "position": "",
      "team": {
        "id": 14,
        "abbreviation": "LAL",
        "city": "Los Angeles",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Los Angeles Lakers",
        "name": "Lakers"
      },
      "weight_pounds": null
    },

- Retrieve NBA team details: 
{
  "id": 14,
  "abbreviation": "LAL",
  "city": "Los Angeles",
  "conference": "West",
  "division": "Pacific",
  "full_name": "Los Angeles Lakers",
  "name": "Lakers"
}


## Dependencies
- Mongoose
-Express
-Morgan
-CORS
-Chalk
-Node
-MongoDB
-VS Code
-Postman
-JSON

## Contribution
Contributions to this project are welcome. If you'd like to contribute, feel free to fork this repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer
This API is created for educational purposes and does not claim official affiliation or endorsement by the NBA.

## Contact
For any questions or concerns, please [open an issue](https://github.com/Lindevin101/NBA-API/issues) in this repository.
