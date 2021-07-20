<<<<<<< HEAD
const router = require('express').Router();
const authenticate = require('../middleware/authenticate')

const { signupUser, signinUser, getAllUser, getUser, updateUser, deleteUser } = require('../controllers/userController');

router.post('/signup', signupUser);

router.post('/signin', signinUser);

router.get('/', getAllUser );

router.get('/:userId', authenticate, getUser);

router.patch('/:userId', authenticate, updateUser);

router.delete('/:userId', authenticate, deleteUser);

module.exports = router;
=======
const router = require("express").Router();
const authenticate = require("../middleware/authenticate");

const {
  signupUser,
  signinUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/signup", signupUser);

router.post("/signin", signinUser);

router.get("/", getAllUser);

router.get("/:userId", getUser);

router.patch("/:userId", updateUser);

router.delete("/:userId", deleteUser);

module.exports = router;
>>>>>>> 931daff (BDMS Update)
