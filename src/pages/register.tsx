import { AppData, AppKeys, Data } from '@/data/DataProvider';
import styles from '@/styles/components/register.module.css'
import Link from 'next/link';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export default function RegisterPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRetry, setPasswordRetry] = useState('')
    const [username, setUsername] = useState('')
    const [errorMessage, setError] = useState('')


    async function onRegisterButton() {
        if (email.length == 0) {
            setError("Email is required")
            return;
        } else if (password.length == 0) {
            setError("Password is required")
            return;
        } else if (passwordRetry.length == 0 || password != passwordRetry) {
            setError("Please confirm password")
            return;
        }
        else if (username.length == 0) {
            setError("Please choose an username")
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/register`, {
                method: "POST",
                body: JSON.stringify({
                    email, username, password, passwordRetry
                }),
                headers: {
                    "content-type": "application/json",
                },
            })

            const data: string = await res.json();
            window.localStorage.setItem(AppKeys.token, data)
            window.location.href = "/";
        }
        catch (err) {
            console.log(err);
        }
    }

    function onInputChange(setter: Dispatch<SetStateAction<string>>, eventData: ChangeEvent<HTMLInputElement>) {
        setter(eventData.target.value);
    }

    return (
        <div className={styles.central_wrapper}>
            <div className={styles.central_form}>
                <h1 className='sub-header'>Register</h1>
                <form className={styles.input_holder_form}>
                    {errorMessage != '' ? <div className={'row ' + styles.error_message}>{errorMessage}</div> : <></>}
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input type="email" className="form-control" placeholder="example@lame.com" aria-label="Email" aria-describedby="basic-addon1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e => onInputChange(setEmail, e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Username</span>
                        <input type="text" className="form-control" placeholder="very_cool_guy99" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={e => onInputChange(setUsername, e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                        <input type="password" className="form-control" aria-label="password" aria-describedby="basic-addon1" value={password} onChange={e => onInputChange(setPassword, e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Confirmation</span>
                        <input type="password" className="form-control" aria-label="confirmation" aria-describedby="basic-addon1" value={passwordRetry} onChange={e => onInputChange(setPasswordRetry, e)} />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'><button type="button" className="btn btn-primary" onClick={() => onRegisterButton()}>Register</button></div>
                        </div>
                        <div className='row'>
                            <div className='col'></div>
                            <div className='col'><Link href="/login">Already have an account?</Link></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
}
