"use strict";
exports.__esModule = true;
var cron_1 = require("cron");
var job = new cron_1.CronJob('* * * * * *', function () {
    console.log('Tik');
}, null, true, 'Asia/Kolkata');
job.start();
