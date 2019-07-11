const machineStatus  = require('../enum/machineStatus'),
util = require('../util/utilFunctions'),
actions = require('../model/actions'),
screens =  require('../screen');

var  machine = function(machineId) {
    let _machineId = machineId,
    _currentStatus = machineStatus.OFFLINE,
    _machineLogs  = [];

    var  _logAction = function(action,message){
        const _parent = "MACHINE";
        new actions(_parent,action,message).log(_machineLogs);
    };

    var _loadScreen =  function(callback){
        if(callback)
          callback(screens.HOMEPAGE);
    }

    return {
        getStatus : () => { return  this._currentStatus; },
        getMachineId : () => { return _machineId; },
        printLog: () => { console.log(_machineLogs); },
        shutDown:  (message) => { 
            this._currentStatus = machineStatus.OFFLINE; 
            _logAction("MACHINE SHUTDOWN", message);
        },
        start :  (callback) => { 
            this._currentStatus =  machineStatus.ONLINE;
            _loadScreen(callback);
            _logAction("MACHINE START","MACHINE START");
        },
        restart: (message)  => {   
            this.shutDown(message); 
            this.start();
        }
    }

}

module.exports  = new machine(util.generate(10));