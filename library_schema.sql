CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    genre VARCHAR(50),
    year INT
);

INSERT INTO books (title, author, genre, year) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925),
('1984', 'George Orwell', 'Dystopian', 1949),
('To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937),
('Pride and Prejudice', 'Jane Austen', 'Romance', 1813);
