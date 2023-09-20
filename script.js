console.log("working");
forward=document.querySelector('.forward');
backward=document.querySelector('.backward');
img=document.getElementById('img');
let index=1;
forward.addEventListener('click',()=>{
  
      if(index>=5){
            index=1;
      }
      else{
            index=index+1;
      }
      img.src=`img${index}.png`
      console.log("working")
})
backward.addEventListener('click',()=>{
      if(index<=1){
            index=5;
      }
      else{
            index=index-1;
      }   
      img.src=`img${index}.png`
})


     