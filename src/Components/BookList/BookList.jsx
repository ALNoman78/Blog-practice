import PropTypes from "prop-types";

const BookList = ({bookList}) => {
    const {title} = bookList
    return (
        <div className="">
            <h3 className="p-4 text-lg bg-white rounded-xl m-4">{title}</h3>
        </div>
    );
};

BookList.propTypes = {
    bookList: PropTypes.object.isRequired,
}
export default BookList;