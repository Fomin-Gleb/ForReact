import styles from "./listUser.module.css"
import { Link } from "react-router-dom";

const TableList = (props) => {

    return (
        <Link to={`${props.keys}/${props.name}`}>
            <div className={styles.userTableList}>
                <div className={styles.elem}>{props.keys}</div>
                <div className={styles.elem}>{props.name}</div>
                <div className={styles.elem}>{props.username}</div>
                <div className={styles.elem}>{props.email}</div>
                <div className={styles.elem}>{props.street}</div>

            </div>
        </Link>

    );
};

export default TableList