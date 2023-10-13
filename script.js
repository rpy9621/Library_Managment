// Sample book data
let library = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
];

// Function to display the book list
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    library.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author} <button onclick="removeBook(${index})">Remove</button>`;
        bookList.appendChild(li);
    });
}

// Function to add a book
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        library.push({ title, author });
        displayBooks();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
    }
}

// Function to remove a book
function removeBook(index) {
    library.splice(index, 1);
    displayBooks();
}

// Initial book display
displayBooks();

// Event listeners
document.getElementById('add-button').addEventListener('click', addBook);
