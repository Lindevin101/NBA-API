import mongoose from "mongoose";

let Stat = new mongoose.Schema ({
  id: {type: Number },
  games_played: {type: Number},
  player_id: {type: Number},
  season: {type: Number},
  min: {type: Number},
  fgm: {type: Number},
  fga: {type: Number},
  fg3m: {type: Number},
  fg3a: {type: Number},
  ftm: {type: Number},
  fta: {type: Number},
  oreb: {type: Number},
  dreb: {type: Number},
  reb: {type: Number},
  ast: {type: Number},
  stl: {type: Number},
  blk: {type: Number},
  turnover: {type: Number},
  pf: {type: Number},
  pts: {type: Number},
  fg_pct: {type: Number},
  fg3_pct: {type: Number},
  ft_pct: {type: Number}
})

export default mongoose.model("Stats", Stat)