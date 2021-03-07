// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// Returns author object matching the id 
function findAuthorById(authors, id) {
  const author = authors.find((author) => author.id === id);
  return author;
}

// return book object matching the id
function findBookById(books, id) {
  const book = books.find((book) => book.id === id);
  return book;
}

// Returns an array with an array or loaned out books and an array with books that have been returned 
function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const borrowed = books.filter((book) => book.borrows[0].returned === false);

  const returned = books.filter((book) => book.borrows[0].returned === true);
  result.push(borrowed, returned);

  return result;
}

// Returns an array of 10 or less borrow transactions and account info
function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id);
    return { ...borrows, ...account };
  });

  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
