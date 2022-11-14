async function fetchPost(id: string) {
    const apiResponse = await fetch(`https://my-json-server.typicode.com/italomagnov/JSONServer/posts/${id}`);
    return apiResponse.json();
}

export default async function BlogPost({ params, searchParams }: any) {
    const { id } = params;

    const post = await fetchPost(id);

    return (
        <div>
            <img src={post.urlToImage} alt="" />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    )
}