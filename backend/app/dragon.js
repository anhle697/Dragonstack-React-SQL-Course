const TRAITS = require('../data/traits.json');
const DEFAULT_PROPERTIES = {
    name: "unnamed",
    get birthdate(){
        return new Date();
    },
    get randomTraits(){
        const traits = [];
        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[
                Math.floor(Math.random() *traitValues.length)
            ];
            traits.push({ traitType, traitValue });
        });
        return traits;
    }
}

class Dragon{
    constructor({name, birthdate, traits} = {}){
        this.name = name || DEFAULT_PROPERTIES.name;
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon;
