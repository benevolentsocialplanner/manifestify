const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError')
const User = require('../models/users.js')
const { promisify } = require('util')
const catchAsync = require ('../utils/catchAsync')
const crypto = require('crypto')
const bcrypt = require("bcrypt")

salt = crypto.randomBytes(16).toString('hex')

const signToken = _id => {
    return jwt.sign({ _id: _id }, process.env.SECRET, {
      expiresIn:  '1h'
  });
};


const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user._id);
  
    res.cookie('jwt', token, {
      expires: new Date(Date.now() + 1 * 3600000),
      httpOnly: true
    });
    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
};


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    console.log("logging in")
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.correctPassword(password, user.encry_password))) {
      return next(new AppError('Incorrect email or password', 401));
    }  
    createSendToken(user, 200, req, res);
});


exports.register = catchAsync(async (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  const name = req.body.name
  const email = req.body.email
  const encry_password= req.body.password
  bcrypt.hash(encry_password, salt, async (err, hashedPw) => {
    if(err){
        console.log(err.message)
        return err
    }
    const user = new User({
      name: name,
      encry_password: hashedPw,
      email: email
    })

    user.save()
     .then((user) => {
        res.json({ user})
      })
      .catch((err) => {
        res.send(err)
      })
  })
     
});


exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 1 * 1000),
      httpOnly: true
    });
    res.status(200).json({ status: 'success' });
};

exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }else if(req.body.token){
      token = req.body.token
    }

    if (!token) {
      return next(
        new AppError('You are not logged in! Please log in to get access.', 401)
      );
    }
  next();
});

//sayfalar icin no errors thrown
exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
      try {
        // 1) verify token
        const decoded = await promisify(jwt.verify)(
          req.cookies.jwt,
          process.env.SECRET
        );
  
        // 2) Check if user still exists
        const currentUser = await User.findById(decoded._id);
        if (!currentUser) {
          return next();
        }
        
        // THERE IS A LOGGED IN USER
        res.locals.user = currentUser;
        return next();
      } catch (err) {
        console.log(err.message);
        return next();
      }
    }
    next();
};


var nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const OTP = require('../models/otp');

exports.otp = catchAsync(async (req, res, next) => {
    const { email } = req.body;

    let otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    !otp && res.status(500).json({
      status: 'fail',
      message: 'OTP could not be generated'
    }) 
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD
      }
    });

    var mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: 'Login to Manifestly',
      text: `Your one time password for logging in to Manifestly is: ${otp}. This OTP will expire in 5 minutes.`
    };
    
    const newOTP = new OTP({
      email: email,
      otp: otp
    });
    newOTP.save().then((otp) => {
      console.log('OTP saved')
    }).catch((err) => {
      console.log(err)
    })
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(500).json({
          success: false,
          message: 'Email could not be sent',
          data: {
            error: error.message
          }
        })
      } else {
        res.status(200).json({
          success: true,
          message: `Email sent to: ${email}`,
          data: {
            otp: otp
          }
        })
      }
    })
})

exports.verify = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;
  console.log("verifying")
  const otpDoc = await OTP.findOne({ email, otp });
  console.log(otpDoc.email)
  if (!otpDoc) {
    return next(new AppError('Invalid OTP', 401));
  }else{
    res.status(200).json({
      success: true,
      message: 'OTP verified successfully',
      data: {
        user: otpDoc.email
      }
    })
  }
    
})