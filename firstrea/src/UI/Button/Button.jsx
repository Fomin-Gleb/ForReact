import styles from './styles.module.css'


const Button = ({children, ...props}) => {
    return (
        <button className={styles.btn} {...props}>{children}</button>
    )
}

export default Button