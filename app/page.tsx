import Link from "next/link";

type NewsCard = {
    id: string,
    urlToImage: string,
    publishedAt: string,
    author: string,
    title: string,
    description: string
}

const getData = async () => {
    const apiResponse = await fetch(
        "https://my-json-server.typicode.com/italomagnov/JSONServer/posts"
    );
    return apiResponse.json();
};

export const NewsContent = async () => {
    const newsCard = await getData();
    return (
        <section className='md:h-full flex items-center text-gray-600'>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-center flex-wrap -m-4">
                    {newsCard.map((info: NewsCard) => (
                        <Link key={info.id} href={`/blog/${info.id}`} className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl transform-cpu:">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center" src={info.urlToImage} alt="imagem dos cards" />
                                <div className="p-6 hover:bg-[#ee3965] hover:text-white transition duration-300 ease-in">
                                    <div className="flex justify-around">
                                        <span className="text-base font-medium text-indigo-300 mb-1">
                                            {info.publishedAt.slice(0, 10)}
                                        </span>
                                        <span className="text-base font-medium text-indigo-300 mb-1">
                                            {info.author}
                                        </span>
                                    </div>
                                    <h1 className="text-2xl font-semibold mb-3 text-ellipsis">{info.title}</h1>
                                    <p className="leading-relaxed mb-3">{info.description}</p>
                                    <div className="flex items-center flex-wrap">
                                        <p className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsContent;
