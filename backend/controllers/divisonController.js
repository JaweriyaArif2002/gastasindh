const Division = require("../models/divSchema");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
exports.createDivision = catchAsyncErrors(async (req,res,next) =>{
     const division =  await Division.create(req.body);
     res.status(201).json({
          success:true,
          division
     })
})

//get all divisions
exports.getalldevision = catchAsyncErrors(async (req, res,next) =>{
    // res.status(200).json({message:"route is woking fine"})
     const divisions = await Division.find();
     res.status(200).json({
          success:true,
          divisions
     })
 })
 
exports.SingleDivision = catchAsyncErrors(async (req, res,next) =>{
   
     const divisions = await Division.findById(req.params.id);

     if(!divisions){
          return next(new ErrorHander("no division found",404))
     }
     
     res.status(200).json({
          success:true,
          divisions
     });
  })

// update division


exports.updateDivision = catchAsyncErrors( async (req,res,next) =>{
     let division = await Division.findById(req.params.id);
     if(!division){
         return next(new ErrorHander("no division found",404))
     }
     division = await Division.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
          runValidators:true,
          useFindAndModify:false

     });
     res.status(200).json({
          success:true,
          division
     })

     
})


//delete division


exports.deleteDivision = catchAsyncErrors( async (req,res,next) =>{
     const division = await Division.findById(req.params.id);

     if(!division){
          return next(new ErrorHander("no division found",404))
     }
     await division.remove();
     res.status(200).json({
          success:true,
          message: "division deleted"
     })
})


