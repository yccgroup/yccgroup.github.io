const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const search = document.querySelector('#publication-search');
const publicationList = document.querySelector('#publication-list');
if (search && publicationList) {
  const items = Array.from(publicationList.querySelectorAll('li'));
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    items.forEach(item => {
      item.hidden = query && !item.textContent.toLowerCase().includes(query);
    });
  });
}
