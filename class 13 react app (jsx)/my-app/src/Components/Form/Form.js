import React from 'react';
import './Form.css';

const Form = (props) => {
    return (
        <div className='Contact'>

            <div className='Contact-form'>

                <p> {props.title} </p>

                <form>
                    <label> Email </label>
                    <input placeholder='Enter your email here' required />

                    <label> Mobile  </label>
                    <input placeholder='Enter your Mobile number here' required />

                    <label> Your message </label>
                    <textarea placeholder='Enter your message '> </textarea>



                    <button type='submit'> Send </button>
                </form>

            </div>


        </div>




    )
}

export default Form