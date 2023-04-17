import { AppData, AppKeys, Data } from '@/data/DataProvider';
import styles from '@/styles/components/Login.module.css'
import { useContext, useState } from 'react';

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState()

    const appData: AppData = useContext(Data)

    async function onLoginButton() {
        try {

            const res = await fetch("http://localhost:8080/users/login", {
                method: "POST",
                body: JSON.stringify({
                    email, password
                }),
                headers: {
                    "content-type": "application/json",
                },
            })

            const data: { token: string } = await res.json();
            window.localStorage.setItem(AppKeys.token, data.token)
            window.location.href = "/";
        }
        catch (err) {
            console.log(err);
            
        }
    }

    return (
        <div className={styles.central_wrapper}>
            <div className={styles.central_form}>
                <h1 className='sub-header'>Login</h1>
                <form className={styles.input_holder_form}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input type="text" className="form-control" placeholder="example@lame.com" aria-label="Email" aria-describedby="basic-addon1" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                        <input type="password" className="form-control" placeholder="example@lame.com" aria-label="password" aria-describedby="basic-addon1" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => onLoginButton()}>Login</button>
                </form>
            </div>
        </div>)
}
