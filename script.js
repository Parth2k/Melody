console.log("hello");
// initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');   
let gif = document.getElementById('gif');   
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [ 
     {songname:"abc" ,filePath:"songs/1.mp3" , coverPath:"covers/10.jpg"},  
     {songname:"abc" ,filePath:"songs/2.mp3" , coverPath:"covers/9.jpg"},  
     {songname:"abc" ,filePath:"songs/3.mp3" , coverPath:"covers/8.jpg"},  
     {songname:"abc" ,filePath:"songs/4.mp3" , coverPath:"covers/7.jpg"},  
     {songname:"abc" ,filePath:"songs/5.mp3" , coverPath:"covers/6.jpg"},  
     {songname:"abc" ,filePath:"songs/6.mp3" , coverPath:"covers/5.jpg"},  
     {songname:"abc" ,filePath:"songs/7.mp3" , coverPath:"covers/4.jpg"},  
     {songname:"abc" ,filePath:"songs/8.mp3" , coverPath:"covers/3.jpg"},  
            ]   
          
 songitem.forEach((element,i)=>{
     console.log(element, i);
     element.getElementsByTagName('img')[0].src = songs[i].filePath;

 })

//audioElement.play();


//Handle Play Pause
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
          audioElement.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity = 1;
     }
     else{
          audioElement.pause();
          masterPlay.classList.add('fa-circle-play');
          masterPlay.classList.remove('fa-circle-pause');
          gif.style.opacity = 0;
         }
})

// listen to events
     audioElement.addEventListener('timeupdate', ()=>{
    
// Update Seekbar
       progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
       progressbar.value= progress; 
       
})
     progressbar.addEventListener('change',()=>{
     audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

