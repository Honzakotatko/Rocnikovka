var express = require("express"); // Importování modulu Express
var router = express.Router(); // Vytvoření instance směrovače

const clanekController = require("../controllers/clanek"); // Importování ovladače pro manipulaci s články

// Nastavení různých cest pro manipulaci s články pomocí odpovídajících metod ovladače

router.get("/", clanekController.getAllClanky); // Cesta pro získání všech článků

router.get("/:id", clanekController.getClanekById); // Cesta pro získání článku podle ID

router.delete("/:id", clanekController.deleteClanek); // Cesta pro smazání článku podle ID

router.put("/:id", clanekController.updateClanek); // Cesta pro aktualizaci článku podle ID

router.post("/", clanekController.createClanek); // Cesta pro vytvoření nového článku

module.exports = router; // Export směrovače pro použití v jiných částech aplikace