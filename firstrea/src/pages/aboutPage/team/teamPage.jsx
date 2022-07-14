import { useContext } from "react"
import { AboutContext } from "../../../context/aboutContext"
import styles from './team.module.css'
const TeamPage = () => {
    const { teamUs } = useContext(AboutContext)
    return (
        <div className="main-content">
            <h2>Team:</h2>
            <div className={styles.team}>
                {
                    teamUs.map((el) => (

                        <div>
                            <div className={styles.teamElement}>{el.name}</div>
                            <div className={styles.teamElement}>{el.avatar}</div>
                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default TeamPage