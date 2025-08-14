import React, { Component } from 'react'

export default class Service extends Component {

    constructor(props) {
    super(props)
    
    }
  render() {

    return (
      <>
      <div className='container-fluid' id='Service'>
        <div className='row'>
            <div className='text-center col-md-12 mt-5'>
                <h1 className='bg-dark text-danger fw-bold'>Our Services</h1>
                <p>We offer a wide range of services to meet your needs. From web development</p>

            </div>
            <div className='col-md-4 mt-5 text-center'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>{this.props.service1}</h4>
                        <img className='img-fluid' src="service.jpeg" alt="" />
                        <p>Building responsive and modern websites.</p>
                    </div>
                </div>
            </div>
             <div className='col-md-4 mt-5 text-center'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>{this.props.service2}</h4>
                        <img className='img-fluid' style={{height:"162px"}} src="app.avif" alt="" />
                        <p>Building responsive and modern websites.</p>
                    </div>
                </div>
            </div>
             <div className='col-md-4 mt-5 text-center'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>{this.props.service3}</h4>
                        <img className='img-fluid' style={{height:"162px"}} src="ui.avif" alt="" />
                        <p>Building responsive and modern websites.</p>
                    </div>
                </div>
            </div>

      </div>
      </div>
      
      </>
    )
  }
}
