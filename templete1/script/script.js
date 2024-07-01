 const button = document.getElementById('button');
 
 

 function togglemenu() {
    const navmenu =document.getElementById('nav-menu');
    navmenu.classList.toggle('active')
    

 }

 button.addEventListener('click' ,togglemenu);



