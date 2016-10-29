import { expect } from 'chai';
import randomProfiles from '../src/index';
import allNames from '../data/names.json';
import allAddresses from '../data/addresses.json';

describe('Random Profile Generator', () => {
    describe('Calling `profile`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.profile).to.be.a('function'); 
        });

        it('Should return an object', () => {
            expect(randomProfiles.profile()).to.be.a('object');
        });  

        it('Should contain `fullName` property, it should a string', () => {
            expect(randomProfiles.profile()).to.have.property('fullName');
            expect(randomProfiles.profile().fullName).to.be.a('string');
        });

        it('Should contain `firstName` property, it should a string', () => {
            expect(randomProfiles.profile()).to.have.property('firstName');
            expect(randomProfiles.profile().firstName).to.be.a('string');
        });

        it('Should contain `lastName` property, it should a string', () => {
            expect(randomProfiles.profile()).to.have.property('lastName');
            expect(randomProfiles.profile().lastName).to.be.a('string');
        });

        it('Should contain `birthday` property, it should be a string', () => {
            expect(randomProfiles.profile()).to.have.property('birthday');
            expect(randomProfiles.profile().birthday).to.be.a('string');
        });

        it('Should contain `age` property, it should be a number', () => {
            expect(randomProfiles.profile()).to.have.property('age');
            expect(randomProfiles.profile().age).to.be.a('number');
        });

        it('Should contain `avatar` property, it should be a string and a valid url', () => {
            expect(randomProfiles.profile()).to.have.property('avatar');
            expect(randomProfiles.profile().avatar).to.be.a('string');
            expect(randomProfiles.profile().avatar).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
        });

        it('Should contain `address` property, it should a string', () => {
            expect(randomProfiles.profile()).to.have.property('address');
            expect(randomProfiles.profile().address).to.be.a('string');
        });

        it('Should contain `phone` property, it should a string and a valid US Phone number', () => {
            expect(randomProfiles.profile()).to.have.property('phone');
            expect(randomProfiles.profile().phone).to.be.a('string');
            expect(randomProfiles.profile().phone).to.match(/(\(\d{3}\) )?(\d{3}-){1,2}(\d{4})/);
        });

        it('Should contain `email` property, it should a string and a valid email address', () => {
            expect(randomProfiles.profile()).to.have.property('email');
            expect(randomProfiles.profile().email).to.be.a('string');
            expect(randomProfiles.profile().email).to.match(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/);
        });

        it('Should contain `twitter` property, it should a string and a valid twitter handle', () => {
            expect(randomProfiles.profile()).to.have.property('twitter');
            expect(randomProfiles.profile().twitter).to.be.a('string');
            expect(randomProfiles.profile().twitter).to.match(/([@][A-z]+)|([#][A-z]+)/);
        });

        it('Should contain `ssn` property, it should a string and a valid SSN', () => {
            expect(randomProfiles.profile()).to.have.property('ssn');
            expect(randomProfiles.profile().ssn).to.be.a('string');
            expect(randomProfiles.profile().ssn).to.match(/(\d{3}[-]\d{2}[-]\d{4})/);
        });
    });
    
    describe('Calling `randomName`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomName).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(randomProfiles.randomName()).to.be.a('string');
        });

        it('Should include in the names array', () => {
            expect(allNames).to.include(randomProfiles.randomName()); 
        });
    });

    describe('Calling `randomAddress', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomAddress).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(randomProfiles.randomAddress()).to.be.a('string');
        });

        it('Should include in the names array', () => {
            expect(allAddresses).to.include(randomProfiles.randomAddress()); 
        });
    });

    describe('Calling `randomAge`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomAge).to.be.a('function');
        });

        it('Should return a number', () => {
            expect(randomProfiles.randomAge()).to.be.a('number');
        });
    });

    describe('Calling `randomAvatar`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomAvatar).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.randomAvatar()).to.be.a('string');
        });

        it('Should return a string that is a valid url', () => {
            expect(randomProfiles.randomAvatar()).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
        });
    });

    describe('Calling `randomPhone`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomPhone).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.randomPhone()).to.be.a('string');
        });

        it('Should return a string that is a valid url', () => {
            expect(randomProfiles.randomPhone()).to.match(/(\(\d{3}\) )?(\d{3}-){1,2}(\d{4})/);
        });
    });

    describe('Calling `randomBirthday`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomBirthday).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.randomBirthday()).to.be.a('string');
        });

        it('Should return a string that is a valid date', () => {
            expect(randomProfiles.randomBirthday()).to.match(/[A-Z]{1}[a-z]{2} \d{1,2}[a-z]{2}, \d{4}/);
        });
    }); 
    
    describe('Calling `randomEmail`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomEmail).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.randomEmail()).to.be.a('string');
        });

        it('Should return a string that is a valid email', () => {
            expect(randomProfiles.randomEmail()).to.match(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/);
        });
    }); 

    describe('Calling `randomTwitter`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomTwitter).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.randomTwitter()).to.be.a('string');
        });

        it('Should return a string that is a valid twitter handle', () => {
            expect(randomProfiles.randomTwitter()).to.match(/([@][A-z]+)|([#][A-z]+)/);
        });
    });

    describe('Calling `randomSSN`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.randomSSN).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.randomSSN()).to.be.a('string');
        });

        it('Should return a string that is a valid twitter handle', () => {
            expect(randomProfiles.randomSSN()).to.match(/(\d{3}[-]\d{2}[-]\d{4})/);
        });
    }); 
});