import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Show_Blog = ({ showBlog , handlerBookmark , handleTime}) => {
    const { title, cover, author_img, posted_date, reading_time, author, hashtags } = showBlog
    return (
        <div className='md:mb-20 mb-8'>
            <img className='w-full mb-6 rounded-md' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-5'>
                    <img className='h-16 w-16 object-cover' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h3>{reading_time} min read</h3>
                    <button onClick={() => handlerBookmark(showBlog)} className='px-4 text-2xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold md:w-[28rem] my-6'>Title {title}</h2>
            {
                hashtags.map((hashtag , idx) => <span key={idx}> <a> #{hashtag}</a> </span>)
            }
            <div className='my-2'>
                <button className='text-xl font-medium underline text-[rgb(96,71,236)]' onClick={() => handleTime(reading_time)}>Mark as read</button>
            </div>
        </div>
    );
};

Show_Blog.propTypes = {
    showBlog: PropTypes.object.isRequired,
    handlerBookmark: PropTypes.func.isRequired,
    handleTime: PropTypes.func.isRequired,
}

export default Show_Blog;