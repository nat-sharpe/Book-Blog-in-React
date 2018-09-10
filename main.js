let books = [
    { title: 'Wind in the Willows',
    author: 'JRR Tolkien'
    },
    { title: 'Old Yeller',
    author: 'Ernest Hemingway'
    },
    { title: 'The Velveteen Rabbit',
    author: 'H. P. Lovecraft'
    },
    { title: 'Flatland',
    author: 'Albert Einstein'
    },
];

// let bookList = [];

// getBookList = books => {
//     books.forEach(book => {
//         bookList.push(h('li', { className: 'book' }, [`${book.title} by ${book.author}`]),`)
//     })
// };

// getBookList(books);

let h = React.createElement;


let content = h('div', null, [
    h('h1', { className: 'big-text' }, ['Some cool books!']),
    h('ul', { className: 'book-list' }, [
        h('li', { className: 'book' }, [`${books[0].title} by ${books[0].author}`]),
        h('li', { className: 'book' }, [`${books[1].title} by ${books[1].author}`]),
        h('li', { className: 'books' }, [`${books[2].title} by ${books[2].author}`]),
        h('li', { className: 'books' }, [`${books[3].title} by ${books[3].author}`]),
    ]),
    h('footer', null, ['Copyright 2018']),
]);


ReactDOM.render(content, document.querySelector('.react-root'));