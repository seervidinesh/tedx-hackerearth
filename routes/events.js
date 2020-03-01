const router = require("express").Router();
const { TedEvent } = require("../database");
const validateSearchInput = require("../validations/searchInput");

router.get("/all/:pageNo", (req, res) => {
  var perPage = 20;
  var page = Math.max(0, req.params.pageNo);
  if (req.params.pageNo <= 0) {
    return res
      .status(400)
      .json({ message: "Page no should be between 1-1102" });
  }
  TedEvent.find({})
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec(function(err, result) {
      if (err) throw err;
      TedEvent.estimatedDocumentCount().exec(function(err, count) {
        if (err) throw err;
        var pageInfo = {
          firstPage: 1,
          prevPage: page - 1,
          currPage: page,
          nextPage: page + 1,
          totalPages: Math.floor(count / perPage)
        };
        if (page === 1) {
          pageInfo = {
            currPage: page,
            nextPage: page + 1,
            totalPages: Math.floor(count / perPage)
          };
        }
        if (page === Math.floor(count / perPage)) {
          pageInfo = {
            firstPage: 1,
            prevPage: page - 1,
            currPage: page,
            totalPages: Math.floor(count / perPage)
          };
        }

        if (req.params.pageNo > Math.floor(count / perPage)) {
          return res
            .status(400)
            .json({ message: "Page no should be between 1-1102" });
        }
        res.status(200).json({ result, pageInfo });
      });
    });
});

router.get("/event/:id", (req, res) => {
  const id = req.params.id;
  TedEvent.findById({ _id: id })
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

router.get("/search-event", (req, res) => {
  const { errors, isValid } = validateSearchInput(req.query);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const event = req.query.event;
  const selectData = req.query.selectData;
  var query = {};
  if (selectData === "event") {
    query["event"] = { $regex: ".*" + event + ".*", $options: "i" };
  }
  if (selectData === "main_speaker") {
    query["main_speaker"] = { $regex: ".*" + event + ".*", $options: "i" };
  }
  if (selectData === "name") {
    query["name"] = { $regex: ".*" + event + ".*", $options: "i" };
  }
  if (selectData === "title") {
    query["title"] = { $regex: ".*" + event + ".*", $options: "i" };
  }
  TedEvent.find(query)
    .limit(30)
    .then(result => {
      if (result.length === 0) {
        return res.status(400).json({ event: "No data found for this search" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
