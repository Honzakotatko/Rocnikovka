const Clanek = require("../models/clanek");

exports.getAllClanky = async (req, res) => {
  try {
    const result = await Clanek.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Články nalezeny",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Články nebyly nalezeny" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getClanekById = async (req, res) => {
  try {
    const result = await Clanek.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Článek nalezen",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Článek nebyl nalezen" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteClanek = async (req, res) => {
  try {
    const result = await Clanek.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Článek byl smazan",
      });
    }
    res.status(500).send({ msg: "Něco se pokazilo" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateClanek = async (req, res) => {
  try {
    const data = {
      clanek: req.body.clanek,
    };
    const result = await Clanek.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Článek byl aktualizován",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Článek nebyl aktualizován",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createClanek = async (req, res) => { // Definice funkce createClanek s parametry req (request) a res (response)
  try { // Začátek bloku try-catch pro zachycení případných chyb
    const data = new Clanek({ // Vytvoření nové instance modelu Clanek s daty z requestu
      clanek: req.body.clanek, // Přiřazení hodnoty článku z requestu
    });
    const result = await data.save(); // Uložení dat (článku) do databáze a čekání na dokončení operace
    if (result) { // Pokud je operace úspěšná (result je definováno)
      return res.status(201).send({ // Odeslání odpovědi s HTTP stavovým kódem 201 (Created) a zprávou o úspěchu
        msg: "Článek byl vytvořen", // Zpráva o úspěšném vytvoření článku
        payload: result, // Data vytvořeného článku
      });
    }
    res.status(500).send({ // Pokud operace nebyla úspěšná, odeslat odpověď s HTTP stavovým kódem 500 (Internal Server Error)
      msg: "Článek nebyl vytvořen", // Zpráva o neúspěchu vytvoření článku
    });
  } catch (error) { // Zachycení případné chyby a odeslání odpovídající chybové zprávy
    res.status(500).send(error); // Odeslání chyby s HTTP stavovým kódem 500 (Internal Server Error)
  }
};