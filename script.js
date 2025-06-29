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

// Filter books by query
// Render results into table
function searchBooks() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const tbody  = document.querySelector("#resultsTable tbody");
  const resultP = document.getElementById("resultCount");

  const results = books.filter(b =>
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query)
  );

  tbody.innerHTML = "";

  if (results.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">No results. We are really sorry!</td></tr>`;
  } else {
    results.forEach(b => {
      tbody.innerHTML += `
        <tr>
          <td>${b.title}</td>
          <td>${b.author}</td>
          <td>${b.genre}</td>
          <td>${b.year}</td>
        </tr>`;
    });
  }

  resultP.textContent =
    `Found: ${results.length} result${results.length === 1 ? '' : 's'}`;
}
