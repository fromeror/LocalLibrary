// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// Returns the total number of books
function getTotalBooksCount(books) {
  const totalBooks = books.length;
  return totalBooks;
}

// Returns the total number of accounts
function getTotalAccountsCount(accounts) {
  const totalAccounts = accounts.length;
  return totalAccounts;
}

// Returns the total of numbber of books that are currently checked out 
function getBooksBorrowedCount(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  const totalBorrowed = borrowed.length;

  return totalBorrowed;
}

// Returns an array of 5 or less objects that represent the most 
// common genres 
function getMostCommonGenres(books) {
  const commonGenres = [];

  for (let book of books) {
    const genre = commonGenres.find(
      (currentGenre) => currentGenre.name === book.genre
    );
    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1 });
    }
  }

  return topFive(commonGenres);
}

// Returns an array of 5 or less objects representing the most popular
// books. Reprsented by the number of times a book has been borrowed 
function getMostPopularBooks(books) {
  let result = [];

  const borrows = books.reduce((acc, book) => {
    result.push({ name: book.title, count: book.borrows.length });
  }, []);

  return topFive(result);
}

// Returns an array of 5 or less objects representing the most popular 
// authors whose books have been checked out the most.
function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject);
  }

  return topFive(popularAuthors);
}

// Helper function
// Returns the top five items in the array
function topFive(array) {
  let result = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
