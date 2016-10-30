import Chance from 'chance';
import moment from 'moment';
import uniqueRandomArray from 'unique-random-array';
import allNames from '../data/names.json';
import allAddresses from '../data/addresses.json';  
import allMaleNames from '../data/maleNames.json';
import allFemaleNames from '../data/femaleNames.json';

let chance = new Chance();
const avatarBase = 'https://api.adorable.io/avatars/200/';

function name(gender) {
    let name = uniqueRandomArray(allNames)();
    if (!gender) {
        return name;
    } else if (gender.toUpperCase() === 'MALE') {
        name = uniqueRandomArray(allMaleNames)();
    } else if (gender.toUpperCase() === 'FEMALE') {
        name = uniqueRandomArray(allFemaleNames)();
    }
    return name;
}

function address() {
    return uniqueRandomArray(allAddresses)();
}

function profile(gender) {
    let profile = {};
    let fullName = name(gender);
    let profileGender = chance.gender();
    let bDay = moment(chance.birthday());
    let today = moment(new Date()); 
    
    if (!gender) {
        profileGender = chance.gender();
    } else if (gender.toUpperCase() === 'MALE') {
        profileGender = 'Male';
    } else if (gender.toUpperCase() === 'FEMALE') {
        profileGender = 'Female';
    }

    profile.fullName = fullName;
    profile.firstName = fullName.split(' ')[0];
    profile.lastName = fullName.split(' ')[1];
    profile.gender = profileGender;
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

function gender() {
    return chance.gender();
}

module.exports = {
    profile,
    name,
    gender,
    address,
    birthday,
    age,
    avatar,
    phone,
    email,
    twitter,
    ssn
};