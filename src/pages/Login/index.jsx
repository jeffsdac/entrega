import React from 'react';

import Styles from './login.module.scss'
import Form from './components/Form'

function Login() {
  return (
    <div className={Styles.login}>
        <div className={Styles.slides}>

        </div>
        <Form/>
    </div>
  );
}

export default Login;