import React, { useState } from 'react'
import Footer from '../external-component/Footer';
import LeftBar from '../external-component/LeftBar';

function HomePage() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const scoreAdd = () => {
    console.log("kaam hua");
    if (count < 11) {
      setCount(count + 1)
    } else {
      setStatus(true);
      setMessage("Congrats ! Bro you are selected")
    }
  };

  const scoreRemove = () => {
    if (count === 0) {

    } else {
      setCount(count - 1)
    }
  };

  const scoreReset = () => {
    setCount(0);
    setMessage("");
    setStatus(false);
  };


  return (
    <div>
      <div className='page-setup'>
        <section id="one">
          <div className="content">
            <div className="text-content">
              <h1 className="white">Providing Special care
                For <strong>Our Employees!</strong>
              </h1>
              <h4 className="blackish">We offer special services</h4>
            </div>
          </div>
        </section>

        <section id="one-half" className="goblack">
          <span><img src="https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=1024x1024&w=is&k=20&c=w15AGFL7iZtN6aXbIlrUWZbkft2HtZq9TnKrmp5Jr2g=" alt="company image" /></span>

          <div className="half-content">
            <div className="half__text">
              <h1>About Us</h1>
              <p>User management describes the ability for someone, usually an IT professional, to manage employees’ digital identities, including keeping them up to date and provisioning, monitoring, changing, and revoking their access to different resources. Those resources can be anything from devices, to applications, to networks, to much more.</p>
            </div>
            <div className="half__boxes">
              <div className="box">
                <span href="#"><i className="fas fa-paw logo"></i></span>
                <h2>Our Mission</h2>
                <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
              </div>
              <div className="box">
                <span href="#"><i className="fas fa-paw logo"></i></span>
                <h2>Our Vision</h2>
                <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
              </div>
            </div>
          </div>

        </section>

        User management describes the ability for someone, usually an IT professional, to manage employees’ digital identities, including keeping them up to date and provisioning, monitoring, changing, and revoking their access to different resources. Those resources can be anything from devices, to applications, to networks, to much more.
        <section id="two">
          <div className="heading ">
            <h1>What We Do</h1>
            <p className="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
              eaque ipsa quae ab
              illo inventore.</p>

          </div>


          <div className="container">
            <div className="info">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img1.jpg" alt="" /></span>
              <div className="info__text">
                <h1>Donec sed teus enime</h1>

                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h5 className="">READ MORE</h5>
              </div>
            </div>
            <div className="info">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img2.jpg" alt="" /></span>
              <div className="info__text">
                <h1>It's enim ad minim aute</h1>

                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <h5 className="">READ MORE</h5>
              </div>
            </div>
            <div className="info">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img3.jpg" alt="" /></span>
              <div className="info__text">
                <h1>Ullamco laboris nisi uts</h1>

                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <h5 className="">READ MORE</h5>
              </div>
            </div>
          </div>

        </section>

{/* 
        <section id="four" className="goblack">
          <article>
            <h1>Happy Customers</h1>
            <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.</p>

            <p>Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat. Lorem
              ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>

            <div className="article__icon">
              <div className="customer__info">
                <span><i className="fas fa-user-plus"></i> 100K+</span>
                <pre>         Customers</pre>
              </div>

              <div className="customer__info">
                <span><i className="fas fa-thumbs-up"></i> 100%</span>
                <pre>        Satisfaction</pre>
              </div>
            </div>
          </article>

          <div className="four__info">
            <div className="some__info">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi1.jpg" alt="" /></span>
              <div className="four__text">
                <h1>&#8220</h1>
                <p>
                  Dsuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  "
                </p>

                <h4>Mario Spe</h4>
              </div>
            </div>

            <div className="some__info">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi2.jpg" alt="" /></span>
              <div className="four__text">
                <h1>&#8220</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. "
                </p>
                <h4>Petey Cru</h4>
              </div>
            </div>

          </div>

        </section> */}

        {/* <section id="gallery">
          <div className="heading ">
            <h1>Our Gallery</h1>
            <p className="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
              eaque ipsa quae ab illo inventore.</p>


          </div>
          <div className="gallery__container">
            <div className="first__row row">
              <span className="col-md-3"><img className="shine" src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g1.jpg" alt="" /></span>
              <span className="col-md-3"><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g22.jpg" alt="" /></span>
              <span className="col-md-3"><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g3.jpg" alt="" /></span>
              <span className="col-md-3"><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g4.jpg" alt="" /></span>

            </div>
            <div className="second__row row">
              <div className="first__column">
                <span className='col-md-6'><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g8.jpg" alt="" /></span>
                <span className='col-md-6'><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g6.jpg" alt="" /></span>
              </div>
              <span className="big__image">
                <img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g9.jpg" alt="" />
              </span>
              <div className="first__column">
                <span className='col-md-6'><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g7.jpg" alt="" /></span>
                <span className='col-md-6'><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g5.jpg" alt="" /></span>
              </div>
            </div>
          </div>

        </section> */}

        {/* <section id="five" className="goblack">
          <div className="dog__image"><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/dog2.png" alt="" /></div>
          <div className="dog__container">
            <div className="dog__boxes">
              <div className="dog__box">
                <span><i className="fas fa-thumbs-up"></i></span>
                <h4>Dog Sitting</h4>
                <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
              </div>
              <div className="dog__box">
                <span><i className="fas fa-paw"></i></span>
                <h4>Dog Sitting</h4>
                <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
              </div>
            </div>
            <div className="dog__boxes">
              <div className="dog__box">
                <span><i className="fas fa-bullhorn"></i></span>
                <h4>Dog Sitting</h4>
                <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
              </div>
              <div className="dog__box">
                <span><i className="fas fa-cut"></i></span>
                <h4>Dog Sitting</h4>
                <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
              </div>
            </div>
          </div>

        </section> */}

        <section id="six">
          <h5>PET LOVERS</h5>
          <h1>Our Team Is Filled With Highly Dedicated Pet Lovers</h1>

          <button className="btn w-btn">Read More</button>

        </section>


        <section id="seven" className="goblack">
          <div className="heading ">
            <h1>Latest News</h1>
            <p className="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
              eaque ipsa quae ab illo inventore</p>

          </div>


          <div className="container container__bg goblack">
            <div className="info goblack">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog3.jpg" alt="" /></span>
              <div className="info__text">
                <pre>                                                   May 5, 2021</pre>
                <h1>Hello world!</h1>



                <h5 className="">READ MORE </h5>
              </div>
            </div>
            <div className="info goblack">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog2.jpg" alt="" /></span>
              <div className="info__text">
                <pre>                                                    May 5, 2021</pre>
                <h1>How to keep your dog cool this summer</h1>



                <h5 className="">READ MORE </h5>
              </div>
            </div>
            <div className="info goblack">
              <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog1.jpg" alt="" /></span>
              <div className="info__text">
                <pre>                                                     May 5, 2021</pre>
                <h1>Solution for grooming behavior problems</h1>



                <h5 className="">READ MORE </h5>
              </div>
            </div>
          </div>

        </section>
      </div>
      <Footer />
    </div>
    
  )
}


export default HomePage;