"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const job = new cron_1.CronJob('* * * * * *', () => {
    console.log('Tik');
}, null, true, 'Asia/Kolkata');
job.start();
