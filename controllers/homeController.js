"use strict";

exports.showClients = (req, res) => {
    res.render("clients")
}

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.showCourses = (req, res) => {
    res.render("courses")
}

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
}

exports.showLocation = (req, res) => {
    res.render("location");
}

exports.showTrainers = (req, res) => {
    res.render("trainers")
}