var panoramas = document.getElementsByClassName("pano"); //an ARRAY of all the panos

function sniff(){ //finds size of window
    var windowheight = document.documentElement.clientHeight;
    document.getElementById("ruler").style.height = windowheight; //resizes "ruler" to full screen
}

setInterval(scoot, 83); //every 83 ms (12 fps) scoot the panoramas

function scoot(){ //scooting the panoramas to the next frame

    for (i=0; i < panoramas.length; i++){ //loop through the panoramas to scoot them all

        if( parseInt(panoramas[i].style.left) == -700){ // if the pano has scooted all the way to the end, restart at 0%
            
            panoramas[i].style.left = "0%";
        }else{
            
            panoramas[i].style.left = (parseInt( panoramas[i].style.left ) -100) + "%"; //scooting it back 100% each time
        }   
    }
}

let timeoutover = true; //timeout for the mouse mvmt so ur computer doesn't crash
function retimer(){
    timeoutover = true;
}

function sink(event){
    
    if (timeoutover == false){ 
        return
    }else{
        var y = event.clientY; //mouse postition

        timeoutover = false;
        setTimeout(retimer, 100);

        //////////

        var rulerheight = parseInt( document.getElementById("ruler").style.height ); //window height as number not pixels

        //compare mouse y to ruler height
        var percentdown = Math.round( (y / rulerheight) * 100 ); //percent of the way down the mouse is
        
        if ( percentdown < 33){

            for (i=0; i < panoramas.length; i++){
                panoramas[i].classList.replace("vis", "invis"); //hide all panos
            }
    
            panoramas[0].classList.replace("invis", "vis"); //show first one
    
        }else if ( percentdown < 66 ){
    
            for (i=0; i < panoramas.length; i++){
                panoramas[i].classList.replace("vis", "invis");
            }
    
            panoramas[1].classList.replace("invis", "vis"); 
    
        }else if ( percentdown < 100){
    
            for (i=0; i < panoramas.length; i++){
                panoramas[i].classList.replace("vis", "invis");
            }
    
            panoramas[2].classList.replace("invis", "vis"); 
        }        
    }
}