var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {z
    exec(success, error, 'CordovaCustomPlugin', 'coolMethod', [arg0]);
};
