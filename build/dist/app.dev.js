"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cron_1 = require("cron");

var job = new cron_1.CronJob('* * * * * *', function () {
  console.log('Tik');
}, null, true, 'Asia/Kolkata');
job.start();