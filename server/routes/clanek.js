var express = require("express");
var router = express.Router();

const clanekController = require("../controllers/clanek");

router.get("/", clanekController.getAllClanky);

//localhost:3000/clanek/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", clanekController.getClanekById);

router.delete("/:id", clanekController.deleteClanek);

router.put("/:id", clanekController.updateClanek);

router.post("/", clanekController.createClanek);

module.exports = router;