const router = require("express").Router();
const { Test } = require("../database");

router.get("/all/:pageNo", (req, res) => {
  //     var perPage = 40;
  //     var page = Math.max(0, req.params.pageNo);
  //     if (req.params.pageNo <= 0) {
  //         return res.status(400).json({ message: "Page no should be between 1-999" });
  //     }
  //     Loan.find({})
  //         .limit(perPage)
  //         .skip(perPage * (page - 1))
  //         .exec(function (err, result) {
  //             if (err) throw err;
  //             Loan.estimatedDocumentCount().exec(function (err, count) {
  //                 if (err) throw err;
  //                 var pageInfo = {
  //                     firstPage: 1,
  //                     prevPage: page - 1,
  //                     currPage: page,
  //                     nextPage: page + 1,
  //                     totalPages: Math.floor(count / perPage)
  //                 };
  //                 if (page === 1) {
  //                     pageInfo = {
  //                         currPage: page,
  //                         nextPage: page + 1,
  //                         totalPages: Math.floor(count / perPage)
  //                     };
  //                 }
  //                 if (page === Math.floor(count / perPage)) {
  //                     pageInfo = {
  //                         firstPage: 1,
  //                         prevPage: page - 1,
  //                         currPage: page,
  //                         totalPages: Math.floor(count / perPage)
  //                     };
  //                 }
  //                 if (req.params.pageNo > Math.floor(count / perPage)) {
  //                     return res
  //                         .status(400)
  //                         .json({ message: "Page no should be between 1-999" });
  //                 }
  //                 res.status(200).json({ result, pageInfo });
  //             });
  //         });
  // });
  // router.get("/getmemberdetail/:memberId", (req, res) => {
  //     Loan.findOne({ member_id: req.params.memberId }).then(member => {
  //         if (!member) {
  //             return res.status(400).json({ message: "No Data Found" });
  //         } else {
  //             res.status(200).json(member);
  //         }
  //     });
  // });
  // function insertionSort(array) {
  //     for (let i = 1; i < array.length; i++) {
  //         var key = parseInt(array[i]);
  //         var j = i - 1;
  //         while (j >= 0 && parseInt(array[j]) > key) {
  //             array[j + 1] = array[j];
  //             j = j - 1;
  //         }
  //         array[j + 1] = key;
  //     }
  //     return array;
  // }
  // router.get("/topten", (req, res) => {
  //     Loan.find({ verification_status: "Verified" })
  //         .sort({ loan_amnt: -1 })
  //         .limit(10)
  //         .then(result => {
  //             res.json(result);
  //         })
  //         .catch(err => console.log(err));
  // });
  // router.post("/search-member", (req, res) => {
  //     const { errors, isValid } = validateSearchInput(req.body);
  //     if (!isValid) {
  //         return res.status(400).json(errors);
  //     }
  //     var memberId = req.body.memberId;
  //     Loan.find({ member_id: memberId })
  //         .then(result => {
  //             if (result.length === 0) {
  //                 return res.status(400).json({ memberId: "No User Found" });
  //             } else {
  //                 res.status(200).json(result);
  //             }
  //         })
  //         .catch(err => console.log(err));
  // });
  // router.get("/plot-chart", (req, res) => {
  //     var result1 = [];
  //     const filterData = {
  //         year: req.query.a,
  //         varificationStatus: req.query.b,
  //         loanStatus: req.query.c
  //     };
  //     Loan.find({
  //         last_pymnt_d: { $regex: ".*" + filterData.year + ".*" },
  //         verification_status: filterData.varificationStatus,
  //         loan_status: filterData.loanStatus
  //     })
  //         .sort({ loan_amnt: -1 })
  //         .limit(10)
  //         .then(graphData => {
  //             graphData.map(item => {
  //                 result1.push({
  //                     memberId: item.member_id,
  //                     loanAmount: item.loan_amnt,
  //                     annualIncome: item.annual_inc,
  //                     lastPayment: item.last_pymnt_amnt
  //                 });
  //             });
  //             res.json(result1);
  //         })
  //         .catch(err => console.log(err));
});

module.exports = router;
