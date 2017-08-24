

let effect = ()=>{

     
}
$(document).ready(function(){

    new WOW().init();
   


         setInterval(()=>{
       $('#skills').animate({fontSize: '1em'}, "slow");
        
        setTimeout(()=>{
                    $('#skills').animate({fontSize: '3em'}, "slow");
                },2000)
       },5000)     
  
})

