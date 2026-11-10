const express = require("express");
const router = express.Router();
const komikController = require("../controllers/KomikController");

router.get("/komik", komikController.getAllKomik);
router.get(
    "/komik/:id",
    validateParams(idSchema),
    komikController.getKomikById,
);
router.post("/komik", validateBody(komikSchema), komikController.createKomik);
router.put("/komik/", komikController.updateKomik);
router.delete(
    "/komik/:id",
    validateParams(idSchema),
    komikController.deleteKomik,
);

module.exports = router;