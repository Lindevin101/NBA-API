import Team from "../models/nbateams.js"

export async function getTeams(req,res) {
  try {
    const teams = await Team.find()
    res.json(teams)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message });
  }
}

export async function getTeam(req,res) {
  try {
    let {id} = req.params

    const team = await Team.findById(id);
    if (team) {
      return res.json(team);
    }
    res.status(404).json({ message: "Team not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export async function createTeam(req,res) {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export async function updateTeam(req,res) {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndUpdate(id, req.body);
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export async function deleteTeam(req,res) {
  try {
    const { id } = req.params;
    const deleted = await Team.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Team deleted!");
    }
    throw new Error("Team not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}