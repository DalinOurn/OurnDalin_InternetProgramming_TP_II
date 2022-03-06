(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a }
                var p = n[i] = { exports: {} };
                e[i][0].call(p.exports, function(r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
            "use strict";
            exports.__esModule = true;
            exports.KhmerDateTest = void 0;
            var KhmerDateTest = /** @class */ (function() {
                function KhmerDateTest() {
                    this.inputData = function(date) {
                        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        var now = new Date();
                        var inputDate = new Date(date);
                        console.log("\n");
                        console.log("<=== === === === === === >");
                        console.log("Today: " + weeks[now.getDay()] + " " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear());
                        console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds());
                        // data input form user

                        console.log("\nDate input: " + date);
                        console.log(weeks[inputDate.getDay()] + " " + inputDate.getDate() + " " +
                            months[inputDate.getMonth()] + " " + inputDate.getFullYear());
                        console.log(inputDate.getHours() + ":" + inputDate.getMinutes() + ":" + inputDate.getSeconds() + ":" + inputDate.getMilliseconds());
                        var value;
                        var daysMonth = 30;
                        var monthsYear = 12;
                        var text;
                        value = now.getTime() - inputDate.getTime();
                        if (value > 0) {
                            value = value / (1000 * 60 * 60 * 24);

                            // months
                            if (Math.floor(value / daysMonth / monthsYear) > 0) {
                                // console.log(Math.floor(value / daysMonth / monthsYear) + " years ago");
                                text = Math.floor(value / daysMonth / monthsYear) + " years ago";
                            } else if (Math.floor(value / daysMonth) > 0) {
                                //   console.log(Math.floor(value / daysMonth) + " months ago");
                                text = Math.floor(value / daysMonth) + " months ago";
                            } else if (Math.floor(value / daysMonth * 30) / 7 < 4 && Math.floor((value / daysMonth * 30) / 7) != 0) {
                                text = Math.floor((value / daysMonth * 30) / 7) + " weeks ago";
                                // console.log(Math.floor((value / daysMonth * 30) / 7) + " months ago");
                            }
                            // days
                            else if (Math.floor(value) > 0) {
                                text = Math.floor(value) + " days ago";
                                //console.log(text);
                            } else if (Math.floor(value * 24) * 24 > 0) {
                                text = Math.floor(value * 24) + " hours ago";
                                //console.log(text);
                            } else if (Math.floor(value * 24 * 60) > 0) {
                                text = Math.floor(value * 24 * 60) + " minutes ago";
                                //console.log(text);
                            } else if (Math.floor(value * 24 * 60 * 60) > 0) {
                                text = Math.floor(value * 24 * 60 * 60) + " seconds ago";
                                //console.log(text);
                            } else {
                                text = "Just a moment";
                                // console.log(text);
                            }
                            return text;
                        } else {
                            return "Invalid Input";
                        }
                    };
                }
                KhmerDateTest.prototype.getData = function() {
                    return "12:00";
                };
                return KhmerDateTest;
            }());
            exports.KhmerDateTest = KhmerDateTest;

        },
        {}
    ],
    2: [function(require, module, exports) {
            const { KhmerDateTest } = require('./lib');
            const khmerDate = new KhmerDateTest();

            var setStatus = document.getElementById("txt1");
            var getDate;
            var numberKhmer = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
            var khmerShow = document.getElementById("txt");

            document.getElementById('btnShow').onclick = onShow;
            //document.getElementById('btnShow').onclick = translateKhmer;

            function translateKhmer() {

            }



            function onShow() {

                getDate = document.getElementById("dataInputdate").value;
                //t.innerHTML += `<button id="btnShow${n}">Show Status${n}</button>`;
                // console.log(getDate);
                setStatus.innerHTML = khmerDate.inputData(new Date(getDate));

                //console.log(getDate);
                result = khmerDate.inputData(new Date(getDate)).replace("Just a moment", "មុននេះបន្តិច");
                for (let i = 0; i < result.length; i++) {
                    result = result.replace("0", "០");
                    result = result.replace("1", "១");
                    result = result.replace("2", "២");
                    result = result.replace("3", "៣");
                    result = result.replace("4", "៤");
                    result = result.replace("5", "៥");
                    result = result.replace("6", "៦");
                    result = result.replace("7", "៧");
                    result = result.replace("8", "៨");
                    result = result.replace("9", "៩");
                }

                result = result.replace("seconds ago", "វិនាទីមុន");
                result = result.replace("minutes ago", "នាទីមុន");
                result = result.replace("hours ago", "ម៉ោងមុន");

                result = result.replace("days ago", "ថ្ងៃមុន");
                result = result.replace("weeks ago", "សប្តាហ៍មុន");
                result = result.replace("months ago", "ខែមុន");
                result = result.replace("years ago", "ឆ្នាំមុន");

                result = result.replace("Invalid Input", "ការ​បញ្ចូល​មិន​ត្រឹមត្រូវ");
                khmerShow.innerHTML = result;
            }
        },

        { "./lib": 1 }
    ]
}, {}, [2]);