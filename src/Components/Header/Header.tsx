import styles from './Header.module.css'
import Menu from '../Menu/Menu'
import logo from '../../Assets/logo/raji.svg';

const Header = () => {
    return (
        <div className={styles.mainheader}>    
            <div className={styles.logo}>
                <img src={logo} alt="logo-raji"/>
            </div>
            <div className={styles.menu}>
                <Menu/>
            </div>
        </div>    
    )
}

export default Header
