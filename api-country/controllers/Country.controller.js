const CountryModel = require("../models/Country.js")

async function saveCountry(req, res){
    try{
        const data = req.body;
            const newCountry = new CountryModel({
                code: data.code,
                name: data.name,
                continent: data.continent,
                capital: data.capital,
                language: data.language,
                currency: data.currency,
                flag: data.flag,
                photos: data.photos
            });

        await newCountry.save();

        res.json({message: 'País creado exitosamente'});
    }catch (error){
        console.log("Error al crear país: " + error);
    }
}

async function viewCountry(req, res) {
    try{
        const country = await CountryModel.find();

        res.json({country: country})
    }catch (error){
        console.log("Error al consultar los países: ", error);
    }
}

async function viewOneCountry(req, res){
    const {code} = req.params;
    console.log('code', code)
    try{
        //const country = await CountryModel.find();
        const country = await CountryModel.findOne({code: code});
        res.json({"country": country})
        console.log(country);
    }catch (error){
        console.log("Error al consultar el país: ", error);
    }
}

async function editCountry(req, res) {
    try {
        const { code } = req.params;

        // Buscar el país por el código en lugar de _id
        await CountryModel.findOneAndUpdate({ code: code }, req.body);

        res.json({ message: "País editado correctamente" });
    } catch (error) {
        console.log("Error al editar país: " + error);
        res.status(500).json({ error: "Error al editar país" });
    }
}

async function deleteCountry(req, res) {
    try {
        const { code } = req.params;

        // Buscar y eliminar el país por su código
        const deletedCountry = await CountryModel.findOneAndDelete({ code: code });

        if (!deletedCountry) {
            return res.status(404).json({ error: "No se encontró el país para eliminar" });
        }

        res.json({ message: "País eliminado exitosamente" });
    } catch (error) {
        console.log("Error al eliminar país: " + error);
        res.status(500).json({ error: "Error al eliminar país" });
    }
}

module.exports = {saveCountry, viewCountry, viewOneCountry, editCountry, deleteCountry};