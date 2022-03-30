function  errorHandler(err,req,res,next) {
    if(err.name === 'UnauthorizedError'){
        //jwt authentication error
       return res.status(401).json({message:"the user isnot authorized"})
    }
    if(err.name === 'ValidationError'){
        //validation error
       return  res.status(401).json({message:err})
    }
    //defailt server error
     return res.status(500).json({message:err})
}

module.exports = errorHandler;