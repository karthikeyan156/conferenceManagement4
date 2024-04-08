const PaperModel = require("../models/conferencepaper"); // Ensure this path is correct

exports.addPaper= async (req, res) => {
  try {
    const { paperName,paperLocation,reviewers} = req.body;
    let totalMarks=findTotalMarks(reviewers);
    const paper = new PaperModel({
      paperName,
      paperLocation,
      reviewers,
      totalMarks
    });

    const savedDoc = await paper.save();
    console.log("paper added successfully", savedDoc);
    res.status(200).json("paper added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occurred, please try again later." });
  }
};
 
//work from here

exports.listAll = async (req, res) => {
  try {
    let allTimings=await PaperModel.find({});
    res.status(200).json(allTimings);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occurred, please try again later." });
  }
};


exports.addPaperReview= async (req, res) => {
  try {
    let paperId= req.body._id;
    const { OverallReview , paperState , isApproved} = req.body;
    const updatedData ={
        OverallReview , 
        paperState , 
        isApproved
    }
    const savedDoc = await PaperModel.findByIdAndUpdate(paperId,updatedData,{new:true})
    if(savedDoc){
        console.log("paper updated successfully", savedDoc);
        res.status(200).json("paper updated successfully");
    }
    else{
        res.status(404).json("paperId not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occurred, please try again later." });
  }
};
//should work on delete solt when a customer selects it.

const findTotalMarks = (reviewers) => {
    let totalMarks=0;
    console.log(reviewers)
    for (let i in reviewers){
        totalMarks += reviewers[i].overallScore
    }
  return totalMarks;
  
};

