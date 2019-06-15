'use strict';
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports.handler = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.query.id)) {
        mongoose.connect("mongodb+srv://jeymel97:facil123@cluster0-da2rh.mongodb.net/soa?retryWrites=true&w=majority"
            , { useNewUrlParser: true });
        await mongoose.connection.once("open", () => {
            console.log("Conected to database");
        });
        const user = await User.findByIdAndUpdate({_id:req.query.id},req.body)
        context.res = {
            body: user
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};