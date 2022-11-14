import { info } from "console";
import Link from "next/link";

async function fetchPost(id: string) {
    const apiResponse = await fetch(`https://my-json-server.typicode.com/italomagnov/JSONServer/posts/${id}`);
    return apiResponse.json();
}

export default async function BlogPost({ params, searchParams }: any) {
    const { id } = params;

    const post = await fetchPost(id);

    return (
        <>
            <div className="flex items-center justify-center my-8">
                <Link href="/" className="bg-[#ee3965] w-28 text-center hover:bg-[#181f32] text-white font-bold py-2 px-4 rounded">
                    Voltar
                </Link>
            </div>
            <div className="max-w-3xl mx-auto bg-white overflow-hidden shadow-md rounded-lg mb-12">
                <img src={post.urlToImage} alt="imagem da noticia" className="w-full h-64 object-cover" />

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
        </>


    )
    {/* <div className="container flex flex-col items-center justify-center py-8">
                <Link href="/" className="bg-[#ee3965] w-28 text-center hover:bg-[#181f32] text-white font-bold py-2 px-4 rounded">
                    Voltar
                </Link>
                <img src={post.urlToImage} alt="imagem da noticia" />
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div> */}
}