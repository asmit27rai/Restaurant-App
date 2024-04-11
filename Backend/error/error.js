class ErrorHandler extends Error {
    constructor(message,statuscode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleWare = (err,req,res,nex) => {
    err.message = err.message || "Internal Server Error!";
    err.statusCode = err.statusCode || 500;
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};


export default ErrorHandler