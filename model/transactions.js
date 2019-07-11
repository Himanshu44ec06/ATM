const transactionStatus = require('../enum/transactionStatus');
var actions  = require('../model/actions');
var  Util  = require('../util/utilFunctions');


var transactions = function() {

    // Setting transaction Id (unique)
    let _transactionId = Util.generate(), 
    _transactionStatus = transactionStatus.START,
    _startTime =  Util.CurrentDateTime(),
    _endTime =  null,
    _logs  = [];


    var  logAction = function(action,message){
        const _parent =  "TRANSACTIONS";
        new actions(_parent,action,message).log(this._logs);
    };

    var  endTransaction  = function() {
        this._endTime = Util.CurrentDateTime();
    };

     return  {
            cancel : (message) => {
                this._transactionStatus  =  transactionStatus.CANCEL;
                this.endTransaction();
                this.logAction("TRANSACTION CANCEL",message);
            },
            finish :() => {
                this._transactionStatus  = transactionStatus.FINISH;
                this.endTransaction();
                this.logAction("TRANSACTION FINISH","TRNASACTION COMPLETE");
            },
            getTransaction: () => {
                return  {
                    Transaction: this._transactionId,
                    TransactionStatus: this._transactionStatus,
                    TransactionStartTime: this._startTime,
                    TransactionEndTime: this._endTime,
                    TransactionLog:  this._logs
                };
            },
            startTransaction: (message) => {
                this._transactionStatus  = transactionStatus.INPROGRESS;
                this.logAction("TRANSACTION INPROGRESS",message);
            }

     }

}

module.exports  =  transactions;