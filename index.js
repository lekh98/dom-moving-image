var elem = document.querySelectorAll(".elem");

elem.forEach(function(element){
    console.log(element.childNodes[2])
   element.addEventListener("mouseenter",function(){
    element.childNodes[2].style.opacity =1

   });
   element.addEventListener("mouseleave",function(){
    element.childNodes[2].style.opacity =0
  });
  element.addEventListener("mousemove",function(details){
    element.childNodes[2].style.left= details.x +"px"
    element.childNodes[2].style.top= details.y +"px"
  })
});

//elem.forEach(function(){
    //element.addEventListener("mouseenter",function(){
        
       
       // element.childNodes[3].style.backgroundColor ="red"
   // });
   /* val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity =0;
    });
    val.addEventListener("mousemove",function(details){
        val.childNodes[3].style.left = details.x +"px";
        val.childNodes[3].style.top = details.y +"px";
    });*/

//});