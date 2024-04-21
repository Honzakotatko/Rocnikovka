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

exports.createClanek = async (req, res) => {
  try {
    const data = new Clanek({
      clanek: req.body.clanek,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Článek byl vytvořen",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Článek nebyl vytvořen",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};