import styles from 'app/styles/components/iconText.module.css'

const icons = {
  'home': 'fas fa-home',
  'search' : 'fas fa-search',
  'content' : 'fas fa-file-alt',
  'video' : 'fas fa-video',
  'chart' : 'fas fa-chart-line'
}
export default function IconText({ children, ...props }) {
  return <div className={styles.iconTextContainer}>
    <i className={`${icons[props.icon]} ${styles.icon}`}></i>
    <label className={styles.text} >{props.text}</label>
  </div>
}