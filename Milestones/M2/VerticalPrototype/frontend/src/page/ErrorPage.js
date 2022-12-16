import React from 'react'
import Footer from '../components/Navbar/Footer';
import Navbars from '../components/Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate } from 'react-router-dom';

const background = {
  background: "no-repeat url(../assets/sfsufountain.JPG)",
  backgroundSize: "100vw 100vh",
  overflow: "scroll"
}

function ErrorPage() {
  
  return (
  
    <><section className="vh-100 overflow-auto" style={background}>
      <div><Navbars></Navbars></div>
        <div className="d-flex overflow-auto align-items-center justify-content-center vh-100">
          <div className="card text-black opacity-75" style={{ borderRadius: '25px' }}>
            <div className="text-center opacity-100">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">404 ERROR </p>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">  OOPS NOTHING WAS FOUND HERE!</p>
              <p className="text-center  lead"> Click here to go back  </p>
              <a className="  btn btn-primary mb-5 mx-1 mx-md-4 mt-4 " href='./'> Go Home </a>
            </div>
          </div>
      </div>

    </section>
    <div><Footer></Footer></div></>
  )
}

export default ErrorPage