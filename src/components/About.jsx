import React from 'react'

const About = (props) => {
  return (
   <>
    <div className='container-fluid' id='About'>
        <div className='row'>
            <div className='col-md-12 mt-5 text-center'>
                <h1 className='text-center mt-5 bg-dark text-danger fw-bold'>About Us</h1>
                <p className='text-center'>We are a team of dedicated professionals committed to providing</p>
                <img className='img-fluid' src="p2.avif" alt="" />
            </div>
            <div className='col-md-12  text-center'>
                <div className='card mt-5'>
                    <div className='card-body'>
                <h4 className='mt-2'>Your Name: <br /><strong className='text-success'>{props.name}</strong></h4>
                <h5 className='mt-2'>Your Email: <br /><strong className='text-success'>{props.email}</strong></h5>
                <h6 className='mt-2'>Your Role: <br /> <strong className='text-danger'>{props.role}</strong></h6>
                </div>
            </div>

        </div>

    </div>
    </div>
   
   
   </>
  )
}

export default About