var  localStorage =  function() {
    
    return {
        get  : (key)  => { 
            return localStorage.getItem(key);
        },
        set  : (key,value) => {
            let strValue = JSON.stringify(value);
            localStorage.setItem(key,strValue);
        }
    }

}

module.exports  = localStorage;