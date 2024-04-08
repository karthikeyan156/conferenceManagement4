const express = require("express");
const router = express.Router();
const { listAll,addPaper ,addPaperReview} = require("../services/conferencePaperServices");

//Define routes
router.post("/listAll", listAll);
router.post("/addPaper",addPaper);
router.post("/editPaper",addPaperReview);


module.exports = router;