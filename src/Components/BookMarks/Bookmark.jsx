import BookList from "../BookList/BookList";
import PropTypes from "prop-types";

const Bookmark = ({ bookmarks , readingTime }) => {

    return (
        <div className="md:w-1/3">
            <div>
                <h3 className="text-center text-xl bg-[rgba(96,71,236,0.14)] text-[#6047EC] m-4 rounded-lg font-bold p-4 border border-[#6047EC]">Spent time on read : {readingTime} </h3>
            </div>
            <div className=' p-4 bg-[rgba(17,17,17,0.09)] ml-4 rounded-lg'>
                <h2 className="text-xl text-left font-bold">Bookmarked : {bookmarks.length}</h2>
                {
                    bookmarks.map((book, idx) => <BookList key={idx} bookList={book}></BookList>)
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmark;