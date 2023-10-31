import db from "../db/connection.js"
import Player from "../models/nbaplayers.js"
import Team from "../models/nbateams.js"
import Stat from "../models/seasonavgs.js"
import players from "./nbaplayers.json" assert { type: "json"}
import teams from "./nbateams.json" assert {type: "json"}
import stats from "./seasonavgs.json" assert {type: "json"}
import chalk from "chalk"

fetch('https://www.balldontlie.io/api/v1/players')
  .then(response => response.json())
  .then(data => {
    return data.data
  })
  .then(data => fsPromises.writeFile("./seed/nbaplayers.json", JSON.stringify((data))))
  .catch(error => console.error(error))

  fetch('https://www.balldontlie.io/api/v1/teams')
  .then(response => response.json())
  .then(data => {
    return data.data
  })
  .then(data => fsPromises.writeFile("./seed/nbateams.json", JSON.stringify((data))))
  .catch(error => console.error(error))

  fetch('https://www.balldontlie.io/api/v1/season_averages')
  .then(response => response.json())
  .then(data => {
    return data.data
  })
  .then(data => fsPromises.writeFile("./seed/seasonavgs.json", JSON.stringify((data))))
  .catch(error => console.error(error))

async function insertData() {

  await Player.create(players)
  await Team.create(teams)
  await Stat.create(stats)

  await db.close()
} 

  insertData()