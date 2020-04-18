const express = require("express");

const Group = require("../models/group");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const groups = await Group.find().limit(15);

    return res.send({ groups });
  } catch (err) {
    console.log("list", err);
    return res.status(400).send({ error: "Error listing disease groups" });
  }
});

module.exports = (app) => app.use("/groups", router);
