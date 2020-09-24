import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const Authentication: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (!isSubmitting) {
      return;
    }
    axios.post('https://conduit.productionready.io/api/users/login',
        {user: {email: 'qwe@mail.ru', password: '123456'}}
      )
      .then(res => {
        console.log('success', res);
      })
      .catch(err => {
        console.log('error', err);
      })
      .finally(() => {
        setIsSubmitting(false);
      })
  })

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Login</h1>
            <p className='text-xs-center'>
              <NavLink to='/register'>Need an account?</NavLink>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  type='submit'
                  className='btn btn-lg btn-primary pull-xs-right'
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}