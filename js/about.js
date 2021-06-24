// 연혁 container h-40 을 h-full 로 바꾸면 됨

const historyBox = document.querySelector('#history-container')
const seeMoreBtn = document.querySelector('#history-more-btn')
const arrow = seeMoreBtn.querySelector('img')

seeMoreBtn.addEventListener('click', () => {
  if (historyBox.classList.contains('h-40')) {
    historyBox.classList.remove('h-40')
    historyBox.classList.add('h-full')
    arrow.style.transform = 'rotate(180deg)'
  } else {
    historyBox.classList.remove('h-full')
    historyBox.classList.add('h-40')
    arrow.style.transform = 'rotate(0)'
  }
})
