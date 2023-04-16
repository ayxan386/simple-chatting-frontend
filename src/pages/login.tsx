import styles from '@/styles/components/Login.module.css'

export default function LoginPage() {
    function onLoginButton() {
        console.log("Clicked")
    }
    
    return (
        <div className={styles.central_wrapper}>
        <div className={styles.central_form}>
        <h1 className='sub-header'>Login</h1>
        <form className={styles.input_holder_form}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" className="form-control" placeholder="example@lame.com" aria-label="Email" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Password</span>
                <input type="password" className="form-control" placeholder="example@lame.com" aria-label="password" aria-describedby="basic-addon1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => onLoginButton()}>Login</button>
        </form>
    </div>
    </div>)
}