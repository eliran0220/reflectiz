import { CronJob } from 'cron';
import axios from 'axios';


const job = new CronJob('0 0 1 * *', async () => {
    console.log('Sent request');
    const options = {
        method: 'GET',
        url: `http://host.docker.internal:3000/api/scan`
      };
      await axios(options);
}, null,true, 'Asia/Kolkata');
job.start();


