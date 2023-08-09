import './style.css';

const serachQuery = ' romance ';
const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(serachQuery)}`;
async function fetchBooks() {
  const response = await fetch(url);
  const data = await response.json();
  return data.docs.map((book) => ({
    title: book.title,
    author: book.author ? book.author_name.join(',') : 'Unknown Author',
    coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
  }));
}
const BooksEl = document.querySelector('.Books');
function dispalyBooks(Books) {
  Books.forEach((book) => {
    BooksEl.innerHTML += `
            <div id="" class="book-card">
            <div class="book-img">
            <img src="${book.coverUrl}" alt="${book.title}" />
            </div>
            <div id="" class="book-content">
            <h4 class="book-name">${book.title}</h4>
            <div id="" class="book-likes">
                <i class="bi bi-heart"></i>
                <span id="" class="n-likes"> likes</span>
            </div>
            </div>
            <button id="" class="comment-button">Comment</button>
        </div>
  `;
  });
}

async function fetchAndDisplayBooks() {
  const books = await fetchBooks();
  dispalyBooks(books);
}
fetchAndDisplayBooks();
