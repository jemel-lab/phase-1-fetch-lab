const  renderBooks =  document.querySelector('main');
const fetchBooks = fetch ("https://anapioficeandfire.com/api/books");

fetch (fetchBooks)
.then((resp) => resp.json())
.then ((data) => 
  for ( const books of data.books) 
   books.forEach(book => 
  const h2 = document.createElement('h2');
   ) .h2.innerHTML = book.name;
  main.appendChild(h2);
);

main.appendChild(
  document.createElement('h2')
).h2.innerHTML = book.name;
renderBooks.appendChild(h2);

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
.catch(console.error);

//function fetchBooks()  fetch("https://anapioficeandfire.com/api/books")
  //.then((resp) => resp.json())
  //.then((json) => console.log(json));
//.then((renderBooks) => {



//for (renderBooks)//(books) 
  //{ const main = document.querySelector('main');
  //books.forEach(book => {
   // const h2 = document.createElement('h2');
   // h2.innerHTML = book.name;
   // main.appendChild(h2);
  //});
//}

//document.addEventListener('DOMContentLoaded', function() {
  //fetchBooks();
//});
