// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Portfolio_model = require('../models/portfolio_modelSchema');

// CRUD operations for portfolio_model
// Create Controller 
const createPortfolio_model = async (req, res) => { 
    const { userId, balance, portfolio } = req.body;
    try {
        const portfolio_model = await Portfolio_model.create({ userId, balance, portfolio }) 
        await portfolio_model.save();
        res.status(201).json(portfolio_model);
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
const updatePortfolio_model = async (req, res) => { 
    const _id=req.params.id;
    const { userId, balance, portfolio } = req.body;
    try {
        const portfolio_model = await Portfolio_model.findByIdAndUpdate( _id, { userId, balance, portfolio },{new:true}) 
        if (!portfolio_model) {
            return res.status(404).send('portfolio_model not found');
        }
        await portfolio_model.save();
        res.status(201).json(portfolio_model);
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
const deletePortfolio_model = async (req, res) => { 
    const _id=req.params.id;
    try {
        const portfolio_model = await Portfolio_model.findById(_id)
        if (!portfolio_model) {
            return res.status(404).send('portfolio_model not found');
        }
        await Portfolio_model.deleteOne({_id: _id})
        await portfolio_model.save();
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
const getPortfolio_model = async (req, res) => { 
    const _id=req.params.id;
    try {
        const portfolio_model = await Portfolio_model.findById(_id)
        if (!portfolio_model) {
            return res.status(404).send('portfolio_model not found');
        }
        res.status(201).json(portfolio_model);
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
const getAllPortfolio_model = async (req, res) => { 
    try {
        const portfolio_model = await Portfolio_model.find({})
        if (!portfolio_model) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(portfolio_model);
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
    createPortfolio_model,
    updatePortfolio_model,
    deletePortfolio_model,
    getPortfolio_model,
    getAllPortfolio_model
}