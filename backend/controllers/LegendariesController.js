const LegendariesService = require('../services/LegendariesService');

const controller = {
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);        

        return res.json(legendary);
    },

    create: (req,res)=>{

        const {name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense}
        = req.body;

        const legendary = LegendariesService.createLegendary(name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense);

        res.json(legendary);
        console.log(req.body)
    }
}

module.exports = controller;