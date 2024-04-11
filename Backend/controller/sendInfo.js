import ErrorHandler from "../middlewares/error.js";
import { SignUp } from "../signup/signup.js";


const sendInfo = async (req, res, next) => {
  const { user, email,password } = req.body;
  if (!user || !email || !password) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await SignUp.create({ user,email,password });
    res.status(201).json({
      success: true,
      message: "Signup Successfully!",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return next(error);
  }
};


export default sendInfo;
