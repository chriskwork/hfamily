// ############# BOOKS DATA

// new book
const newTitle = document.querySelector('#new-book-title');
const newAuthor = document.querySelector('#new-book-author');
const newDescription = document.querySelector('#new-book-desc');

if (newTitle && newAuthor && newDescription) {
  newTitle.textContent = books[0].title;
  newAuthor.textContent = books[0].author;
  newDescription.textContent = books[0].description;
}

// book gallary
const bookGallary = document.querySelector('#book-gallary');

if (bookGallary) {
  for (let i = 1; i < 4; i++) {
    bookGallary.innerHTML += `
      <div
        class="bg-white flex flex-col justify-center items-center px-4 py-8 shadow-sm rounded-md"
      >
        <div class="mb-4">
          <img
            src=${books[i].thumbnail}
            alt="단행본 표지 썸네일"
            class="w-40 max-h-60"
          />
        </div>
        <div>
          <h3 class="text-lg font-bold text-secondary mb-1">${
            books[i].title.length > 19
              ? books[i].title.slice(0, 20) + '...'
              : books[i].title
          }</h3>
          <p class="text-xs text-gray-400 mb-2">${books[i].author}</p>
          <p class="text-sm px-4">
          ${books[i].description}
          </p>
        </div>
      </div>
    `;
  }
}

// ############# ETC, PORTFOLIO

// data
const leafletData = [
  '../imgs/portfolio/didimdol17.jpg',
  '../imgs/portfolio/nanum10.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
];
const posterData = [
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
];
const cardData = [
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
  '../imgs/portfolio/default.jpg',
];

// img elements
const images = document.querySelectorAll('.portfolio-img');

// default category
// function drawImages(category) {
//   return images.forEach((img, i) => {
//     img.setAttribute('src', category[i]);
//     img.style.animation = `fadeIn ${i + 0.25}s`;
//   });
// }

function drawImages(category) {
  const wrapper = document.querySelector('.portfolio-imgs-wrapper');
  wrapper.innerHTML = '';

  return category.map((item, i) => {
    wrapper.innerHTML += `
    <div class="img-box w-full h-72 bg-gray-200 rounded-lg" style="animation: fadeIn ${
      i + 0.15
    }s">
      <img class="portfolio-img" src="${item}" alt="시안 이미지" />
    </div>
    `;
  });
}

drawImages(leafletData);

// clicking category: change images on grid
const categoryContainer = document.querySelector('#portfolio-category');

categoryContainer.addEventListener('click', (e) => {
  const category = e.target.getAttribute('data-category');
  const categoryBtns = document.querySelectorAll('.portfolio-category-btn');

  function removeActiveClass() {
    categoryBtns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');
  }

  if (category != null) {
    if (category === 'leaflet') {
      removeActiveClass();
      drawImages(leafletData);
    }
    if (category === 'poster') {
      removeActiveClass();
      drawImages(posterData);
    }
    if (category === 'card') {
      removeActiveClass();
      drawImages(cardData);
    }
  } else {
    return;
  }
});
