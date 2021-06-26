const cron = require('cron');
const todayReport = require('./excel_report_today'); // require module xuất báo cáo
import cron from 'node-cron'

const job = new cron.CronJob({
  cronTime: '00 30 23 * * 0-6', // Chạy Jobs vào 23h30 hằng đêm
  onTick: function() {
    todayReport();
    console.log('Cron jub runing...');
  },
  start: true,
  timeZone: 'Asia/Ho_Chi_Minh' // Lưu ý set lại time zone cho đúng
});

job.start();