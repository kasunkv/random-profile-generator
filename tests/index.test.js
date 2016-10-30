import { expect } from 'chai';
import randomProfiles from '../src/index';
import allNames from '../data/names.json';
import allAddresses from '../data/addresses.json';
import allFemaleNames from '../data/femaleNames.json';
import allMaleNames from '../data/maleNames.json';

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

        it('Should be from male names when argument is `male`', () => {
           expect(allMaleNames).to.include(randomProfiles.profile('male').fullName);
        });

        it('Should be from female names when argument is `female`', () => {
           expect(allFemaleNames).to.include(randomProfiles.profile('female').fullName);
        });

        it('Should be from female names when argument is invalid', () => {
           expect(allNames).to.include(randomProfiles.profile('invalid').fullName);
        });

        it('Should be from all names when argument is not provided', () => {
           expect(allNames).to.include(randomProfiles.profile().fullName);
        });

        it('Should contain `firstName` property, it should a string', () => {
            expect(randomProfiles.profile()).to.have.property('firstName');
            expect(randomProfiles.profile().firstName).to.be.a('string');
        });

        it('Should contain `lastName` property, it should a string', () => {
            expect(randomProfiles.profile()).to.have.property('lastName');
            expect(randomProfiles.profile().lastName).to.be.a('string');
        });

        it('Should contain `gender` property, it should a string', () => {
            expect(randomProfiles.profile()).to.have.property('gender');
            expect(randomProfiles.profile().gender).to.be.a('string');
        });

        it('Should be Male when argument is `male`', () => {
           expect(randomProfiles.profile('male').gender).to.eql('Male');
        });

        it('Should be Female when argument is `female`', () => {
           expect(randomProfiles.profile('female').gender).to.eql('Female');
        });

        it('Should be Male or Female when argument is not provided', () => {
           expect(randomProfiles.profile().gender).to.match(/^(Male|Female)$/);
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

        it('Should contain `zip` property, it should a string and a valid zip code', () => {
            expect(randomProfiles.profile()).to.have.property('zip');
            expect(randomProfiles.profile().zip).to.be.a('string');
            expect(randomProfiles.profile().zip).to.match(/^\d{5}(\-?\d{4})?$/);
        });

        it('Should contain the value of `zip` property, as part of the `address`', () => {
            let profile = randomProfiles.profile();
            expect(profile.address).to.include(profile.zip);
        });

        it('Should contain `state` property, it should a string and be a valid state', () => {
            expect(randomProfiles.profile()).to.have.property('state');
            expect(randomProfiles.profile().state).to.be.a('string');
            expect(randomProfiles.profile().state).to.match(/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/);
        });

        it('Should contain the value of `state` property, as part of the `address`', () => {
            let profile = randomProfiles.profile();
            expect(profile.address).to.include(profile.state);
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
    
    describe('Calling `name`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.name).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(randomProfiles.name()).to.be.a('string');
        });

        it('Should include in the names array', () => {
            expect(allNames).to.include(randomProfiles.name()); 
        });

        it('Should include in the female names array when called with `female`', () => {
            expect(allFemaleNames).to.include(randomProfiles.name('female')); 
        });
        
        it('Should include in the male names array when called with `male`', () => {
            expect(allMaleNames).to.include(randomProfiles.name('male')); 
        });

        it('Should include in the names array when called with invalud arguments', () => {
            expect(allNames).to.include(randomProfiles.name('invalid')); 
        });

    });

    describe('Calling `gender`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.gender).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(randomProfiles.gender()).to.be.a('string');
        });

        it('Should be Male or Female', () => {
           expect(randomProfiles.gender()).to.match(/^(Male|Female)$/);
        });
    });

    describe('Calling `address', () => {
        it('Should be a function', () => {
            expect(randomProfiles.address).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(randomProfiles.address()).to.be.a('string');
        });

        it('Should include in the names array', () => {
            expect(allAddresses).to.include(randomProfiles.address()); 
        });
    });

    describe('Calling `state', () => {
        it('Should be a function', () => {
            expect(randomProfiles.state).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(randomProfiles.state()).to.be.a('string');
        });

        it('Should be a valid state code', () => {
            expect(randomProfiles.state()).to.match(/^((A[AEKLPRSZ])|(C[AOT])|(D[EC])|(F[LM])|(G[AU])|(HI)|(I[ADLN])|(K[SY])|(LA)|(M[ADEHINOST])|(N[CDEHJMVY])|(MP)|(O[HKR])|(P[ARW])|(RI)|(S[CD])|(T[NX])|(UT)|(V[AIT])|(W[AIVY]))$/);
        });
    });

    describe('Calling `zip', () => {
        it('Should be a function', () => {
            expect(randomProfiles.zip).to.be.a('function'); 
        });

        it('Should return a string', () => {
            expect(randomProfiles.zip()).to.be.a('string');
        });

        it('Should be a valid zip code', () => {
            expect(randomProfiles.zip()).to.match(/^\d{5}(\-?\d{4})?$/);
        });
    });

    describe('Calling `age`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.age).to.be.a('function');
        });

        it('Should return a number', () => {
            expect(randomProfiles.age()).to.be.a('number');
        });
    });

    describe('Calling `avatar`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.avatar).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.avatar()).to.be.a('string');
        });

        it('Should return a string that is a valid url', () => {
            expect(randomProfiles.avatar()).to.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
        });
    });

    describe('Calling `phone`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.phone).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.phone()).to.be.a('string');
        });

        it('Should return a string that is a valid url', () => {
            expect(randomProfiles.phone()).to.match(/(\(\d{3}\) )?(\d{3}-){1,2}(\d{4})/);
        });
    });

    describe('Calling `birthday`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.birthday).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.birthday()).to.be.a('string');
        });

        it('Should return a string that is a valid date', () => {
            expect(randomProfiles.birthday()).to.match(/[A-Z]{1}[a-z]{2} \d{1,2}[a-z]{2}, \d{4}/);
        });
    }); 
    
    describe('Calling `email`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.email).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.email()).to.be.a('string');
        });

        it('Should return a string that is a valid email', () => {
            expect(randomProfiles.email()).to.match(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/);
        });
    }); 

    describe('Calling `twitter`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.twitter).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.twitter()).to.be.a('string');
        });

        it('Should return a string that is a valid twitter handle', () => {
            expect(randomProfiles.twitter()).to.match(/([@][A-z]+)|([#][A-z]+)/);
        });
    });

    describe('Calling `ssn`', () => {
        it('Should be a function', () => {
            expect(randomProfiles.ssn).to.be.a('function');
        });

        it('Should return a type string', () => {
            expect(randomProfiles.ssn()).to.be.a('string');
        });

        it('Should return a string that is a valid twitter handle', () => {
            expect(randomProfiles.ssn()).to.match(/(\d{3}[-]\d{2}[-]\d{4})/);
        });
    }); 
});