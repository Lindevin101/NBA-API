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
        let id = req.params
        console.log(id.id)
        const player = await Player.find({ last_name: id.id });
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
        awaitplayer.save();
        res.status(201).json(player);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message});
    }
}

export async function updatePlayer(req,res) {
    try{
        const {id} = request.params; 
        const player = await Player.update({ last_name: id.id}, req.body);
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