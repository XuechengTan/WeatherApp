var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API 测试，前后端");
});

module.exports = router;