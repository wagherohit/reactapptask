import React, { Component } from 'react'

export default class Contact extends Component {

    constructor(props) {
    super(props);

    this.state={
        phone:"123456789",
        adress:"Pune, Maharastra"
    }
    
    }
  render() {
    return (
      <>
       <div className='container-fluid' id='Contact'>
        <div className='row'>
            <div className='text-center col-md-12 mt-5'>

                <h1 className='bg-dark text-danger fw-bold'>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us.</p>

            </div>
            <div className='col-md-12 text-center mt-5 p-5'>
                <div className='card'>
                    <h2 className='p-3 '>Phone No: <mark className='fw-bold text-success'>{this.state.phone}</mark></h2>
                    <h3 className='p-3'>Address : <mark className='fw-bold text-success'>{this.state.adress}</mark></h3>

                </div>

            </div>

        </div>

       </div>
      
      
      </>
    )
  }
}
