import styles from './styles.module.css'


const Modal = ({ children, isVisible, setIsVisible, ...props }) => {
    const style = [styles.modal]
    if (isVisible) {
        style.push(styles.isVisible)
    }
    return (
        <div className={style.join(' ')} onClick={()=>setIsVisible(false)}>
            <div className={styles.modal_content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal