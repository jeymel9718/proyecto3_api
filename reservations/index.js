'use strict';
const mongoose = require("mongoose");
const Reservation = require("../models/reservation");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body) {
        mongoose.connect("mongodb+srv://jeymel97:facil123@cluster0-da2rh.mongodb.net/soa?retryWrites=true&w=majority"
            , { useNewUrlParser: true });
        await mongoose.connection.once("open", () => {
            console.log("Conected to database");
        });
        const user = await Reservation.create({
            id:req.id,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut,
            rooms: req.body.rooms,
            roomType: req.body.roomType,
            checkIn: req.body.checkIn,
            comments: req.body.comments
        })
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