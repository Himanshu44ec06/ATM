const machineStatus  = require('../enum/machineStatus'); 
const  util = require('../util/utilFunctions');
const   actions = require('../model/actions');

var  machine = function(machineId) {
    let _machineId = machineId,
    _currentStatus = machineStatus.OFFLINE,
    _machineLogs  = [];

    var  _logAction = function(action,message){
        const _parent = "MACHINE";
        new actions(_parent,action,message).log(_machineLogs);
        console.log(_machineLogs);
    };

    var  _initMachine = function() {
        // Show First Screen here
    }

    return {
        getStatus : () => { return  this._currentStatus; },
        getMachineId : () => { return _machineId; },
        printLog: () => { console.log(_machineLogs); },
        shutDown:  (message) => { 
            this._currentStatus = machineStatus.OFFLINE; 
            _logAction("MACHINE SHUTDOWN", message);
        },
        start :  () => { 
            this._currentStatus =  machineStatus.ONLINE;
            _initMachine();
            _logAction("MACHINE START","MACHINE START");
        },
        restart: (message)  => {   
            this.shutDown(message); 
            this.start();
        }

    }

}

module.exports  = new machine(util.generate(10));