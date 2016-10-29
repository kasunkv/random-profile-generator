var expect = require('chai').expect;
var randomProfiles = require('../src/index');

var allNames = require('../src/names.json');
var allAddresses = require('../src/addresses.json');

describe('Random Profile Generator', function () {
    describe('Calling `profile`', function () {
        it('Should be a function', function () {
            expect(randomProfiles.profile).to.be.a('function'); 
        });

        it('Should return an object', function () {
            expect(randomProfiles.profile()).to.be.a('object');
        });  

        it('Should contain `fullName` property, it should a string', function () {
            expect(randomProfiles.profile()).to.have.property('fullName');
            expect(randomProfiles.profile().fullName).to.be.a('string');
        });

        it('Should contain `firstName` property, it should a string', function () {
            expect(randomProfiles.profile()).to.have.property('firstName');
            expect(randomProfiles.profile().firstName).to.be.a('string');
        });

        it('Should contain `lastName` property, it should a string', function () {
            expect(randomProfiles.profile()).to.have.property('lastName');
            expect(randomProfiles.profile().lastName).to.be.a('string');
        });

        it('Should contain `birthday` property, it should be a string', function () {
            expect(randomProfiles.profile()).to.have.property('birthday');
            expect(randomProfiles.profile().birthday).to.be.a('string');
        });

        it('Should contain `age` property, it should be a number', function () {
            expect(randomProfiles.profile()).to.have.property('age');
            expect(randomProfiles.profile().age).to.be.a('number');
        });

        it('Should contain `avatar` property, it should be a string and a valid url', function () {
            expect(randomProfiles.profile()).to.have.property('avatar');
            expect(randomProfiles.profile().avatar).to.be.a('string');
            expect(randomProfiles.profile().avatar).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
        });

        it('Should contain `address` property, it should a string', function () {
            expect(randomProfiles.profile()).to.have.property('address');
            expect(randomProfiles.profile().address).to.be.a('string');
        });

        it('Should contain `phone` property, it should a string and a valid US Phone number', function () {
            expect(randomProfiles.profile()).to.have.property('phone');
            expect(randomProfiles.profile().phone).to.be.a('string');
            expect(randomProfiles.profile().phone).to.match(/(\(\d{3}\) )?(\d{3}-){1,2}(\d{4})/);
        });
    });
    
    describe('Calling `randomName`', function () {
        it('Should be a function', function () {
            expect(randomProfiles.randomName).to.be.a('function'); 
        });

        it('Should return a string', function () {
            expect(randomProfiles.randomName()).to.be.a('string');
        });

        it('Should include in the names array', function () {
            expect(allNames).to.include(randomProfiles.randomName()); 
        });
    });

    describe('Calling `randomAddress', function () {
        it('Should be a function', function () {
            expect(randomProfiles.randomAddress).to.be.a('function'); 
        });

        it('Should return a string', function () {
            expect(randomProfiles.randomAddress()).to.be.a('string');
        });

        it('Should include in the names array', function () {
            expect(allAddresses).to.include(randomProfiles.randomAddress()); 
        });
    });

    describe('Calling `randomAge`', function () {
        it('Should be a function', function () {
            expect(randomProfiles.randomAge).to.be.a('function');
        });

        it('Should return a number', function () {
            expect(randomProfiles.randomAge()).to.be.a('number');
        });
    });

    describe('Calling `randomAvatar`', function () {
        it('Should be a function', function () {
            expect(randomProfiles.randomAvatar).to.be.a('function');
        });

        it('Should return a type string', function () {
            expect(randomProfiles.randomAvatar()).to.be.a('string');
        });

        it('Should return a string that is a valid url', function () {
            expect(randomProfiles.randomAvatar()).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
        });
    });

    describe('Calling `randomPhone`', function () {
        it('Should be a function', function () {
            expect(randomProfiles.randomPhone).to.be.a('function');
        });

        it('Should return a type string', function () {
            expect(randomProfiles.randomPhone()).to.be.a('string');
        });

        it('Should return a string that is a valid url', function () {
            expect(randomProfiles.randomPhone()).to.match(/(\(\d{3}\) )?(\d{3}-){1,2}(\d{4})/);
        });
    });

    describe('Calling `randomBirthday`', function () {
        it('Should be a function', function () {
            expect(randomProfiles.randomBirthday).to.be.a('function');
        });

        it('Should return a type string', function () {
            expect(randomProfiles.randomBirthday()).to.be.a('string');
        });

        it('Should return a string that is a valid date', function () {
            expect(randomProfiles.randomBirthday()).to.match(/[A-Z]{1}[a-z]{2} \d{1,2}[a-z]{2}, \d{4}/);
        });
    });    
});