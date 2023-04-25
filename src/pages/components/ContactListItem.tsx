import { ContactDto } from "../index";
import styles from '@/styles/components/Main.module.css'

export default function ContactListItem(details: ContactDto) {
    return (
        <div className="row" key={details.otherId}>
            <div className="col">
                <img className={styles.profile_pic} src="https://elasticbeanstalk-eu-west-2-475241826661.s3.eu-west-2.amazonaws.com/pngfind.com-placeholder-png-6104451.png" />
            </div>
            <div className="col">
                <h1>{details.username}</h1>
            </div>
        </div>
    )
}