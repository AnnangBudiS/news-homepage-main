const closeBtn = document.querySelector('.close-nav');
const openNav  = document.querySelector('.open-nav');
const sideNav = document.querySelector('.nav-item');
const overlay = document.querySelector('.overlay');

closeBtn.addEventListener('click', () => {
    sideNav.style.right = '-250px';
    overlay.style.display = 'none';
  
})

openNav.addEventListener('click', () => {
   sideNav.style.right = '0';
   overlay.style.display = 'block';
})

