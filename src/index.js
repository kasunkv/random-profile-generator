(function () {
    'use strict';

    var Chance = require('chance');
    var moment = require('moment');
    var uniqueRandomArray = require('unique-random-array');
    var allNames = require('./names.json');
    var allAddresses = require('./addresses.json');  
    
    var chance = new Chance();
    var avatarBase = 'https://api.adorable.io/avatars/200/'

    function profile() {
        var profile = {};
        var fullName = uniqueRandomArray(allNames)();
        var bDay = moment(chance.birthday());
        var today = moment(new Date());

        profile.fullName = fullName;
        profile.firstName = fullName.split(" ")[0];
        profile.lastName = fullName.split(" ")[1];
        profile.birthday = bDay.format('MMM Do[,] YYYY');
        profile.age = today.diff(bDay, 'years');
        profile.avatar = avatarBase + fullName.replace(/ /g, '-');
        profile.address = uniqueRandomArray(allAddresses)();
        profile.phone = chance.phone();
        
        return profile;
    }

    function age() {
        return chance.age();
    }

    function birthday() {
        return moment(chance.birthday()).format('MMM Do[,] YYYY');
    }

    function avatar() {
        return avatarBase + uniqueRandomArray(allNames)().replace(/ /g, '-');
    }

    function phone() {
        return chance.phone();
    }

    module.exports = {
        profile: profile,
        randomName: uniqueRandomArray(allNames),
        randomAddress: uniqueRandomArray(allAddresses),
        randomBirthday: birthday,
        randomAge: age,
        randomAvatar: avatar,
        randomPhone: phone
    };
})();