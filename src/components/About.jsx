import React from 'react'

const About = (props) => {
  return (
   <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 mt-5'>
                <h1 className='text-center mt-5'>About Us</h1>
                <p className='text-center'>We are a team of dedicated professionals committed to providing</p>
            </div>
            <div className='col-md-12  text-center'>
                <div className='card mt-5'>
                    <div className='card-body'>
                <h4 className='mt-2'>Your Name is: <br />{props.name}</h4>
                <h5 className='mt-2'>Your Email Id: <br />{props.email}</h5>
                <h6 className='mt-2'>Your Role is: <br /> {props.role}</h6>
                </div>
            </div>

        </div>

    </div>
    </div>
   
   
   </>
  )
}

export default About