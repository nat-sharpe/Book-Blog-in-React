let books = [
    { title: 'Wind in the Willows',
    author: 'JRR Tolkien',
    date: '1995',
    content: 'Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.',
    },
    { title: 'Old Yeller',
    author: 'Ernest Hemingway',
    date: '1459',
    content: 'Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any',
    },
    { title: 'The Velveteen Rabbit',
    author: 'H. P. Lovecraft',
    date: '1984',
    content: 'Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other.', 
    },
    { title: 'Flatland',
    author: 'Albert Einstein',
    date: '2001',
    content: 'Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any',
    },
];

let h = React.createElement;

let blogPost = books.map(book => {
    return [h('h2', { className: 'book' }, [`${book.title}`]),
        h('ul', { className: 'book-content' }, 
            h('li', { className: 'book-content' }, [`${book.author} wrote the famous masterpiece, ${book.title}, in ${book.date}.`]),
            h('li', { className: 'book-content' }, [book.content])
        )
    ]
});

let content = h('div', null, [
    h('h1', { className: 'big-text' }, ['COOL BOOKS']),
    h('div', { className: 'book-list' }, [blogPost]),
    h('footer', null, ['Copyright 2018']),
]);

ReactDOM.render(content, document.querySelector('.react-root'));