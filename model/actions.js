const  util = require('../util/utilFunctions');

var actions  =  function(parent,action,message ='') {
    let _actionParent  =  parent,
        _actions = action,
        _message = message;
    
    return {
        log: (array) => {
              array.push({
                actionParent : _actionParent,
                actions : _actions,
                message : _message,
                timeStamp:  util.CurrentDateTime(),
              });
        }
    }

}

module.exports =  actions;