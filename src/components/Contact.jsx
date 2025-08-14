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
       <div className='container'>
        <div className='row'>
            <div className='text-center col-md-12 mt-5'>

                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us.</p>

            </div>
            <div className='col-md-12 text-center mt-5 p-5'>
                <div className='card'>
                    <h2 className='p-3'>Phone No iS: <mark>{this.state.phone}</mark></h2>
                    <h3 className='p-3'>Address is : <mark>{this.state.adress}</mark></h3>

                </div>

            </div>

        </div>

       </div>
      
      
      </>
    )
  }
}
