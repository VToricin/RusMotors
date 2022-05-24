let tmzButton = document.querySelector('.sectionYaMZ');
let sectionYaMZ = document.querySelector('.sectionYaMZ');
let sectionTMZ = document.querySelector('.sectionTMZ');
let deltaSwiper = sectionYaMZ.getBoundingClientRect().top;
let sectionYaMZTopCoords = sectionYaMZ.getBoundingClientRect().top+window.pageYOffset;
let sectionTMZTopCoords = sectionTMZ.getBoundingClientRect().top+window.pageYOffset;
let animtrigger = false;
let currentY = 0;
function scrollBottomFunc (){
   if(window.pageYOffset<innerHeight){ 
       if(animtrigger){
            animtrigger = false;
            
            window.scrollTo({
                 top:innerHeight
                 
            });
       };    
    }else if(window.pageYOffset>innerHeight+60&&window.pageYOffset<2*innerHeight){
            animtrigger = false;
                
            window.scrollTo({
                top:innerHeight*2
            });
    };
       animtrigger = true;
    }


function scrollTopFunc (){
    if(window.pageYOffset<sectionTMZTopCoords){ 
        if(animtrigger){
            animtrigger = false;
             
             window.scrollTo({
                  top:0
             });
             
        }
        animtrigger = true;
     }
 }

window.addEventListener('scroll', function(){
    if(window.pageYOffset>currentY){
        
        scrollBottomFunc();
        currentY = window.pageYOffset;
        
    }else if(window.pageYOffset<currentY){
        
        scrollTopFunc();
        currentY = window.pageYOffset;
        
    }
})