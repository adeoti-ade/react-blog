const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <small>created by {blog.author}</small>
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;