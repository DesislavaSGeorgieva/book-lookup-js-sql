const books = [
    { title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      genre: "Classic", 
      year: 1925 },

    { title: "1984", 
      author: "George Orwell", 
      genre: "Dystopian", 
      year: 1949 },

    { title: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      genre: "Classic", 
      year: 1960 },

    { title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      genre: "Fantasy", 
      year: 1937 },

    { title: "Pride and Prejudice", 
      author: "Jane Austen", 
      genre: "Romance", 
      year: 1813 }
];

function searchBooks() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const results = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );

  const tbody = document.querySelector("#resultsTable tbody");
    tbody.innerHTML = "";

  // Добавих този код, за да се появи подходящо съобщение, ако търсенето на потребителя не даде резултат - ако приемем, че това е реална база данни на реална библиотека
  if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4">No results. We are really sorry!</td></tr>';
        return;
  }

  results.forEach(book => {
        const row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.year}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}