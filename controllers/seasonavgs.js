import Stats from "../models/seasonavgs.js"

export async function getStats (req,res) {
    try{
        const stats = await Stat.find()
        response.json(stats)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message});
    }
}

export async function getStat (req,res) {
    try {
        let id = request.params
        console.log(id.id)
        const stat = await Stat.find({ last_name: id.id });
        if (stat){
            return response.json(stat);
        }
        response.status(404).json({message: "Stat not found!"});
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: error.message });
    }
}

export async function createStat (req, res) {
    try{
        const stat = new Stat (request.body);
        awaitstat.save();
        response.status(201).json(stat);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: error.message});
    }
}

export async function updateStat(req,res) {
    try{
        const {id} = request.params; 
        const stat = await Stat.update({ last_name: id.id}, request.body);
        response.status(201).json(stat);
    } catch (error) {
        console.error(error);
        response.status(500).json({error: error.message});
    }
}

export async function deleteStat(req,res) {
    try{
        const { id } = request.params;
        const deleted = await Stat.findByIdAndDelete(id);
        if (deleted) {
            return response.status(200).send("Stat deleted!");
        }
        throw new Error ("Stat not found");
    }catch (error) {
        console.error(error);
        response.status(500).json({error: error.message});
    }
}