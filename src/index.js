import Chance from 'chance';
import moment from 'moment';
import uniqueRandomArray from 'unique-random-array';
import allNames from '../data/names.json';
import allAddresses from '../data/addresses.json';  

let chance = new Chance();
const avatarBase = 'https://api.adorable.io/avatars/200/';

function profile() {
    let profile = {};
    let fullName = uniqueRandomArray(allNames)();
    let bDay = moment(chance.birthday());
    let today = moment(new Date());

    profile.fullName = fullName;
    profile.firstName = fullName.split(' ')[0];
    profile.lastName = fullName.split(' ')[1];
    profile.birthday = bDay.format('MMM Do[,] YYYY');
    profile.age = today.diff(bDay, 'years');
    profile.avatar = avatarBase + fullName.replace(/ /g, '-');
    profile.address = uniqueRandomArray(allAddresses)();
    profile.phone = chance.phone();
    profile.email = chance.email();
    profile.twitter = chance.twitter();
    profile.ssn = chance.ssn();
    
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

function email() {
    return chance.email();
}

function twitter() {
    return chance.twitter();
}

function ssn() {
    return chance.ssn();
}

module.exports = {
    profile: profile,
    randomName: uniqueRandomArray(allNames),
    randomAddress: uniqueRandomArray(allAddresses),
    randomBirthday: birthday,
    randomAge: age,
    randomAvatar: avatar,
    randomPhone: phone,
    randomEmail: email,
    randomTwitter: twitter,
    randomSSN: ssn
};