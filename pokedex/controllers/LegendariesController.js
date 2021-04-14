const LegendaryServices = require('../services/LegendariesServices');

const controller = {
    index: (req, res)=>{
        const legendaryList = LegendaryServices.listLegendaries();
        res.json(legendaryList);
    },
}

module.exports = controller;