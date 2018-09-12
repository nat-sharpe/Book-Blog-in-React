const h = React.createElement;

const initialBookData = [
    { 
        id: 1,
        title: 'Wind in the Willows',
        author: 'JRR Tolkien',
        date: '1995',
        imgURL: 'https://i2.wp.com/i57.tinypic.com/9qk7fd.jpg',
        content: 'Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.',
    },
    { 
        id: 2,
        title: 'Old Yeller',
        author: 'Ernest Hemingway',
        date: '1459',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/OldYeller.jpg/220px-OldYeller.jpg',
        content: 'Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any',
    },
    { 
        id: 3,
        title: 'The Velveteen Rabbit',
        author: 'H. P. Lovecraft',
        date: '1984',
        imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51WrP5W9qHL._SX258_BO1,204,203,200_.jpg',
        content: 'Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other.', 
    },
    { 
        id: 4,
        title: 'Flatland',
        author: 'Albert Einstein',
        date: '2001',
        imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51T649SbxTL.jpg',
        content: 'Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any',
    },
];

const bookData2 = [
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

const titles = [
    "GANDALF'S HALL OF RECORDS",
    "KERMIT'S GREEN MACHINE",
    "RONALD MCDONALD'S HOUSE OF KALE"
];

let BlogRow = props =>
    h('li', { className: 'book-item' }, 
        h('h2', { className: 'book-title' }, `${props.book.title}`,),
        h('div', { className: 'book-main' },
            h('img', { className: 'book-image', src: props.book.imgURL, 
                onClick: () => {
                    props.switchImageURL(props.book);
                }
            }),
            h('div', { className: 'book-body' }, 
                h('h3', { className: 'sub-title' }, 
                    [`${props.book.author} wrote `,
                    h('em', null, props.book.title),
                    ` in ${props.book.date}.`]),
                h('p', { className: 'book-description' }, props.book.content),
                h('button', {
                    className: 'snake-button',
                    onClick: () => {
                        props.snakeify(props.book);
                    }
                }, ['Snakeify!'])
            )
        )
    );

let BookList = props =>
    h('ul', { className: 'book-list' }, 
        props.books.map(book => h(BlogRow, { 
            book: book, 
            snakeify: props.snakeify, 
            switchImageURL: props.switchImageURL 
        }))   
    );

let Header = props => 
    h('h1', { className: 'big-text', 
        onClick: () => {
            props.switchTitle();
        }}, props.text
    );

let Footer = props => h('footer', { className: 'footer' }, props.footer);

let bookClicked = false; 

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeTitleIndex: 0,
            books: props.data
        }
    }

    render() {
        
        let snakeify = clickedBook => {
            let newBooks = this.state.books.map(book => 
                (book.id === clickedBook.id) ?
                    Object.assign({}, book, {title: book.title + '🐍'})
                :
                    book
            );
            this.setState({ books: newBooks });
        };

        let switchImageURL = clickedImage => {
            if (bookClicked) {
                let oldBooks = this.props.data.map(book =>
                    (book.id === clickedImage.id) ?
                        Object.assign({}, book, {imgURL: book.imgURL})
                    :
                        book
                );
                bookClicked = false;
                this.setState({ books: oldBooks });
            } else {
                let newBooks = this.state.books.map(book =>
                    (book.id === clickedImage.id) ?
                        Object.assign({}, book, {imgURL: 'https://i2.cdscdn.com/pdt2/4/6/0/1/700x700/9782351641460/rw/ceci-n-est-pas-un-livre.jpg'})
                    :
                        book
                );
                bookClicked = true;
                this.setState({ books: newBooks });
            }
        };
    

        let switchTitle = () => {
            this.setState({
                storeTitleIndex: (this.state.storeTitleIndex + 1) % titles.length
            });
        }

        return h('div', null, [
            h(Header, { text: titles[this.state.storeTitleIndex], switchTitle: switchTitle }),
            h(BookList, { books: this.state.books, snakeify: snakeify, switchImageURL: switchImageURL }),
            h(Footer, { footer: 'John Lennon © 2018'}),
        ]);
    };
};

ReactDOM.render(h(HomePage, { data: initialBookData }), document.querySelector('.react-root'));