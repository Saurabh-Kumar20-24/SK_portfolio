const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
    let x= e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});


// code for the smooth scroll of the window

var navMenuAnchorTag = document.querySelectorAll('.nav_menu a');

for(var i=0;i<navMenuAnchorTag.length;i++)
{
    navMenuAnchorTag[i].addEventListener('click',function(event){
            event.preventDefault();
            var targetSectionId = this.textContent.trim().toLowerCase();
            var targetSection = document.getElementById(targetSectionId);
            console.log(targetSection);

            
           
            var windowScroll = setInterval(function(){
                var coordinates= targetSection.getBoundingClientRect();
                if(coordinates.top<=0){
                    window.clearInterval(windowScroll);
                    return;
                }
                window.scrollBy(0,50);
            },50);
    })
}