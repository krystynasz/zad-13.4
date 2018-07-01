var os = require('os');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    //var uptime = os.uptime();
    var userInfo = os.userInfo();

    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU:', cpu);
    time.print();
    /*var hour = Math.floor(uptime / 3600);
    var minute = Math.floor((uptime - hour * 3600)/ 60);
    var second = Math.floor(uptime - (hour*3600) - (minute*60));
    console.log('Uptime: ~',uptime);
    console.log('Uptime: ~', hour, 'hours ', minute, 'min ', second, 'seconds ');*/
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;
