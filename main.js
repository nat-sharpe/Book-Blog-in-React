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

let h = React.createElement;

let bookList = books.map(book =>
        h('li', { className: 'book' }, [`${book.title} by ${book.author}`])
    );

let content = h('div', null, [
    h('h1', { className: 'big-text' }, ['Some cool books!']),
    h('ul', { className: 'book-list' }, bookList),
    h('footer', null, ['Copyright 2018']),
]);

ReactDOM.render(content, document.querySelector('.react-root'));