import Player from "../models/nbaplayers.js"

export async function getPlayers (req,res) {
    try{
        const players = await Player.find()
        res.json(players)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message});
    }
}

export async function getPlayer (req,res) {
    try {
        let {id} = req.params

        const player = await Player.findById(id);

        if (player){
            return response.json(player);
        }
        res.status(404).json({message: "Player not found!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export async function createPlayer (req, res) {
    try{
        const player = new Player (request.body);
        await player.save();
        res.status(201).json(player);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message});
    }
}

export async function updatePlayer(req,res) {
    try{
        const {id} = request.params; 
        const player = await Player.findByIdAndUpdate(id, req.body);
        res.status(201).json(player);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
}

export async function deletePlayer(req,res) {
    try{
        const { id } = req.params;
        const deleted = await Player.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send("Player deleted!");
        }
        throw new Error ("Player not found");
    }catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
}

export async function getPlayerByLastName(req, res) {
    try {
        const { lastName } = req.params
        const player = await Player.find({last_name: lastName})
        res.json(player)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
}