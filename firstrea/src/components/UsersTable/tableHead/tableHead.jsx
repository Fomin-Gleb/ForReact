import styles from './tableHead.module.css'

const TableHead = ({setHeadSort, ...props})=>{
    return(
        <div className={styles.usersTable_head}>
                <div onClick={() => { setHeadSort('id') }}>ID</div>
                <div onClick={() => { setHeadSort('name') }}>Name</div>
                <div onClick={() => { setHeadSort('username') }}>UserName</div>
                <div onClick={() => { setHeadSort('email') }}>Email</div>
                <div onClick={() => { setHeadSort('address') }}>Street</div>
            </div>
    )
}

export default TableHead