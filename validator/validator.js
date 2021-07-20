<<<<<<< HEAD

module.exports = {
    signupValidator : user =>{

        let error = {}
    
        const emailFormatter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
    
        if(!user.email){
            error.email = 'Provide Your Email!'
        }else if(!user.email.match(emailFormatter)) {
            error.email = 'Provide Your valid Email!'
        }
    
        if(!user.password){
            error.password = 'Provide Your Password!'
        }

        if(!user.password){
            error.confirmPassword = 'Provide Your confirm Password!'
        } else if (user.password !== user.confirmPassword) {
            error.confirmPassword = 'don\'t match your password'
        }
        
        if(!user.firstName){
            error.firstName = 'Provide Your first name!'
        }
        
        if(!user.lastName){
            error.lastName = 'Provide Your last name!'
        }
        
        if(!user.bloodGroup){
            error.bloodGroup = 'Provide Your blood group!'
        }
        
        
    
        return {
            error,
            isValid: Object.keys(error).length === 0
        }
    
    },

    signinValidator : user =>{

        let error = {}
    
        const emailFormatter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
    
        if(!user.email){
            error.email = 'Provide Your Email!'
        }else if(!user.email.match(emailFormatter)) {
            error.email = 'Provide Your valid Email!'
        }
    
        if(!user.password){
            error.password = 'Provide Your Password!'
        }
        
        
        return {
            error,
            isValid: Object.keys(error).length === 0
        }
    
    }
}
=======
const emailFormatter =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const mobileNumberFormatter = /^(?:\+88|01)?(?:\d{11}|\d{13})$/i;
module.exports = {
  signupValidator: (user) => {
    let error = {};

    //const emailFormatter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // if (!user.email) {
    //   error.email = "Provide Your Email!";
    // } else if (!user.email.match(emailFormatter)) {
    //   error.email = "Provide Your valid Email!";
    // }

    if (!user.phone) {
      error.phone = "Provide Your Phone Number!";
    } else if (!user.phone.match(mobileNumberFormatter)) {
      error.phone = "Provide Your valid Phone Number!";
    }

    if (!user.password) {
      error.password = "Provide Your Password!";
    }

    if (!user.password) {
      error.confirmPassword = "Provide Your confirm Password!";
    } else if (user.password !== user.confirmPassword) {
      error.confirmPassword = "don't match your password";
    }

    if (!user.firstName) {
      error.firstName = "Provide Your first name!";
    }

    if (!user.lastName) {
      error.lastName = "Provide Your last name!";
    }

    if (!user.bloodGroup) {
      error.bloodGroup = "Provide Your blood group!";
    }

    if (!user.dob) {
      error.dob = "Provide Your Date of Birth!";
    }
    if (!user.district) {
      error.district = "Provide Your District!";
    }
    if (!user.upazila) {
      error.upazila = "Provide Your Upazila!";
    }

    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  },

  signinValidator: (user) => {
    let error = {};

    if (!user.phone) {
      error.phone = "Provide Your phone!";
    } else if (!user.phone.match(mobileNumberFormatter)) {
      error.phone = "Provide Your valid Phone Number!";
    }

    if (!user.password) {
      error.password = "Provide Your Password!";
    }

    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  },
};
>>>>>>> 931daff (BDMS Update)
