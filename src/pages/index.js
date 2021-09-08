"use strict";
exports.__esModule = true;
var _404_hbs_1 = require("./404/404.hbs");
var _500_hbs_1 = require("./500/500.hbs");
var chat_hbs_1 = require("./chat/chat.hbs");
var login_hbs_1 = require("./login/login.hbs");
var data_hbs_1 = require("./profile/edit/data.hbs");
var password_hbs_1 = require("./profile/edit/password.hbs");
var profile_hbs_1 = require("./profile/profile.hbs");
var registration_hbs_1 = require("./registration/registration.hbs");
exports["default"] = {
    _404: _404_hbs_1["default"],
    _500: _500_hbs_1["default"],
    chat: chat_hbs_1["default"],
    login: login_hbs_1["default"],
    profile: profile_hbs_1["default"],
    profileEditData: data_hbs_1["default"],
    profileEditPassword: password_hbs_1["default"],
    registration: registration_hbs_1["default"]
};
