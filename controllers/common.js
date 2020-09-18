const mongoose = require('mongoose');
var db = require('../db-configs/db');
const signUp = require('../models/signedUp.model');
const register = require('../models/registered.model');
const adminDetail = require('../models/admin.model');
const trainerDetail = require('../models/trainer.model');
const faq = require('../models/faq.model');


var eAddr = "default123@gmail.com",
    pass = "123456";

// var t_Email = "default123@gmail.com",
//     t_Password = "123456";


let pageDataModule = {
    getPageData: () => {
        return new Promise((resolve, reject) => {
            signUp.findOne({ email: eAddr, password: pass }, (err, docs) => {
                if (err) reject(err);
                let pageData = {
                    name: 'meFito',
                    home: 'Home',
                    about: 'About',
                    course: 'Services',
                    courses: ['Gym', 'Aerobics', 'Yoga'],
                    courseLink: ['/gym', '/aerobics', '/yoga'],
                    contact: 'Contact Us',
                    faq: 'FAQs',
                    signin: 'Sign In or Sign Up',
                    signedName: docs.firstName + ' ' + docs.middleName + ' ' + docs.lastName,
                    signedAddress: eAddr,
                    signedPassword: pass,
                    signedUp: docs.isActive,
                    Registered: docs.hasRegistered,
                    footerData: '| Copyright © 2020 meFito.com All rights | reserved.'
                };
                resolve(pageData);
            });
        })
    },

    setPageData: (newAddr, newPass) => {
        eAddr = newAddr;
        pass = newPass;
        console.log(eAddr, pass);
    },

    getAdminData: () => {
        return new Promise((resolve, reject) => {
            adminDetail.findOne({ _id: Object("5f51c45e7688491e000bb68c") }, (err, docs) => {
                if (err) reject(err);
                let adminData = docs;
                resolve(adminData);
            });
        })
    },

    getSignUpList: () => {
        return new Promise((resolve, reject) => {
            signUp.find({}, (err, docs) => {
                if (err) reject(err);
                let signUpData = docs;
                resolve(signUpData);
            });
        })
    },

    getRegistrationList: () => {
        return new Promise((resolve, reject) => {
            register.find({}, (err, docs) => {
                if (err) reject(err);
                let registeredData = docs;
                resolve(registeredData);
            });
        })
    },

    getRegistrationDateList: () => {
        return new Promise((resolve, reject) => {
            var start = new Date("09/01/2020");
            var end = Date.now();
            // var regDates = [];
            // var regDetails = [];
            var data = [
                [],
                [],
                []
            ];
            var loop = new Date(start);
            while (loop <= end) {
                data[0].push(loop);
                var dates = `${loop.getDate()}/${loop.getMonth() + 1}/${loop.getFullYear()}`;
                // var dates = loop.getDate().toString() + "/" + loop.getMonth().toString() + "/" + loop.getFullYear().toString();
                data[1].push(dates);
                var newDate = loop.setDate(loop.getDate() + 1);
                loop = new Date(newDate);
            }

            for (const iterator in data[0]) {
                register.find({ dateOfJoing: data[0][iterator] }, (err, docs) => {
                    if (err) reject(err);
                    // console.log(docs.length);
                    // console.log(regDetails);
                    data[2].push(docs.length);
                    if (iterator == data[0].length - 1) {
                        resolve(data)
                    }
                });
            }
        })
    },

    getSignUpDateList: () => {
        return new Promise((resolve, reject) => {
            var start = new Date("09/01/2020");
            var end = Date.now();
            // var regDates = [];
            // var regDetails = [];
            var data = [
                [],
                [],
                []
            ];
            var loop = new Date(start);
            while (loop <= end) {
                data[0].push(loop);
                var dates = `${loop.getDate()}/${loop.getMonth() + 1}/${loop.getFullYear()}`;
                // var dates = loop.getDate().toString() + "/" + loop.getMonth().toString() + "/" + loop.getFullYear().toString();
                data[1].push(dates);
                var newDate = loop.setDate(loop.getDate() + 1);
                loop = new Date(newDate);
            }

            for (const iterator in data[0]) {
                signUp.find({ dateOfSignUp: data[0][iterator] }, (err, docs) => {
                    if (err) reject(err);
                    // console.log(docs.length);
                    // console.log(regDetails);
                    data[2].push(docs.length);
                    if (iterator == data[0].length - 1) {
                        resolve(data)
                    }
                });
            }
        })
    },

    getcourseList: () => {
        return new Promise((resolve, reject) => {
            var course = ['gym', 'aerobics', 'yoga'];
            var data = [];

            for (const iterator in course) {
                register.find({ course: course[iterator] }, (err, docs) => {
                    if (err) reject(err);
                    console.log(docs.length);
                    data.push(docs.length);
                    if (iterator == course.length - 1) {
                        resolve(data)
                    }
                });
            }
        })
    },


    getTrainerList: () => {
        return new Promise((resolve, reject) => {
            trainerDetail.find({}, (err, docs) => {
                if (err) reject(err);
                let trainerData = docs;
                resolve(trainerData);
            });
        })
    },

    getFAQs: () => {
        return new Promise((resolve, reject) => {
            faq.find({}, (err, docs) => {
                if (err) reject(err);
                let faqs = [];
                for (const iterator of docs) {
                    if (iterator.active == true)
                        faqs.push(iterator)
                }
                resolve(faqs);
                // console.log(docs);
            });
        })
    },
}


module.exports = pageDataModule;