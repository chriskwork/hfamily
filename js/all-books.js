// ### book-data.js

const allBooksContainer = document.querySelector('#book-grid-wrapper');

if (allBooksContainer) {
  allBooksContainer.innerHTML = '';

  books.forEach((book, i) => {
    allBooksContainer.innerHTML += `
  <div
  class="all-book-card bg-white flex flex-col justify-start items-center px-4 py-8 shadow-sm rounded-md self-stretch"
>
    <div class="mb-4">
      <img
        src="${books[i].thumbnail}"
        alt="단행본 표지 썸네일"
        class="w-40 max-h-60"
        loading="lazy"
      />
    </div>
    <div>
      <h3 class="text-lg font-bold text-secondary mb-1">
        ${
          books[i].title.length > 19
            ? books[i].title.slice(0, 20) + '...'
            : books[i].title
        }
      </h3>
      <p class="text-xs text-gray-400 mb-2">${books[i].author}</p>
      <p class="text-sm px-4">
      ${
        books[i].description.length > 100
          ? books[i].description.slice(0, 100) + '...'
          : books[i].description
      }
      </p>
      <br />
      <p href="#" class="
        text-sm 
        text-primary 
        hover:opacity-80 
        transition-opacity 
        underline
        cursor-pointer
      " onclick="seeDetail(${books[i].id})">상세보기</p>
    </div>
  </div>
  `;
  });
} else {
  allBooksContainer.innerHTML = '';
}

/* Open modal window: 상세보기 button */

const modalContainer = document.querySelector('#modal-container');
const page = document.querySelector('body');

// modal elements
const modalThumbnail = modalContainer.querySelector('#detail-thumbnail-img');
const modalTitle = modalContainer.querySelector('#detail-title');
const modalAuthor = modalContainer.querySelector('#detail-author');
const modalDesc = modalContainer.querySelector('#detail-description');
const modalContent = modalContainer.querySelector('#detail-contents');

function seeDetail(bookId) {
  // console.log('see detail is clicked', 'id is ' + bookId);

  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('flex');
  page.style.overflow = 'hidden';

  books.forEach((book) => {
    if (book.id === bookId) {
      modalThumbnail.setAttribute('src', book.thumbnail);
      modalTitle.textContent = book.title;
      modalAuthor.textContent = book.author;
      modalDesc.textContent = book.description;
      modalContent.innerHTML = book.contents;
    } else {
      return;
    }
  });

  modalContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('black-overlay')) {
      closeModal();
    } else {
      return;
    }
  });
}

/* Close modal window: X button */

function closeModal() {
  modalContainer.classList.remove('flex');
  modalContainer.classList.add('hidden');
  page.style.overflow = 'auto';
}
