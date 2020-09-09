const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;


const routes = express.Router();

// GET ALL ACTIVITIES
routes.route("/getActivities").get(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    dbo
      .collection("Activities")
      .find({})
      .toArray(function (err, result) {
        res.json(result);
      });
  } catch (err) {
    console.error(err);
  }
});

// GET ACTIVITY BY ID
routes.route("/getActivityById").post(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    const result = await dbo
      .collection("Activities")
      .find({ _id: ObjectId(req.body.userId) })
      .toArray();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

// GET ACTIVITY BY TITLE
routes.route("/getActivityByTitle").post(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("alpha");
    dbo
      .collection("Activities")
      .find({ title: req.body.title })
      .toArray(function (err, result) {
        res.json(result);
      });
  } catch (err) {
    console.log(err);
  }
});

// CREATE NEW ACTIVITY
routes.route("/createActivity").post(async (req, res) => {
    try {
      const client = await MongoClient.connect(process.env.MONGO_URL);
      const dbo = client.db("alpha");
      var activityObj = {
        creatorId: ObjectId(req.body.creatorId),
        title: req.body.title,
        type: req.body.type,
        distance: req.body.distance,
        time: req.body.time,
        music: req.body.music,
        stats: req.body.stats,
        others: req.body.others
      };
      dbo.collection("Activities").insertOne(activityObj, function (err, r) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json({ message: "Successfully Inserted Activity" });
      });
    } catch (err) {
      console.log(err);
    }
  });
  
  // UPDATE ACTIVITY BY ID
  routes.route("/updateActivity").post(async (req, res) => {
    try {
      const client = await MongoClient.connect(process.env.MONGO_URL);
      const dbo = client.db("alpha");
      var activityObj = {
        creatorId: ObjectId(req.body.creatorId),
        title: req.body.title,
        type: req.body.type,
        distance: req.body.distance,
        time: req.body.time,
        music: req.body.music,
        stats: req.body.stats,
        others: req.body.others
      };
      const results = await dbo
        .collection("Activities")
        .updateOne({ _id: ObjectId(req.body.activityId) }, { $set: activityObj });
    } catch (err) {
      console.log(err);
    }
  });
  
  // DELETE ACTIVITY BY ID
  routes.route("/deleteActivity").delete(async (req, res) => {
    try {
      const client = await MongoClient.connect(process.env.MONGO_URL);
      const dbo = client.db("alpha");
      const results = await dbo
        .collection("Activities")
        .deleteOne({ _id: ObjectId(req.body.activityId) });
      res.json({ message: "Successfully deleted activity" });
    } catch (err) {
      console.log(err);
    }
  });
  

module.exports = routes;
