let  pressStart = document.getElementById("pressStart");

pressStart.addEventListener('click',function(event){
     
    

    //Common practice to avoid any event  bubbling
    event.stopPropagation();
})
