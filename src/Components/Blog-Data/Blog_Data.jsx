import { useEffect } from "react";
import { useState } from "react";
import Show_Blog from "../Show-Blog/Show_Blog";
import PropTypes from 'prop-types';


const Blog_Data = ({handlerBookmark , handleTime }) => {
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogData(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2>Blog  : {blogData.length}</h2>
            {
                blogData.map((blogData , idx) => 
                <Show_Blog key={idx} 
                showBlog = {blogData}
                handlerBookmark = {handlerBookmark}
                handleTime = {handleTime}></Show_Blog>)
            }
        </div>
    );
};

Blog_Data.propTypes = {
    handlerBookmark: PropTypes.func.isRequired,
    handleTime: PropTypes.func.isRequired,
}
export default Blog_Data;