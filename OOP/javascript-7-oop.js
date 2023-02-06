/* Exercise 2

Copy the Book, AudioBook, and Borrower class code from the lesson above into a file on your computer. Write code to do the following:

  1. Add a function on Borrower called getLastBook() that returns the last book they borrowed.
  2. Create at least 2 instances of Borrower, 2 instances of regular Book, and 2 instances of AudioBook.
  3. Make one borrower check out 3 books.
  4. Log the Books the person borrowed.
  5. Log the last Book the person borrowed.

For an extra challenge, add the following functions to the Borrower class and test them:

  1. favoriteAuthor() returns the author that the Borrower has borrowed the most books from
  2. returnBook(bookId) removes the book with the given ID from the Borrower's list of books. 
*/


class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.renewalLimit = 5;
  }

  calculateDueDate(borrowedDate) {
    return new Date(borrowedDate.setDate(borrowedDate.getDate() + 21));
  }
}

class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
    this.renewalLimit = 1;
  }

  calculateDueDate(borrowedDate) {
    return new Date(borrowedDate.setDate(borrowedDate.getDate() + 14));
  }
}

class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = [];
  }

  checkOut(book) {
    this.libraryBooks.push(book);
    const borrowedDate = new Date();
    const dueDate = book.calculateDueDate(borrowedDate);
    return dueDate;
  }

  // 1. Add a function on Borrower called getLastBook() that returns the last book they borrowed.
  getLastBook() {
    return this.libraryBooks[this.libraryBooks.length-1];
  }
}

// 2. Create at least 2 instances of Borrower, 2 instances of regular Book, and 2 instances of AudioBook.

// Book
const book1 = new Book("001", "Harry Potter and the Sorceror's Stone", "JK", "Rowling");
console.log(book1);
const book2 = new Book("002", "Wicked: The Life and Times of the Wicked Witch of the West", "Gregory", "MaGuire");
console.log(book2);

// AudioBook
const audio1 = new AudioBook("003", "Fixing a Broken Heart", "Oliver", "Henry");
console.log(audio1);
const audio2 = new AudioBook("004", "The Rose Girls", "Jennifer", "Chase");
console.log(audio2);

// Borrower
const borrower1 = new Borrower("P1", "Ella", "D", "Lim", "000-100-1000");
console.log(borrower1);
const borrower2 = new Borrower("P2", "Jeffrey", "C", "Campbell", "000-200-2000");
console.log(borrower2);

// 3. Make one borrower check out 3 books.
borrower1.checkOut(book1);
borrower1.checkOut(book2);
borrower1.checkOut(audio1);

// 4. Log the Books the person borrowed.
console.log(borrower1.libraryBooks);

// 5. Log the last Book the person borrowed.
console.log(borrower1.getLastBook());