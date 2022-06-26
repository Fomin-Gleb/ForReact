import styles from './styles.module.css'


const Input = ({...props}) => {
    return (
        <input className={styles.inp} {...props}/>
    )
}

export default Input