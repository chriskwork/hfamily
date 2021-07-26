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
        class="bg-white flex flex-col justify-center items-center px-4 py-8 shadow-sm"
      >
        <div class="mb-4">
          <img
            src=${books[i].thumbnail}
            alt=""
            class="w-40 max-h-60"
          />
        </div>
        <div>
          <h3 class="text-lg font-bold text-secondary mb-1">${books[i].title}</h3>
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
const leafletData = ['../imgs/about/mini-book/mini-1.jpg'];
const posterData = [];
const cardData = [];

const images = document.querySelectorAll('.portfolio-img');

function drawImages(category) {
  images.forEach((img) => {
    img.setAttribute('src', `${category.map((item) => item)}`);
  });
}

// default category
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
