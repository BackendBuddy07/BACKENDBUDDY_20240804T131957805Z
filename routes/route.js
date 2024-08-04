const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// portfolio_model routes
const { createPortfolio_model, updatePortfolio_model, deletePortfolio_model, getPortfolio_model, getAllPortfolio_model } = require('../controllers/portfolio_model');
// 
router.post("/portfolio_model/create", checkAuthorizationHeaders,authorizeUser("createportfolio_model") ,createPortfolio_model);
router.put("/portfolio_model/update/:id", checkAuthorizationHeaders,authorizeUser("updateportfolio_model"), updatePortfolio_model);
router.delete("/portfolio_model/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteportfolio_model"), deletePortfolio_model);
router.get("/portfolio_model/get/:id", checkAuthorizationHeaders, authorizeUser("readportfolio_model"), getPortfolio_model);
router.get("/portfolio_model/getAll", checkAuthorizationHeaders, authorizeUser("readportfolio_model"), getAllPortfolio_model);

    
// user_model routes
const { createUser_model, updateUser_model, deleteUser_model, getUser_model, getAllUser_model } = require('../controllers/user_model');
// 
router.post("/user_model/create", checkAuthorizationHeaders,authorizeUser("createuser_model") ,createUser_model);
router.put("/user_model/update/:id", checkAuthorizationHeaders,authorizeUser("updateuser_model"), updateUser_model);
router.delete("/user_model/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteuser_model"), deleteUser_model);
router.get("/user_model/get/:id", checkAuthorizationHeaders, authorizeUser("readuser_model"), getUser_model);
router.get("/user_model/getAll", checkAuthorizationHeaders, authorizeUser("readuser_model"), getAllUser_model);

  
module.exports = router;
