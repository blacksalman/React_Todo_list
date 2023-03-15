function Blog(props){
    let content = props.posts.map((post)=>{
        return <Post key={post.id} post={post}/>
       
    })

    return <div>{content}</div>
}

function Post(props){
    const {id, title, content} = props.post
    return(
        <>
           <div>{id}</div>
           <div>{title}</div>
           <div>{content}</div>
        </>
    )
}

export default Blog;