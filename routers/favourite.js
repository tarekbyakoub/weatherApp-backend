const express = require("express");
const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Favourite = require("../models/").favourite;
const router = new Router();

router.post("/post", authMiddleware, async (req, res, next) => {
  try {
    const { resolvedAddress, displayName } = req.body;
    const id = req.user.dataValues.id;
    const favourite = await Favourite.create({
      resolvedAddress,
      displayName,
      userId: id,
    });
    if (favourite.resolvedAddress !== Favourite.resolvedAddress)
      return res.status(200).send({ favourite });
  } catch (e) {
    console.log(e.message);
    next();
  }
});

router.get("/", async (req, res, next) => {
  try {
    const favourites = await Favourite.findAll();
    console.log(favourites);
    res.send(favourites);
  } catch (e) {
    console.log(e.message);
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const favourite = await Favourite.findByPk(id);
    console.log(favourite);
    res.send(favourite);
    next();
  } catch (e) {
    console.log(e.message);
    next();
  }
});

router.get("/user/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const favourites = await Favourite.findAll({
      where: { userId: userId },
    });
    res.send(favourites);
    console.log(favourites);
  } catch (e) {
    console.log(e.message);
    next();
  }
});

module.exports = router;
