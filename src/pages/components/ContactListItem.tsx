import { ContactDto } from "../index";
import styles from '@/styles/components/Main.module.css'
import { Dispatch, SetStateAction } from "react";

export default function ContactListItem(details: ContactDto, openSession: Dispatch<SetStateAction<boolean>>) {
    return (
        <div className={"row " + styles.contact_item} key={details.otherId} onClick={e => openSession(true)}>
            <div className="col-2">
                <img className={styles.profile_pic} src={DEFAULT_PIC_URL} />
            </div>
            <div className="col-6">
                <h1>{details.username}</h1>
            </div>
        </div>
    )
}

export const DEFAULT_PIC_URL = "https://elasticbeanstalk-eu-west-2-475241826661.s3.eu-west-2.amazonaws.com/pngfind.com-placeholder-png-6104451.png";