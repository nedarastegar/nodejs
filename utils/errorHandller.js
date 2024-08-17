const NotFoundError = (req,res,next)=>{
    return res.status(404).json({
        statusCode: res.statusCode,
        error:{
            type:'NotFound',
            message:"not found" + req.url + "route"
        },
    })
}

const ErrorHandller = (err,req,res,next)=>{
    return res.json({
        statusCode:err.status || 500,
        error:{
            message:err.message || "internalservererror"
        }
    })
}

module.exports ={
    NotFoundError,
    ErrorHandller
}