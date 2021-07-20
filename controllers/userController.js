<<<<<<< HEAD
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const { serverError } = require('../utilitys/errors')
const {signupValidator} =require('../validator/validator')

module.exports = {
    signupUser: (req, res) => {
        let {
            email,
            firstName,
            lastName,
            password,
            confirmPassword,
            bloodGroup,
            address
        } = req.body;
    
        let validate = signupValidator({
            email,
            password,
            confirmPassword,
            firstName,
            lastName,
            bloodGroup
        });
    
        if (!validate.isValid) {
            res.status(404).json(validate.error);
    
        } else {
            User.findOne({
                    email
                })
                .then(user => {
                    if (user) {
                        return res.status(400).json({
                            massage: 'Email already Exists!'
                        })
                    } else {
                        let saltRounds = 20;
                        bcrypt.hash(password, saltRounds, (error, hash) => {
                            let user = new User({
                                email,
                                password : hash,
                                firstName,
                                lastName,
                                bloodGroup
                            })
    
                            user.save()
                                .then(user => {
                                    res.status(201).json({
                                        massage: 'created sucessfully',
                                        user
    
                                    })
                                })
                                .catch(error => resourceError(res, 'server error occured!'))
                        })
                    }
    
                })
                .catch(error => {
                    res.status(400).json({
                        massage: error
                    })
                })
        }
    },

    signinUser: (req,res) => {
        let { email, password } = req.body;
        console.log(email);
        console.log(password);

        User.findOne({email})
            .then(user => {
                if (user) {
                    console.log(user.email);
                    console.log(password);

                    bcrypt.compare(password, user.password, (err, result) => {
                        if (err) {
                            res.json({
                                massage : 'error occourd'
                            })
                        }
                        else if (result) {
                            let payload = {
                                email: user.email,
                                _Id : user._Id
                            }
                            let token = jwt.sign(payload, 'PRIVATEKEY', { expiresIn: '7d' });


                            res.json({
                                massage: 'login successfully!',
                                token
                            })
                        }

                        else {
                            res.json({
                                massage : 'don\'t match your email or password!'
                            })
                        }
                    })
                }
                else {
                    res.json({
                        massage : "don\'t match your email or password"
                    })
                }
            })
            .catch(error => serverError(res, error))
        
    },

        
    getAllUser: (req,res) => {
        User.find()
            .then(user => {
                res.json({
                    user
                })
            })
            .catch(error => {
                console.log('error');
            })
        
    },

    getUser: (req,res) => {
        let userId = req.params.userId;
        console.log(`url parms = ${userId}`);
        User.findById(userId)
            .then( user => {
                res.json({
                    massage: 'user get successful!',
                    user
                })
            })
            .catch(error => {
                res.status(400).json({
                    massage: 'error'
                })
            })
    },

    updateUser: (req, res) => {
        
        let userId = req.params.userId;
        let updateData = {
            email : req.body.email,
            password : req.body.password,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            bloodGroup : req.body.bloodGroup
        }
        console.log(userId);
        User.findByIdAndUpdate(userId, {$set : updateData})
            .then(user => {
                res.json({
                    massage: 'user update successful!',
                    user
                })
            })
            .catch(error => {
                res.status(400).json({
                    massage: 'error'
                })
            })
        
    },
    
    deleteUser: (req, res) => {
        let userId = req.params.userId;
        console.log(userId);
        User.findByIdAndDelete(userId)
            .then(user => {
                res.json({
                    massage: 'user delete successful!',
                    user
                })
            })
            .catch(error => {
                res.status(400).json({
                    massage: 'error'
                })
            })
        
    }
}
=======
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { serverError } = require("../utilitys/errors");
const { signupValidator, signinValidator } = require("../validator/validator");

module.exports = {
  signupUser: (req, res) => {
    let {
      phone,
      password,
      confirmPassword,
      firstName,
      lastName,
      bloodGroup,
      dob,
      district,
      upazila,
    } = req.body;

    let validate = signupValidator({
      phone,
      password,
      confirmPassword,
      firstName,
      lastName,
      bloodGroup,
      dob,
      district,
      upazila,
    });

    if (!validate.isValid) {
      res.status(404).json(validate.error);
    } else {
      User.findOne({
        phone,
      })
        .then((findUser) => {
          if (findUser) {
            return res.status(400).json({
              massage: "Phone Number Already Exists!",
            });
          } else {
            let saltRounds = 5;
            bcrypt.hash(password, saltRounds, (error, hash) => {
              let user = new User({
                phone,
                password: hash,
                firstName,
                lastName,
                bloodGroup,
                dob,
                district,
                upazila,
              });

              user
                .save()
                .then((user) => {
                  res.status(201).json({
                    massage: "created sucessfully",
                    user,
                  });
                })
                .catch((error) => resourceError(res, "server error occured!"));
            });
          }
        })
        .catch((error) => {
          res.status(400).json({
            massage: error,
          });
        });
    }
  },

  signinUser: (req, res) => {
    let { phone, password } = req.body;
    let validate = signinValidator({
      phone,
      password,
    });
    if (!validate.isValid) {
      res.status(404).json(validate.error);
    } else {
      User.findOne({ phone })
        .then((user) => {
          if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
              if (err) {
                res.json({
                  massage: "error occourd",
                });
              } else if (result) {
                let payload = {
                  phone: user.phone,
                  id: user._Id,
                };
                let token = jwt.sign(payload, "PRIVATEKEY", {
                  expiresIn: "7d",
                });

                res.json({
                  massage: "login successfully!",
                  token,
                });
              } else {
                res.json({
                  massage: "don't match your phone number or password!",
                });
              }
            });
          } else {
            res.json({
              massage: "don't match your phone number or password",
            });
          }
        })
        .catch((error) => serverError(res, error));
    }
  },

  getAllUser: (req, res) => {
    User.find()
      .then((user) => {
        res.json({
          user,
        });
      })
      .catch((error) => {
        console.log("error");
      });
  },

  getUser: (req, res) => {
    let userId = req.params.userId;
    console.log(`url parms = ${userId}`);
    User.findById(userId)
      .then((user) => {
        //Find Age
        let today = new Date();
        let birthDate = new Date(user.dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();
        if (
          month < 0 ||
          (month === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        //get data
        res.json({
          massage: "user get successful!",
          ...user._doc,
          age,
        });
      })
      .catch((error) => {
        res.status(400).json({
          massage: "error",
        });
      });
  },

  updateUser: (req, res) => {
    let userId = req.params.userId;
    let updateData = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: req.body.dob,
      district: req.body.district,
      upazila: req.body.upazila,
    };
    console.log(userId);
    User.findByIdAndUpdate(userId, { $set: updateData })
      .then((user) => {
        res.json({
          massage: "user update successful!",
          user,
        });
      })
      .catch((error) => {
        res.status(400).json({
          massage: "error",
        });
      });
  },

  deleteUser: (req, res) => {
    let userId = req.params.userId;
    console.log(userId);
    User.findByIdAndDelete(userId)
      .then((user) => {
        res.json({
          massage: "user delete successful!",
          user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
>>>>>>> 931daff (BDMS Update)
