'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  // Get publication date elements
  const publicationDateElements = document.querySelectorAll('.publication-date');

  // Calculate days ago and display publication date
  const publicationDate = new Date('2023-07-25');
  const currentDate = new Date();
  const daysAgo = Math.floor((currentDate - publicationDate) / (1000 * 60 * 60 * 24));

  publicationDateElements.forEach(element => {
    element.textContent = `${daysAgo}日前`;
  });
}

