const mongoose = require("mongoose"); // Import knihovny Mongoose pro práci s MongoDB

const schema = mongoose.Schema({ // Definice schématu pro model článku
  clanek: { type: String, required: true }, // Pole clanek s typem String a povinným požadavkem
});

module.exports = mongoose.model("Clanek", schema); // Export modelu "Clanek" na základě definovaného schématu