// ############# 단행본 데이터

// 신간 new book
const newTitle = document.querySelector('#new-book-title')
const newAuthor = document.querySelector('#new-book-author')
const newDescription = document.querySelector('#new-book-desc')

if (newTitle && newAuthor && newDescription) {
  newTitle.textContent = books[0].title
  newAuthor.textContent = books[0].author
  newDescription.textContent = books[0].description
}

// book gallary
const bookGallary = document.querySelector('#book-gallary')

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
    `
  }
}
// ############# 기타 인쇄 - 포트폴리오

const leafletData = []
const posterData = []
const cardData = []
