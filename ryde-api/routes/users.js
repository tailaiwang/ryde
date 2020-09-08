const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const routes = express.Router();

// GET ALL USERS
routes.route("/getUsers").get(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    dbo
      .collection("Users")
      .find({})
      .toArray(function (err, result) {
        res.json(result);
      });
  } catch (err) {
    console.error(err);
  }
});

// GET USER BY ID
routes.route("/getUserById").post(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    const result = await dbo
      .collection("Users")
      .find({ _id: ObjectId(req.body.userId) })
      .toArray();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

// GET USER BY NAME
routes.route("/getUserByName").post(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    dbo
      .collection("Users")
      .find({ name: req.body.name })
      .toArray(function (err, result) {
        res.json(result);
      });
  } catch (err) {
    console.log(err);
  }
});

// CREATE NEW USER
routes.route("/createUser").post(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    var userObj = {
      name: req.body.name,
      bio: req.body.bio,
      primarySport: req.body.primarySport,
      ownActivities: req.body.ownActivities,
      otherActivities: req.body.otherActivities,
    };
    dbo.collection("Users").insertOne(userObj, function (err, r) {
      if (err) throw err;
      console.log("1 document inserted");
      res.json({ message: "Successfully Inserted User" });
    });
  } catch (err) {
    console.log(err);
  }
});

// UPDATE USER BY ID
routes.route("/updateUser").post(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    const userObj = {
      name: req.body.name,
      bio: req.body.bio,
      primarySport: req.body.primarySport,
      ownActivities: req.body.ownActivities,
      otherActivities: req.body.otherActivities,
    };
    const results = await dbo
      .collection("Users")
      .updateOne({ _id: ObjectId(req.body.userId) }, { $set: userObj });
  } catch (err) {
    console.log(err);
  }
});

// DELETE USER BY ID
routes.route("/deleteUser").delete(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("FireDrillApp");
    const results = await dbo
      .collection("Users")
      .deleteOne({ _id: ObjectId(req.body.userId) });
    res.json({ message: "Successfully deleted user" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = routes;
