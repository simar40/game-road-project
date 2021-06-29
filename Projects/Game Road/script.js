var navMenuAnchorTags = document.querySelectorAll("#right-navi ul li a");

for(var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetElementID = this.textContent.trim().toLowerCase();
        var targetElementContent = document.getElementById(targetElementID);
        var interval = setInterval(function(){
            var targetElementCoordinates = targetElementContent.getBoundingClientRect();
            if(targetElementCoordinates.top <= 300)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,200);
        },50);
    });
}
