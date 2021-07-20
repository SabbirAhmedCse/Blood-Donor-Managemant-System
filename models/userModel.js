<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const mongoose = require("mongoose");
>>>>>>> 931daff (BDMS Update)

const userSchema = mongoose.Schema;

const User = new userSchema({
<<<<<<< HEAD
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    bloodGroup: {
        type: String,
        required: true
    },
    address: {
        distric: String,
        upozila: String
    },
    links: {
        facebook: String,
        twiter: String,
        linkdin: String
    },
    description: {
        type: String
    }
});

const user = mongoose.model('user', User);

module.exports = user;
=======
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  district: {
    type: String,
  },
  upazila: {
    type: String,
  },
  facebook: {
    type: String,
  },
  description: {
    type: String,
  },
});

const user = mongoose.model("user", User);

module.exports = user;
>>>>>>> 931daff (BDMS Update)
