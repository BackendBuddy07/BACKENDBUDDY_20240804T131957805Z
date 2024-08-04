// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const User_model = require('../models/user_modelSchema');

// CRUD operations for user_model
// Create Controller 
const createUser_model = async (req, res) => { 
    const { userName, email, password, portfolio } = req.body;
    try {
        const user_model = await User_model.create({ userName, email, password, portfolio }) 
        await user_model.save();
        res.status(201).json(user_model);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateUser_model = async (req, res) => { 
    const _id=req.params.id;
    const { userName, email, password, portfolio } = req.body;
    try {
        const user_model = await User_model.findByIdAndUpdate( _id, { userName, email, password, portfolio },{new:true}) 
        if (!user_model) {
            return res.status(404).send('user_model not found');
        }
        await user_model.save();
        res.status(201).json(user_model);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteUser_model = async (req, res) => { 
    const _id=req.params.id;
    try {
        const user_model = await User_model.findById(_id)
        if (!user_model) {
            return res.status(404).send('user_model not found');
        }
        await User_model.deleteOne({_id: _id})
        await user_model.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getUser_model = async (req, res) => { 
    const _id=req.params.id;
    try {
        const user_model = await User_model.findById(_id)
        if (!user_model) {
            return res.status(404).send('user_model not found');
        }
        res.status(201).json(user_model);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllUser_model = async (req, res) => { 
    try {
        const user_model = await User_model.find({})
        if (!user_model) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(user_model);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createUser_model,
    updateUser_model,
    deleteUser_model,
    getUser_model,
    getAllUser_model
}