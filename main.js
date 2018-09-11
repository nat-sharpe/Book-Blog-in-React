let bookData1 = [
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

let bookData2 = [
    { title: 'Charge of the Light Brigade',
    author: 'George Patton',
    date: '1945',
    imgURL: 'https://images.gr-assets.com/books/1333409446l/7050491.jpg',
    content: 'Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.',
    },
    { title: 'A Song of Fire and Ice',
    author: 'Anakin Skywalker',
    date: '1977',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg/220px-A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg',
    content: 'Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any',
    },
];

let h = React.createElement;

let BlogRow = props =>
    h('li', { className: 'book-item' }, 
        h('h2', { className: 'book-title' }, `${props.title}`,),
        h('div', { className: 'book-main' },
            h('img', { className: 'book-image', src: props.imgURL }),
            h('div', { className: 'book-body' }, 
                h('h3', { className: 'sub-title' }, 
                    [`${props.author} wrote `,
                    h('em', null, props.title),
                    ` in ${props.date}.`]),
                h('p', { className: 'book-description' }, props.content),
            )
        )
    );

let BookList = props =>
    h('ul', { className: 'book-list' }, 
        props.books.map(book => h(BlogRow, book))   
    );

let Header = props => h('h1', { className: 'big-text' }, props.header);
let Footer = props => h('footer', { className: 'footer' }, props.footer);

let HomePage = () =>
    h('div', null, [
        h(Header, { header: 'SOME COOL BOOKS' }),
        h(BookList, { books: bookData1 }),
        h(Header, { header: 'BWA HA HA HA HA HA!!!' }),
        h(BookList, { books: bookData2 }),
        h(Footer, { footer: 'John Lennon © 2018'}),
    ]);


let vdom = h(HomePage);

ReactDOM.render(vdom, document.querySelector('.react-root'));