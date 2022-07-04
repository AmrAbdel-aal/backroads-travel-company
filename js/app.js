window.onload=function(){
  let barBtn = document.getElementById('bar-btn');
  let linksDiv = document.getElementById('links');
  barBtn.addEventListener('click',function(){
  linksDiv.classList.toggle('show-links')  
  }); 
}