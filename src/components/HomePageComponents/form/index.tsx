import React, { useState } from 'react';
import './Style/index.css';
import { request } from '../../../config/ajax';
import { Button } from '@material-ui/core';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [show, setShow] = useState(false);

  const forName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const forEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const forFeedback = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setFeedback(event.currentTarget.value);
  };
  const ourForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      name,
      email,
      feedback,
    };
    request('/feedbacks', 'POST', body).then(({ responseCode, json }) => {
      console.log('response', responseCode);
      if (responseCode === 201) {
        setName('');
        setEmail('');
        setFeedback('');
        alert('thankyou');
      } else {
        alert('Error!');
      }
    });
  };
  const form1 = () => {
    setShow(!show);
  };

  return (
    <div className='total'>
      <div className='feedback'>
        {/* <button className='feedback__button feedback--row' onClick={form1}>
          Please Submitt your feedback about our site
        </button> */}
        <Button onClick={form1} variant='contained' color='primary'>
          Please Submitt your feedback about our site
        </Button>
        {show ? (
          <div>
            &emsp;
            <form onSubmit={ourForm}>
              <div className='ourForm'>
                <div className='feedback--row'>
                  <div className='feedback--col25'>
                    <label className='nameLabel' htmlFor='name'>
                      Name:
                    </label>
                  </div>
                  <div className='feedback--col75'>
                    <input
                      id='name'
                      onChange={forName}
                      type='text'
                      placeholder='Full Name'
                      value={name}
                    />
                  </div>
                </div>
                <div className='feedback--row'>
                  <div className='feedback--col25'>
                    <label className='emailLabel' htmlFor='email'>
                      Email:
                    </label>
                  </div>
                  <div className='feedback--col75'>
                    <input
                      id='email'
                      onChange={forEmail}
                      type='text'
                      placeholder='Email Adress'
                      value={email}
                    />
                  </div>
                </div>

                <div className='feedback--row'>
                  <div className='feedback--col25'>
                    <label htmlFor='feedback'>Feedback:</label>
                  </div>
                  <div className='feedback--col75'>
                    <textarea
                      className='feedback__feedback'
                      id='feedback'
                      onChange={forFeedback}
                      value={feedback}
                      placeholder='What is your feedback'
                    />
                  </div>
                </div>
              </div>
              <div className='feedback__button__area'>
                <button className='feedback__button2 feedback--row'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Form;
