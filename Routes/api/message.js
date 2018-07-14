const router = require("express").Router();
const messageService = require("../../Services/message");
const bodyParser = require("body-parser");

jsonParser = bodyParser.json();

router.get("/", (req, res, next) => {
    messageService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get("/getUsers/:id", (req, res, next) => {
    messageService.findAllUsers(req.params.id, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
          } else {
            res.status(400);
            res.end();
          }
    })
});

router.get("/:id", (req, res, next) => {
   messageService.findOne(req.params.id, (err, data) => {
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
  const obj = {senderId: req.body.senderId, bodyMes: req.body.bodyMes, receiverId: req.body.receiverId};
  messageService.add(obj, (err, data) => {
    res.end();
  });
});

router.put("/:id", (req, res, next) => {
    const obj = {senderId: req.body.senderId, bodyMes: req.body.bodyMes, receiverId: req.body.receiverId};
    messageService.findOneAndUpdate(req.params.id, obj, (err, data) => {
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
    messageService.findOneAndDelete(req.params.id, (err, data) => {
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
