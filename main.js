let bookData = [
    { title: 'Wind in the Willows',
    author: 'JRR Tolkien',
    date: '1995',
    imgURL: 'https://i2.wp.com/i57.tinypic.com/9qk7fd.jpg',
    content: 'Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.',
    },
    { title: 'Old Yeller',
    author: 'Ernest Hemingway',
    date: '1459',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/OldYeller.jpg/220px-OldYeller.jpg',
    content: 'Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any',
    },
    { title: 'The Velveteen Rabbit',
    author: 'H. P. Lovecraft',
    date: '1984',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51WrP5W9qHL._SX258_BO1,204,203,200_.jpg',
    content: 'Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other.', 
    },
    { title: 'Flatland',
    author: 'Albert Einstein',
    date: '2001',
    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51T649SbxTL.jpg',
    content: 'Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any',
    },
];

let h = React.createElement;


let BlogRow = book => {
    return h('li', { className: 'book-item' }, 
        h('h2', { className: 'book-title' }, `${book.title}`,),
        h('div', { className: 'book-main' },
            h('img', { className: 'book-image', src: book.imgURL }),
            h('div', { className: 'book-body' }, 
                h('h3', { className: 'sub-title' }, `${book.author} wrote ${book.title} in ${book.date}.`),
                h('p', { className: 'book-description' }, book.content),
            )
        )
    )
};

let BookList = props => {
    return h('ul', { className: 'book-list' }, 
    props.books.map(book => h(BlogRow, book))   
    )
};

let content = h('div', null, [
    h('h1', { className: 'big-text' }, 'SOME COOL BOOKS'),
    h(BookList, { books: bookData }),
    h('footer', { className: 'footer' }, 'John Lennon © 2018'),
]);

ReactDOM.render(content, document.querySelector('.react-root'));