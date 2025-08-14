import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'

function App() {
 const userData ={
        name: "Rohit Waghe",
        email: "rohitwaghe@gmail.com",
        role: "Mern Stack Developer",
       
    };

    const serviceData = {
service1: "Web Development",
service2: "App Development",
service3: "UI/UX Design"
};

  return (
    <>
      <Navbar/>
      <Home/>
      <About
        name={userData.name}
        email={userData.email}
        role={userData.role}
      />
      <Contact/>
      <Service
        service1={serviceData.service1}
        service2={serviceData.service2}
        service3={serviceData.service3}
      />
    </>
  )
}

export default App
