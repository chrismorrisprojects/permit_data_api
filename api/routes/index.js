module.exports = app => {
    const tutorials = require("../controllers/uicData.js");

    const router = require("express").Router();
    router.get("/api/uic", tutorials.findAll);
    router.get("/api/uic/:id", tutorials.findByUIC);

};
