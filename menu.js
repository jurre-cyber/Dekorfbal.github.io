const currentPage = window.location.pathname
  .split('/')
  .pop()
  .toLowerCase() || 'home.html';

const menuItems = document.querySelectorAll('nav a');

menuItems.forEach(item => {
  const href = item.getAttribute('href')
    .split('/')
    .pop()
    .toLowerCase();

  if (href === currentPage) {
    item.classList.add('current');
  }
});