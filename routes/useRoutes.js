const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

// get : render user
router.get("/", (req, res) => {
  userModel.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

// POST :  add user
router.post("/newUser", (req, res) => {
  let newUser = new userModel(req.body);
  newUser.save((err, data) => {
    err ? console.log(err) : res.send("the user is added");
  });
});

// PUT : up date user with ID
router.put("/:id", (req, res) => {
  userModel.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    (err, data) => {
      err ? console.log(err) : res.send("user is update");
    }
  );
});

// delete :  delete user with ID
router.delete("/:id", (req, res) => {
  userModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.send("user is deleted");
  });
});

module.exports = router;
