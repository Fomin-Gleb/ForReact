import styles from './search.module.css'
import Input from '../../../UI/Input/Input'
// import { useMemo, useState } from 'react'

const TableSearch = ({ setSearchValue, searchValue, ...props }) => {

    return (
        <div className={styles.usersTable_search}>
            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search' />
        </div>
    )
}

export default TableSearch