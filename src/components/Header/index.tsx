import styles from './styles.module.scss'

export function Header (){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="" alt=""/>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
