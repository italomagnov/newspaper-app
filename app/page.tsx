import NewsContent from './blog/page'
import styles from './page.module.css'


export default function Home() {
    return (
        <div>
            <h3 className={styles.pageText}>Postagens Recentes</h3>
            <NewsContent />
        </div>
    )
}
