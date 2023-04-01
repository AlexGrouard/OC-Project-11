import styles from './Tags.module.scss'

function Tags({ tag }) {
    return <span key={tag} className={styles.tag}>{tag}</span>
}

export default Tags