import styles from './Tags.module.scss'

function Tags({ tags }) {
    let tagArray = []
    tags.forEach((tag) => {
        tagArray.push(<span key={tag} className={styles.tag}>{tag}</span>)
    })
    return <div className={styles.allTag}>{tagArray}</div>
}

export default Tags