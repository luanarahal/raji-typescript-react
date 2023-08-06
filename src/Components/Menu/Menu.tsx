import styles from './Menu.module.css'
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Menu = () => {
    const navigate = useNavigate();

    return (
        <Nav defaultActiveKey="/" className={styles.nav}>
            <Nav.Link 
            key='home'
            className={styles.navItem}
            onClick={() => navigate('')}>Home</Nav.Link>
            <Nav.Link
            key='missao'
            className={styles.navItem}
            onClick={() => navigate('/missao')}>Missão, Visão e Valores</Nav.Link>
        </Nav>
    )
}

export default Menu
