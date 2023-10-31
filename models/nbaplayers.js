import mongoose from "mongoose";

let Player = new mongoose.Schema ({
    id: {type: String},
    first_name: {type: String},
    last_name: {type: String},
    height_ft: {type: Number},
    height_in: {type: Number},
    position: {type: String},
    team: {
        id: {type: Number},
        abbreviation: {type: String},
        city: {type: String},
        conference: {type: String},
        division: {type: String},
        full_name: {type: String},
        name: {type: String}, 
    },
    weight_lbs: {type: Number}
})

export default mongoose.model("Players", PLayer)