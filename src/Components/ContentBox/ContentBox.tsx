import styles from './ContentBox.module.css'

interface ContentBoxProps {
    children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({children}) => {
    return (
        <div className={styles.conteudo}>
            <div className={styles.box}>
                {children}
            </div>
        </div>
    )
}

export default ContentBox
