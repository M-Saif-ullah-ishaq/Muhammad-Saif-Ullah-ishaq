import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  return <Component />;
}

function Component() {
  document.title = "M Saif Ullah ishaq";
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Resume />
      <Atchievments />
      <Portfolio />
      <Services />
      <Certificate />
      <Contact />
      <Footer />
      {/* {% comment %} atchievments section {% endcomment %} */}

      {/* {% comment %} portfolio section {% endcomment %} */}
    </>
  );
}
function Footer() {
  return (
    <footer class="footer py-3">
      <div class="container">
        <p class="small mb-0 text-light">
          &copy;
          <script>document.write(new Date().getFullYear());</script>
          Created With <i class="ti-heart text-danger"></i> By
          <a href="/home" target="_blank">
            <span class="text-danger" title="Bootstrap 4 Themes and Dashboards">
              Saif ullah
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
}
function Contact() {
  return (
    <div class="section contact" id="contact">
      <div id="map" class="map"></div>
      <div class="container" style={{ background: "#343a40" }}>
        <div class="row">
          <div class="col-lg-8">
            <div class="contact-form-card">
              <h4 class="contact-title">Send a message</h4>
              {/* {%block content%} {% endblock %} */}
              <ContactForm />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-info-card">
              <h4 class="contact-title">Get in touch</h4>
              <div class="row mb-2">
                <div class="col-1 pt-1 mr-1">
                  <i class="ti-mobile icon-md"></i>
                </div>
                <div class="col-10">
                  <h6 class="d-inline">
                    Phone : <br />
                    <span class="text-muted">+ (92) 325-5477432</span>
                    <br />
                    <span class="text-muted">+ (92) 347-0002018</span>
                  </h6>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-1 pt-1 mr-1">
                  <i class="ti-map-alt icon-md"></i>
                </div>
                <div class="col-10">
                  <h6 class="d-inline">
                    Address :<br />
                    <span class="text-muted">Rawalpindi,Punjab,Pakistan..</span>
                  </h6>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-1 pt-1 mr-1">
                  <i class="ti-envelope icon-md"></i>
                </div>
                <div class="col-10">
                  <h6 class="d-inline">
                    Email :<br />
                    <span class="text-muted">
                      muhammadsaifullahishaq1@gmail.com
                    </span>
                  </h6>
                </div>
              </div>
              <ul class="social-icons pt-3">
                <li class="social-item">
                  <a
                    class="text-danger"
                    href="https://web.facebook.com/profile.php?id=100083519769058"
                  >
                    <i class="ti-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a class="text-danger" href="/home">
                    <i class="ti-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    class="text-danger"
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  >
                    <i class="ti-google" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    class="text-danger"
                    href="https://www.linkedin.com/in/muhammad-saif-ullah-ishaq-133ab3271/?originalSubdomain=pk"
                  >
                    <i class="ti-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    class="text-danger"
                    href="https://github.com/M-Saif-ullah-ishaq?tab=repositories"
                  >
                    <i class="ti-github" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Portfolio() {
  return (
    <section class="section" id="portfolio">
      <div class="container">
        <h2 class="mb-5">
          Latest <span class="text-danger">Projects</span>
        </h2>
        <div class="row">
          <div class="blog-card">
            <div class="img-holder">
              <img src="/imgs/blog3.png" alt="CWP" />
            </div>
            <div class="content-holder">
              <h4 class="title">Collaborative Work Platform</h4>

              <p class="post-details">
                {/* <a href="/home">By: Admin</a> */}
                {/* {% comment %}
                <a href="/home"><i class="ti-heart text-danger"></i> 431</a>
                <a href="/home"><i class="ti-comment"></i> 312</a> {% endcomment %} */}
              </p>

              <p>
                The Collaborative Work Platform is a real-time web app enabling
                multiple users to collaborate simultaneously on shared projects.
                Built with React, Next.js, Liveblocks, and Convex, it features
                live editing, user authentication, and instant synchronization
                for a seamless and efficient teamwork experience.
              </p>

              <a
                href="https://github.com/M-Saif-ullah-ishaq/FWP44104"
                class="read-more"
              >
                Read more <i class="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
          <div class="blog-card">
            <div class="img-holder">
              <img src="/imgs/blog4.png" alt="porfolio" />
            </div>
            <div class="content-holder">
              <h6 class="title">Lets Go</h6>

              <p class="post-details">
                {/* <a href="/home"></a> */}
                {/* {% comment %}
                <a href="/home"><i class="ti-heart text-danger"></i> 234</a>
                <a href="/home"><i class="ti-comment"></i> 123</a> {% endcomment %} */}
              </p>

              <p>
                The Traveling List App helps users plan and organize their trips
                efficiently by creating a checklist of travel essentials. Built
                with React, it allows users to add, mark, and remove items,
                ensuring nothing is forgotten before a journey. The app features
                a simple and responsive interface for a smooth user experience
                across all devices
              </p>
              <a
                href="https://github.com/M-Saif-ullah-ishaq/Lets-go"
                class="read-more"
              >
                Read more <i class="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- end of blog wrapper --> */}
          <div class="blog-card">
            <div class="img-holder">
              <img src="/imgs/blog5.png" alt="porfolio" />
            </div>
            <div class="content-holder">
              <h6 class="title">Food Fast</h6>

              <p class="post-details">
                {/* <a href="/home"></a> */}
                {/* {% comment %}
                <a href="/home"><i class="ti-heart text-danger"></i> 234</a>
                <a href="/home"><i class="ti-comment"></i> 123</a> {% endcomment %} */}
              </p>

              <p>
                Food and Fast Co. is a React-based web application that allows
                users to browse a fast food menu and place orders online quickly
                and easily. The app is designed for a smooth and responsive user
                experience, helping customers select items, add them to the
                cart, and view order summaries before checkout.
              </p>
              <a
                href="https://github.com/M-Saif-ullah-ishaq/food-fast-"
                class="read-more"
              >
                Read more <i class="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- blog-card --> */}
          <div class="blog-card">
            <div class="img-holder">
              <img src="/imgs/blog2.png" alt="weather " />
            </div>
            <div class="content-holder">
              <h6 class="title">How's Weather </h6>

              <p class="post-details">
                {/* <a href="/home">By: Admin</a> */}
                {/* {% comment %}
                <a href="/home"><i class="ti-heart text-danger"></i> 456</a>
                <a href="/home"><i class="ti-comment"></i> 264</a>
                {% endcomment %} */}
              </p>
              <p>
                I've developed a responsive Django-based weather app designed
                for desktop use. This web application provides real-time weather
                information, including current conditions, forecasts, and
                historical data. It's optimized for various screen sizes,
                ensuring a seamless user experience across different devices.
                The app utilizes a user-friendly interface, allowing users to
                easily search for weather information by city or location. By
                leveraging the power of Django, this weather app offers a
                reliable and efficient solution for accessing up-to-date weather
                data.
              </p>

              <a
                href="https://github.com/M-Saif-ullah-ishaq/-how-s-weather-"
                class="read-more"
              >
                Read more <i class="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- end of blog wrapper --> */}
          {/* <!-- blog-card --> */}

          {/* <!-- end of blog wrapper --> */}
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section class="section" id="service">
      <div class="container">
        <h2 class="mb-5 pb-4">
          <span class="text-danger">My</span> Services
        </h2>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-vector text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">UI/Ux developer</h5>
                <p class="subtitle">
                  We craft exceptional digital experiences by blending
                  user-centered design with innovative technology. Our UI/UX
                  design services focus on creating visually appealing and
                  intuitive interfaces that optimize user engagement and drive
                  business success.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-write text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">
                  Full Stack Web Developer
                </h5>
                <p class="subtitle">
                  As a Full Stack web developer, I specialize in crafting robust
                  and scalable web applications. I leverage the power of
                  Django’s backend framework and React’s modern frontend
                  capabilities to build efficient, secure, and user-friendly
                  websites. My expertise includes database design, RESTful API
                  development, dynamic front-end integration, and deployment. I
                  am committed to delivering high-quality, full-stack solutions
                  tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-5">
              <div class="card-header has-icon">
                <i class="ti-package text-danger" aria-hidden="true"></i>
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="mb-3 card-title text-dark">
                  Machine Learning models
                </h5>
                <p class="subtitle">
                  As an AI/ML specialist, I develop intelligent systems that
                  leverage advanced algorithms and techniques to extract
                  valuable insights from data. My services include data
                  analysis, model development, deployment, and ongoing
                  maintenance. I specialize in creating solutions for tasks such
                  as image recognition, natural language processing, predictive
                  analytics, and more. By harnessing the power of AI/ML, I help
                  businesses make informed decisions and gain a competitive
                  edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Atchievments() {
  return (
    <section class="section bg-dark text-center">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-6 col-lg-3">
            <div class="row">
              <div class="col-5 text-right text-light border-right py-3">
                <div class="m-auto">
                  <i class="ti-alarm-clock icon-xl"></i>
                </div>
              </div>
              <div class="col-7 text-left py-3">
                <h1 class="text-danger font-weight-bold font40">100</h1>
                <p class="text-light mb-1">Hours Worked</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="row">
              <div class="col-5 text-right text-light border-right py-3">
                <div class="m-auto">
                  <i class="ti-layers-alt icon-xl"></i>
                </div>
              </div>
              <div class="col-7 text-left py-3">
                <h1 class="text-danger font-weight-bold font40">40</h1>
                <p class="text-light mb-1">Project Finished</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="row">
              <div class="col-5 text-right text-light border-right py-3">
                <div class="m-auto">
                  <i class="ti-face-smile icon-xl"></i>
                </div>
              </div>
              <div class="col-7 text-left py-3">
                <h1 class="text-danger font-weight-bold font40">20</h1>
                <p class="text-light mb-1">Happy Clients</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="row">
              <div class="col-5 text-right text-light border-right py-3">
                <div class="m-auto">
                  <i class="ti-heart-broken icon-xl"></i>
                </div>
              </div>
              <div class="col-7 text-left py-3">
                <h1 class="text-danger font-weight-bold font40">2k</h1>
                <p class="text-light mb-1">Coffee Drinked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Header() {
  return (
    <header class="header">
      <div class="container">
        <ul class="social-icons pt-3">
          <li class="social-item">
            <a
              class="text-danger"
              href="https://web.facebook.com/profile.php?id=100083519769058"
            >
              <i class="ti-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li class="social-item">
            <a class="text-danger" href="/home">
              <i class="ti-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li class="social-item">
            <a
              class="text-danger"
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            >
              <i class="ti-google" aria-hidden="true"></i>
            </a>
          </li>
          <li class="social-item">
            <a
              class="text-danger"
              href="https://www.linkedin.com/in/muhammad-saif-ullah-ishaq-133ab3271/?originalSubdomain=pk"
            >
              <i class="ti-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li class="social-item">
            <a
              class="text-danger"
              href="https://github.com/M-Saif-ullah-ishaq?tab=repositories"
            >
              <i class="ti-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div class="header-content" style={{ paddingTop: "100px" }}>
          <h4 class="header-subtitle">Hello, I am</h4>
          <h4 class="header-title">M SAIF ULLAH</h4>
          <h6 class="header-mono">
            <i>Full Stack Developer | UI/UX Designer</i>
          </h6>
          <DownloadButton />
        </div>
      </div>
    </header>
  );
}
function Resume() {
  return (
    <section class="section" id="resume">
      <div class="container">
        <h2 class="mb-5">
          <span class="text-danger">My</span> Resume
        </h2>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card">
              <div class="card-header">
                <div class="mt-2">
                  <h4>Experience</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div class="card-body">
                <h4 className="text-danger">
                  <a className="text-danger" href="/home">
                    CodeSoft
                  </a>
                </h4>
                <h5>Web Developer intern</h5>
                <h6 className="title text-danger">Nov 2023-Dev 2023</h6>
                <p class="subtitle">
                  During my internship at Codesoft as a Web Developer, I worked
                  on building interactive and responsive web applications using
                  React.js. I collaborated with the development team to
                  implement dynamic components, enhance UI/UX design, and
                  optimize performance. This experience strengthened my
                  front-end development skills and deepened my understanding of
                  modern web technologies.
                </p>
                <hr />
                <h4 className="text-danger">Freelancer</h4>
                <h5>Full Stack Web Developer</h5>
                <h6 class="title text-danger">2022 - Present</h6>
                <p class="subtitle">
                  As a Freelance Web Developer, I have developed dynamic and
                  collaborative web applications using React.js, Django, Convex,
                  Clerk, and Liveblocks. My work focuses on creating real-time,
                  secure, and interactive user experiences. I design scalable
                  solutions, handle authentication, and implement live
                  collaboration features, enhancing both functionality and user
                  engagement.
                </p>
                {/* <hr /> */}
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card">
              <div class="card-header">
                <div class="mt-2">
                  <h4>Education</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div class="card-body">
                <h6 class="title text-danger">2021 - 2025</h6>
                <p>bachelor's in Computer Science</p>
                <p class="subtitle">
                  I have completed my bachelor's degree in Computer Science from
                  the University of Engineering and Technology, Taxila,
                  Pakistan, with CGPA of 3.07/4.
                </p>
                <hr />
                <h6 class="title text-danger">2019 - 2021</h6>
                <p>Intermediate(ICS)</p>
                <p class="subtitle">
                  I completed my intermediate education from Army Public collage
                  Jarrar Camp, Rawalpindi, with a 90% score.
                </p>
                <hr />
                <h6 class="title text-danger">2017 - 2019</h6>
                <p>Matric</p>
                <p class="subtitle">
                  I completed my matriculation from Army Public School Jarrar
                  Camp, Rawalpindi, achieving an 83% score.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header">
                <div class="pull-left">
                  <h4 class="mt-2">Skills</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div class="card-body pb-2">
                <h6>hTML5 &amp; CSS3</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "97%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>JavaScript</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>React</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>C++</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>SQL</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Python</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Django</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <div class="pull-left">
                  <h4 class="mt-2">Languages</h4>
                  <span class="line"></span>
                </div>
              </div>
              <div class="card-body pb-2">
                <h6>English</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Urdu</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Arabic</h6>
                <div class="progress mb-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "37%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <div class="container-fluid">
      <div id="about" class="row about-section">
        <div class="col-lg-4 about-card">
          <h3 class="font-weight-light">Who am I ?</h3>
          <span class="line mb-5"></span>
          <h5 class="mb-3">
            A Full Stack Web Designer / Developer form Pakistan
          </h5>
          <p class="mt-20">
            "Full Satck developer building secure, scalable web apps, managing
            backend and databases."
          </p>
          <button class="btn btn-outline-danger">
            <i class="icon-down-circled2"></i>Download My CV
          </button>
        </div>
        <div class="col-lg-4 about-card">
          <h3 class="font-weight-light">Personal Info</h3>
          <span class="line mb-5"></span>
          <ul class="mt40 info list-unstyled">
            <li>
              <span>Birthdate</span> : 20/06/2003
            </li>
            <li>
              <span>Email</span> : muhammadsaifullahishaq1@gmail.com
            </li>
            <li>
              <span>Phone</span> : + (92) 325-5477432
            </li>
            <li>
              <span>Linkedin</span>:Muhammadsaifullahishaq@Linkdin.com
            </li>
            <li>
              <span>Address</span> : village Papeen,Post office Adhwal,Tehsil &
              District Rawalpindi,Punjab,Pakistan.
            </li>
          </ul>
          <ul class="social-icons pt-3">
            <li class="social-item">
              <a
                class="text-danger"
                href="https://web.facebook.com/profile.php?id=100083519769058"
              >
                <i class="ti-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li class="social-item">
              <a class="text-danger" href="/home">
                <i class="ti-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li class="social-item">
              <a
                class="text-danger"
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              >
                <i class="ti-google" aria-hidden="true"></i>
              </a>
            </li>
            <li class="social-item">
              <a
                class="text-danger"
                href="https://www.linkedin.com/in/muhammad-saif-ullah-ishaq-133ab3271/?originalSubdomain=pk"
              >
                <i class="ti-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li class="social-item">
              <a
                class="text-danger"
                href="https://github.com/M-Saif-ullah-ishaq?tab=repositories"
              >
                <i class="ti-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 about-card">
          <h3 class="font-weight-light">My Expertise</h3>
          <span class="line mb-5"></span>
          <div class="row">
            <div class="col-1 text-danger pt-1">
              <i class="ti-widget icon-lg"></i>
            </div>
            <div class="col-10 ml-auto mr-3">
              <h6>UX Design</h6>
              <p class="subtitle">
                Translate Figma designs into fully functional, responsive web
                interfaces.
              </p>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-1 text-danger pt-1">
              <i class="ti-paint-bucket icon-lg"></i>
            </div>
            <div class="col-10 ml-auto mr-3">
              <h6>Web Development</h6>
              <p class="subtitle">
                Full stack web developer with expertiece in React and Django
              </p>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-1 text-danger pt-1">
              <i class="ti-stats-up icon-lg"></i>
            </div>
            <div class="col-10 ml-auto mr-3">
              <h6>Machine learning</h6>
              <p class="subtitle">Teach computers to learn patterns</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Navbar() {
  const [showImage, setShowImage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If user scrolls down
      if (currentScrollY > 550) {
        setShowImage(false);
      }
      // If user scrolls up or back to top
      else if (currentScrollY <= 500) {
        setShowImage(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
      // console.log(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
      data-spy="affix"
      data-offset-top="510"
    >
      <div className="container">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="/homenavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse mt-sm-20 navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/homehome" class="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" class="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" class="nav-link">
                Resume
              </a>
            </li>
          </ul>
          <ul className="navbar-nav brand d-flex align-items-center">
            {showImage ? (
              <li>
                <img
                  src="/imgs/avatar2.jpg"
                  alt="Brand"
                  className="brand-img"
                />
              </li>
            ) : (
              <li>
                <span className="text-danger">
                  <h5 className="brand-title">Saif Ullah</h5>
                  <div className="brand-subtitle">
                    Full Stack Developer | UI/UX Designer
                  </div>
                </span>
              </li>
            )}
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#certificate" class="nav-link">
                Certificates
              </a>
            </li>
            <li class="nav-item">
              <a href="#portfolio" class="nav-link">
                Portfolio
              </a>
            </li>
            <li class="nav-item last-item">
              <a href="#contact" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send data to Django backend
    const response = await fetch("http://127.0.0.1:8000/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="field form-control"
          type="text"
          placeholder="Name *"
          required
        />
      </div>
      <div className="form-group">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="field form-control"
          type="email"
          placeholder="Email *"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="field form-control"
          placeholder="Message *"
          rows="7"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="form-control  btn btn-primary"
          style={{ background: "#dc3545" }}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad Saif Ullah Ishaq.zip"; // path inside public folder
    link.download = "Muhammad Saif Ullah Ishaq.zip"; // suggested filename
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="btn btn-primary"
      class="btn btn-primary btn-rounded"
      style={{
        background: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "10px",
      }}
    >
      <i class="ti-printer pr-2"></i>
      Print Resume
    </button>
  );
}
function Certificate() {
  return (
    <section class="section" id="certificate">
      <div class="container">
        <h2 class="mb-5">
          My <span class="text-danger">Certifications</span>
        </h2>
        <div class="row">
          <div class="blog-card">
            <div class="img-holder">
              <img src="/imgs/coursera1.jpg" alt="porfolio" />
            </div>
            <div class="content-holder">
              <h6 class="title">
                Introduction to Web Development using HTML,CSS and JavaScript
              </h6>

              <p class="post-details">
                <b>IBM,(via Coursera)</b>
              </p>

              <p>
                Gained foundational knowledge of front-end web technologies
                including HTML for structuring content, CSS for styling and
                layout, and JavaScript for interactivity. Developed hands-on
                experience in creating responsive, user-friendly web pages and
                understanding the core principles of modern web design and
                development.
              </p>
              <a href="/home" class="read-more">
                Read more <i class="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- end of blog wrapper --> */}

          {/* <!-- blog-card --> */}
          <div class="blog-card">
            <div class="img-holder">
              <img src="/imgs/coursera2.jpg" alt="weather " />
            </div>
            <div class="content-holder">
              <h6 class="title">
                Developing Back-end with Node.js and Express.js
              </h6>

              <p class="post-details">
                <b>IBM (via Coursera)</b>
                {/* <a href="/home"></a> */}
                {/* {% comment %}
                <a href="/home"><i class="ti-heart text-danger"></i> 456</a>
                <a href="/home"><i class="ti-comment"></i> 264</a>
                {% endcomment %} */}
              </p>
              <p>
                Learned how to build and manage server-side applications using
                Node.js and Express.js. Gained practical experience in creating
                RESTful APIs, handling routes, connecting with databases, and
                implementing middleware for efficient and scalable back-end
                development.
              </p>

              <a href="/home" class="read-more">
                Read more <i class="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- end of blog wrapper --> */}
          {/* <!-- blog-card --> */}
          <div class="blog-card">
            <div class="img-holder">
              <img src="/imgs/coursera3.jpg" alt="CWP" />
            </div>
            <div class="content-holder">
              <h4 class="title">Getting Started with Git and GitHub</h4>

              <p class="post-details">
                <b>IBM (via Coursera)</b>
                {/* <a href="/home">By: Admin</a> */}
                {/* {% comment %}
                <a href="/home"><i class="ti-heart text-danger"></i> 431</a>
                <a href="/home"><i class="ti-comment"></i> 312</a> {% endcomment %} */}
              </p>

              <p>
                Learned the fundamentals of version control using Git and
                collaboration through GitHub. Gained hands-on experience in
                managing repositories, branching, merging, and contributing to
                projects efficiently using modern version control workflows.
              </p>

              <a href="/home" class="read-more">
                Read more <i class="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
          {/* <!-- end of blog wrapper --> */}
        </div>
      </div>
    </section>
  );
}
