import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="heroSection">
        <div className="heroImg">
          <div className="heroImgOverlay"></div>
          <div className="heroText">
            <h1>Leading the Charge for Better Health.</h1>
            <p>
              Welcome to Foot Soldiers for Health. Our dedicated team offers
              top-quality, compassionate care tailored to your needs. From
              check-ups to advanced treatments, we're committed to your
              well-being. Join us in championing health and wellness.
            </p>
            <Link className="btn" to="">
              Learn More →
            </Link>
          </div>
          <img src="\images\heroImg.jpg"></img>
        </div>
      </div>

        <section className="who-are-we sectionPadding2">
          <div className="container">
            <div className="image">
              <img src="/images/homeImg2.jpg" alt="Who Are We Image" />
            </div>
            <div className="text">
              <p className="secDes1">About Us</p>
              <h1 className="secTitle">Who are we?</h1>
              <p className="secDes2">
                Foot Soldiers for Health is committed to revolutionizing healthcare for underserved communities through innovative solutions and comprehensive services. Our mission encompasses maternal, neonatal, and child health, eye care, nutrition, and more. <br/><br/> We actively support healthcare start-ups and create sustainable financing models. Explore how our dedicated team and impactful projects are bridging healthcare gaps and empowering communities.
              </p>
              <div className="homeUsp">
                 <div className="box">
                  <i class="fa-solid fa-check"></i>
                  <p>Innovative Healthcare Solutions</p>
                 </div>
                 <div className="box">
                  <i class="fa-solid fa-check"></i>
                  <p>Diverse Medical Services</p>
                 </div>
                 <div className="box">
                  <i class="fa-solid fa-check"></i>
                  <p>Support for Healthcare Start-ups</p>
                 </div>
                 <div className="box">
                  <i class="fa-solid fa-check"></i>
                  <p>Community Engagement and Empowerment</p>
                 </div>
                 <div className="box">
                  <i class="fa-solid fa-check"></i>
                  <p>Alternative Healthcare Financing Models</p>
                 </div>
                 <div className="box">
                  <i class="fa-solid fa-check"></i>
                  <p>Comprehensive Public Health Projects</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeNumbers">
           <div className="hnCard">
              <h1>5+</h1>
              <p>Years Of Experience</p>
           </div>

           <div className="hnCard">
              <h1>2</h1>
              <p>Medical Centers</p>
           </div>

           <div className="hnCard">
              <h1>100+</h1>
              <p>Happy Patients</p>
           </div>
        </section>


        <section style={{marginTop:'30px'}} className="home-services sectionPadding2">
        <div>
          <p style={{textAlign:"center"}} className="secDes1">Complete Medical Care</p>
          <h1 className="secTitle">Out Services</h1>
        </div>
        <div className="home-service-card-container">
            <div className="home-service-card">
               <img src="/svgs/newborn-mother-svgrepo-com.svg"></img>
               <h3>Maternal, Neonatal, and Child Health</h3>
               <p>Comprehensive care for mothers, newborns, and children, ensuring health and well-being through preventive measures and specialized treatments.</p>
            </div>
            
            <div className="home-service-card">
               <img src="/svgs/eye-scan-svgrepo-com.svg"></img>
               <h3>Eye Care</h3>
               <p>Expert eye care services, including vision screenings, treatment for eye conditions, and corrective solutions to maintain optimal eye health.</p>
            </div>
            
            <div className="home-service-card">
               <img src="/svgs/meal-application-calculate-diet-nutrition-analysis-low-calorie-svgrepo-com.svg"></img>
               <h3>Nutrition</h3>
               <p>Personalized nutrition programs and guidance to promote healthy eating habits and address dietary needs for overall well-being.</p>
            </div>
            
            <div className="home-service-card">
               <img src='/svgs/health-medical-svgrepo-com.svg'></img>
               <h3>Primary Care</h3>
               <p>Accessible and continuous care for general health needs, including routine check-ups, preventive care, and management of chronic conditions.</p>
            </div>
            
            <div className="home-service-card">
               <img src='/svgs/girl-svgrepo-com.svg'></img>
               <h3>Adolescent Health</h3>
               <p>Specialized care for teenagers focusing on physical, mental, and emotional health to support healthy development during adolescence.</p>
            </div>
            
            <div className="home-service-card">
               <img src='/svgs/disability-svgrepo-com (1).svg'></img>
               <h3>Disability</h3>
               <p>Supportive services and resources for individuals with disabilities, aimed at improving quality of life and enhancing independence.</p>
            </div>
        </div>
        </section>

        <section style={{marginTop:'30px'}} className="sectionPadding">
          <div>
            <p style={{textAlign:"center"}} className="secDes1">Our Team</p>
            <h1 style={{textAlign:"center"}} className="secTitle">Meet Our Specialists</h1>
          </div>
          <div className="homeTeamContainer">
            <div className="homeTeamCard">
               <img src="/images/beautiful-young-female-doctor-looking-camera-office-min.jpg"></img>
               <h3>Name</h3>
               <p>Description</p>
            </div>
            <div className="homeTeamCard">
               <img src="/images/beautiful-young-female-doctor-looking-camera-office-min.jpg"></img>
               <h3>Name</h3>
               <p>Description</p>
            </div>
            <div className="homeTeamCard">
               <img src="/images/beautiful-young-female-doctor-looking-camera-office-min.jpg"></img>
               <h3>Name</h3>
               <p>Description</p>
            </div>
            <div className="homeTeamCard">
               <img src="/images/beautiful-young-female-doctor-looking-camera-office-min.jpg"></img>
               <h3>Name</h3>
               <p>Description</p>
            </div>
          </div>
        </section>

        <section className="miniGallery sectionPadding">
            <img src="/images/heroImg.jpg"></img>
            <img src="/images/heroImg.jpg"></img>
            <img src="/images/heroImg.jpg"></img>
            <img src="/images/heroImg.jpg"></img>
            <img src="/images/heroImg.jpg"></img>
            <img src="/images/heroImg.jpg"></img>
            <img src="/images/heroImg.jpg"></img>
            <div><Link className="linkType1" to='/gallery'>See More</Link></div>
        </section>
      <Footer />
    </div>
  );
};

export default Home;
