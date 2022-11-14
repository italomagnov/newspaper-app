import Link from "next/link";
import styles from "../card.module.css";

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
        <div className={styles.container}>
            {newsCard.map((info: NewsCard) => (
                <div key={info.id} className={styles.grid}>
                    <Link href={`/blog/${info.id}`} className={styles.card}>
                        <div>
                            <img src={info.urlToImage} alt="imagem da noticia" />
                        </div>
                        <div className={styles.publishedInfo}>
                            <span>{info.publishedAt.slice(0, 10)}</span>
                            <span>{info.author}</span>
                        </div>
                        <div className={styles.contentCard}>
                            <h3 className={styles.newsTitle}>{info.title}</h3>
                            <h4 className={styles.newsDescription}>
                                {info.description}
                            </h4>
                        </div>
                        <div className={styles.readMore}>Ler Mais</div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default NewsContent;
