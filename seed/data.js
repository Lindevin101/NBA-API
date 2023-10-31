import db from "../db/connection.js"
import Player from "../models/nbaplayers.js"
import Team from "../models/nbateams.js"
import players from "./nbaplayers.json" assert { type: "json"}
import teams from "./nbateams.json" assert {type: "json"}





async function insertData() {

  await Player.create(players)
  await Team.create(teams)

  await db.close()
} 
  insertData()