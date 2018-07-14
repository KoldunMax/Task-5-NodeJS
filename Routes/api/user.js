const router = require("express").Router();
const userService = require("../../Services/user");
const bodyParser = require("body-parser");

jsonParser = bodyParser.json();

router.get("/", (req, res, next) => {
  userService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});
router.get("/:id", (req, res, next) => {
  userService.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post("/", jsonParser, (req, res, next) => {
  const obj = {name: req.body.name, email: req.body.email};
  userService.add(obj, (err, data) => {
    res.end();
  });
});

router.put("/:id", (req, res, next) => {
  const obj = {name: req.body.name, email: req.body.email};
  userService.findOneAndUpdate(req.params.id, obj, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.delete("/:id", (req, res, next) => {
  userService.findOneAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;
