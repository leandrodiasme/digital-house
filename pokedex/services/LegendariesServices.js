const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
    listLegendaries: ()=>{
        const pokemon = new LegendaryModel(1, 'Pineco', 'Descrição do Pokemon', 'bug');
        return pokemon;
    }
}
module.exports = LegendariesService;

