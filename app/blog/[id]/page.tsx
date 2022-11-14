import Link from "next/link";

async function fetchPost(id: string) {
    const apiResponse = await fetch(`https://my-json-server.typicode.com/italomagnov/JSONServer/posts/${id}`);
    return apiResponse.json();
}

export default async function BlogPost({ params }: any) {
    const { id } = params;

    const post = await fetchPost(id);

    return (
        <>
            <div className="flex items-center justify-center my-8">
                <Link href="/" className="px-4 py-2 bg-transparent outline-none border-2 border-[#ee3965] rounded text-indigo-500 font-medium active:scale-95 hover:bg-[#ee3965] hover:text-white hover:border-transparent focus:bg-[#ee3965] focus:text-white focus:border-transparent focus:ring-2 focus:ring-[#ee3965] focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">Retornar</Link>
            </div>
            <div className="px-4 py-2">
                <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow-md rounded-lg mb-12">
                    <img src={post.urlToImage} alt="imagem da noticia" className="lg:h-72 md:h-48 w-full object-cover" />

                    <div className="p-6">
                        <div>
                            <h1 className="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline">{post.title}</h1>
                            <p className="text-base text-gray-600 mt-2">{post.content}</p>
                        </div>

                        <div className="my-6" >
                            <Link href={post.url}>
                                Para ler mais acesse o site: {post.url}
                            </Link>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-gray-700 font-semibold">{post.author}</span>
                                    <span className="text-gray-700 font-semibold">{post.publishedAt.slice(0, 10)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}