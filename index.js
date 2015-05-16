(function(){
    'use strict';

    module.exports = function(gulp, src, dest){

        var utils = require('./utils/utils')(gulp);
        var tasks = require('./utils/tasks')(gulp, src, dest);
        return {
            utils: utils,
            tasks: tasks
        };
    };

}());
