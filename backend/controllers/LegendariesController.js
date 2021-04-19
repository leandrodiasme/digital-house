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

        if(!description){
            return res.status(400).json({error: "Description is required"});
        }

        const legendary = LegendariesService.createLegendary(name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense);

        res.json(legendary);
        console.log(req.body)
    },

    update: (req, res)=>{
        const {id} = req.params;

        const {name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense}
        = req.body;

        if(!description){
            return res.status(400).json({error: "Description is required"});
        }

        // Aqui a gente vai chamar o método do service que sobreescreve

        res.json();
    }
}

module.exports = controller;