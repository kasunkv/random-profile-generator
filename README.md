# Random Profile Generator
[![NPM](https://nodei.co/npm/random-profile-generator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/random-profile-generator/)

[![Travis](https://img.shields.io/travis/kasunkv/random-profile-generator.svg)](https://travis-ci.org/kasunkv/random-profile-generator)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b17825fea7e5493e89e69cb6df485c54)](https://www.codacy.com/app/kvkrusl/random-profile-generator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kasunkv/random-profile-generator&amp;utm_campaign=Badge_Grade)
[![Codecov](https://img.shields.io/codecov/c/github/kasunkv/random-profile-generator.svg)](https://codecov.io/gh/kasunkv/random-profile-generator)
[![npm](https://img.shields.io/npm/v/random-profile-generator.svg)](https://www.npmjs.com/package/random-profile-generator)
[![npm](https://img.shields.io/npm/l/random-profile-generator.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/random-profile-generator.svg)](https://www.npmjs.com/package/random-profile-generator)
[![npm](https://img.shields.io/npm/dt/random-profile-generator.svg)](https://www.npmjs.com/package/random-profile-generator)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Generates a random user profile with all the common user profile items such as name, address, profile image etc. 
You can generate a complete profile or a generate individual profile properties such as name or address.

## Install

Install the package using `npm`
```
npm install random-profile-generator
```

this will install the package to your `node_modules` folder

## Usage

After installing import the package in to your javascript code.

```js
var randomProfile = require('random-profile-generator');
```

# API Documentation

### profile()
Returns a randomly generated user profile with `fullName`, `firstName`, `lastName`, `birthday`, `age`, `avatar`, `address`, `phone`, `email` and `twitter` as properties of the profile object.
Example usage is bellow.

```js
var profile = randomProfile.profile();
console.log(profile);

// Output
/*
{ 
    fullName: 'Della Edwards',
    firstName: 'Della',
    lastName: 'Edwards',
    birthday: 'Mar 24th, 1959',
    age: 57,
    avatar: 'https://api.adorable.io/avatars/200/Della-Edwards',
    address: '49 Foxrun St., Manchester Township, NJ 08759',
    phone: '(876) 547-1223',
    email: 'cedi@to.cc',
    twitter: '@wunwegda'
}
*/
```

### name()
Returns a random name with first name and last name.

```js
var name = randomProfile.name();
console.log(name);

// Output
// => Michael Ruiz
```


### address()
Returns a random address with street, city, State and Zip Code

```js
var address = randomProfile.address();
console.log(address);

// Output
// => 87 North Constitution Circle, Rochester, NY 14606
```


### birthday()
Returns a random birthday in the `MMM Do[,] YYYY` format.

```js
var birthday = randomProfile.birthday();
console.log(birthday);

// Output
// => Mar 12th, 1991
```


### age()
Returns a random age.

```js
var age = randomProfile.age();
console.log(age);

// Output
// => 25
```


### avatar()
Returns a random avatar url generated from adorable.io API with a 200 x 200px size.

```js
var avatar = randomProfile.avatar();
console.log(avatar);

// Output
// => https://api.adorable.io/avatars/200/Wendy-Conner
```


### phone()
Returns a random phone number with US Phone Number Format.

```js
var phone = randomProfile.phone();
console.log(phone);

// Output
// => (717) 238-3496
```


### email()
Returns a random syntactically valid email address.

```js
var email = randomProfile.email();
console.log(email);

// Output
// => cin@unepwa.cx
```


### ssn()
Returns a random SSN.

```js
var ssn = randomProfile.ssn();
console.log(ssn);

// Output
// => 411-90-0070
```


### twitter()
Returns a random twitter handle.

```js
var twitterHandle = randomProfile.twitter();
console.log(twitterHandle);

// Output
// => @hanaha
```


# Contributing
All contributions from the GitHub community are welcome.

* Fork the repository
* Create a feature branch: `git checkout -b new-feature`
* Commit your changes: `npm run commit` (Uses Commitizen Conventional Changelog for commits)
* Push to the branch: `git push origin new-feature`
* Submit a Pull Request


## Installing Dependencies

```sh
# install dependencies listed in package.json
$ npm install
```

## Run Unit Tests Locally

```sh
# Run mocha tests with -w flag
$ npm run test:local
```

## Code Coverage

[Istanbul](https://istanbul.js.org/) is used for code coverage analisys. [nyc](https://github.com/istanbuljs/nyc) command-line client is used to support ES6 with babel as the transpiler.
To run unit tests with code coverage report, use the following command.

```sh
# Unit tests with code coverage
$ npm run cover
```

## Code Quality

[Codacy](https://www.codacy.com) is configured on Github for code quality analisys.

## Git Commit Guidelines

A strict commit guidelines are followed so that its easy to do release with semantic versioning. [Semantic Release](https://github.com/semantic-release/semantic-release) package is used to do this. [Commitizen](https://www.npmjs.com/package/commitizen) is used with [Commitizen Conventional Changelog](https://www.npmjs.com/package/cz-conventional-changelog) to add proper commit messages. Git hooks  created using [ghooks](https://www.npmjs.com/package/ghooks) are inplace to enforce the commit format used in the project.
Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject. The commit message format is bellow.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Header is mandatory and the scope is optional, But its encouraged to add a scope. Footer is also optional.
To perform a commit follow these steps

```sh
# Add the files you want to commit
$ git add <FILES_TO_COMMIT>

# Use the configured ghook
$ npm run commit
```


# Credits
Random Profile Generator uses some 3rd party packages and APIs for its development. Credit goes to their creators & contributors.

* [Adorable.io]() - Adorable.io API is used to generate the avatar image included in the generated profile.
* [Chancejs](http://chancejs.com/) - Chance is used to generate some of the values found in the generated profile.
* [MomentJs](http://momentjs.com/) - MomentJs is used for some date conversions used in the generated profile.
* [Random Name Generator](http://www.random-name-generator.info/) - Used to generate the random names used in the project.
* [Random Lists](https://www.randomlists.com) - Used to generate the US addresses used in the project.


# License
MIT © [Kasun Kodagoda](http://kasunkodagoda.k2vsoftware.com)