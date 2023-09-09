import logo from './img/img2.jpg';
import img1 from './img/img3.jpg';
import img2 from './img/img4.jpg';
import img3 from './img/img5.jpg';
import img4 from './img/img6.webp';
import img5 from './img/img7.webp';
import img6 from './img/img8.jpg';
import img7 from './img/img12.jpg';
import img8 from './img/img9.jpg';
import img9 from './img/img10.jpg';
import img10 from './img/img11.jpg';
import img11 from './img/img13.jpg';
import img12 from './img/img14.jpg';
import img13 from './img/img15.jpg';
import img14 from './img/img16.jpg';
import img15 from './img/img17.jpg';
import img16 from './img/img18.jpg';
import img17 from './img/img19.jpg';
import img18 from './img/img20.jpg';
import img19 from './img/img21.jpg';
import img20 from './img/img22.jpg';
import img21 from './img/img23.jpg';
import img22 from './img/img24.jpg';
import img23 from './img/img25.jpg';
import img24 from './img/img26.jpg';
import img25 from './img/img27.jpg';
import img26 from './img/img28.jpeg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card1 from './Components/Card';
import Card2 from './Components/Card1';
import Card3 from './Components/Card2';
import "./css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div className='color'>
        <Navbar className='nav'>
          <Container>
            <Navbar.Brand href="#" className='logo'>
              <i class="fa-solid fa-location-dot"></i>
              Traveller</Navbar.Brand>
            <Nav
              className="my-2 my-lg-0 color"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <NavDropdown title="Pages" id="navbarScrollingDropdown"></NavDropdown>
              <Nav.Link href="#">Destination</Nav.Link>
              <Nav.Link href="#">Tour</Nav.Link>
            </Nav>
            <Form className="d-flex me-5">
              <Form.Control
                type="search Destination"
                placeholder="Search Destination"
                className="me-3 serch"
                aria-label="Search Destination"
              />
              <Button className='btn1 m-auto'>Contact Us</Button>
            </Form>
          </Container>
        </Navbar>
        <header>
          <Container>
            <div className='content'>
              <img src={logo} alt="" className='mt-5' />
            </div>
            <img className='img1' src={img17} alt="" />
            <img className='img2' src={img18} alt="" />
            <img className='img3' src={img19} alt="" />
            <img className='img4' src={img1} alt="" />
          </Container>
        </header>
      </div>
      <section>
        <Container className='dastination'>
          <div className='m_auto'>
            <div className='title'>
              <h5><span>destination list</span></h5>
              <h2>Our Popular Packages</h2>
              <span className='line'><i class="fa-solid fa-star"></i></span>
              <p>Travelling fosters a medium to build human connections with one onther by learning<br /> about culture,food,new sites,music.Travelling fosters a medium to.</p>
            </div>
          </div>
          <div className='flex'>
            <div className='info-1'>
              <ul>
                <li><a href="/" className='personal'><i class="fa-solid fa-gauge"></i>Dashboard</a></li>
                <li><a href="/"><i class="fa-solid fa-ticket"></i>My Tickets</a></li>
                <li><a href="/"><i class="fa-regular fa-bookmark"></i>Favourite</a></li>
                <li><a href="/"><i class="fa-regular fa-envelope"></i>Message</a></li>
                <li><a href="/"><i class="fa-solid fa-coins"></i>Transaction</a></li>
                <li><a href="/"><i class="fa-solid fa-gear"></i>Settings</a></li>
              </ul>
            </div>
            <Card1 src={img2} title="Los Glaciar & Fitz Roy Trip" text="$120.55" rate="4.5" />
            <Card1 src={img12} title="Brooklyn ChriStmas Lights Tour" text="$120.55" rate="4.5" />
            <Card1 src={img13} title="Yucatan Peninsula & Caribbean" text="$120.55" rate="4.5" /><div className='info'></div>
            <Card1 src={img14} title="American Parks trail End Rapid City" text="$120.55" rate="4.5" />
            <Card1 src={img15} title="Java & Bali one life Advantures" text="$120.55" rate="4.5" />
            <Card1 src={img16} title="Discovery Island Kayaking Tour" text="$120.55" rate="4.5" />
          </div>
          <Button className='btn'>Explore More<i class="fa-solid fa-arrow-right-long"></i></Button>
        </Container>
        <div className='sec-1'>
          <div className='w-100'>
            <img src={img3} alt="" />
          </div>
          <div className='w50'>
            <div className='title'>
              <h5><span>Existing Journey</span></h5>
              <h2>Our Travelling Highlights </h2>
              <span className='line'><i class="fa-solid fa-star"></i></span>
              <p>Travelling fosters a medium to build human connections with one onther by <br />learning about culture,food,new sites,music.</p>
            </div>
            <Button className='btn2'>Explore More<i class="fa-solid fa-arrow-right-long"></i></Button>
          </div>
        </div>
        <div className='sec-2'>
          <div className='title'>
            <h5><span>From The Blog Post</span></h5>
            <h2>News & Articles</h2>
            <span className='line'><i class="fa-solid fa-star"></i></span>
            <p>Travelling fosters a medium to build human connections with one onther by learning<br /> about culture,food,new sites,music.
              Travelling fosters a medium to.</p>
          </div>
          <div className='news'>
            <div class="only_flex">
              <Card2 src={img4} />
              <Card2 src={img5} />
              <Card2 src={img6} />
            </div>
          </div>
        </div>
        <div className='sec-3'>
          <div className='w-1140'>
            <div className='path-1'>
              <div className='title'>
                <h5><span>Exclusive Photos</span></h5>
                <h2>Our Travell Gallery</h2>
                <span className='line'><i class="fa-solid fa-star"></i></span>
                <p>Travelling fosters a medium to build human connections with one onther by learning about<br /> culture,food,new sites,music.
                  Travelling fosters a medium to.</p>
              </div>
              <Button className='btn2'>Explore More<i class="fa-solid fa-arrow-right-long"></i></Button>
            </div>
            <div className='path-2'>
              <img src={img7} className="img0" width="400px" height="400px" alt="" />
              <img className='img5' src={img8} width="120px" height="120px" alt='' />
              <img className='img6' src={img9} width="120px" height="120px" alt='' />
              <img className='img7' src={img10} width="120px" height="120px" alt='' />
              <img className='img8' src={img11} width="120px" height="120px" alt='' />
            </div>
          </div>
        </div>
        <div class='sec-3'>
          <div className='w-1140'>
            <div className='title'>
              <h5><span>Exclusive Photos</span></h5>
              <h2>Our Travell Gallery</h2>
              <span className='line'><i class="fa-solid fa-star"></i></span>
              <p>Travelling fosters a medium to build human connections with one onther by learning about<br /> culture,food,new sites,music.
                Travelling fosters a medium to.</p>
            </div>
            <div className='flex'>
              <Card3 src={img20} logo={img23} />
              <Card3 src={img21} logo={img24} />
              <Card3 src={img22} logo={img25} />
            </div>
            <Button className='btn2'>Explore More<i class="fa-solid fa-arrow-right-long"></i></Button>
          </div>
        </div>
        <div className="rocket">
          <div className="w-1140 ">
            <div className="flex">
              <div className='title'>
                <h5><span>Our Newsletter</span></h5>
                <h2>Get Subscribe Our<br />Newsletter</h2>
                <span className='line'><i class="fa-solid fa-star"></i></span>
                <p>Travelling fosters a medium to build human connections with one onther<br /> by learning about culture,food,new sites,music Travelling.</p>
                <Button className="newsbutton" variant="rounded-pill mt-3  mb-3">Enter your email address</Button><br />
                <Button className='newsbutton px-5 py-2 rounded-pill'>Subscribe Now<i class="fa-solid fa-arrow-right ms-2"></i></Button>
              </div>
              <div className="bom2 ">
                <img src={img26} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='w-1140 flex'>
          <div className='intro'>
            <h4 className='logo'>
              <i class="fa-solid fa-location-dot"></i>
              Traveller</h4>
            <p>Travelling fosters a medium to build human<br /> connections with one onther by learning<br /> about culture,food,new sites,music.<br />Travelling fosters</p>
          </div>
          <div className='about'>
            <h4>About</h4>
            <ul>
              <li><a href='/'>Company</a></li>
              <li><a href='/'>Career</a></li>
              <li><a href='/'>Help Center</a></li>
              <li><a href='/'>Privacy</a></li>
            </ul>
          </div>
          <div className='about'>
            <h4>Services</h4>
            <ul>
              <li><a href='/'>Hotel Booking</a></li>
              <li><a href='/'>Car Rental</a></li>
              <li><a href='/'>Bus Ticket</a></li>
              <li><a href='/'>Flight Booking</a></li>
            </ul>
          </div>
          <div className='about'>
            <h4>Quick Links</h4>
            <ul>
              <li><a href='/'>Franch Experiance</a></li>
              <li><a href='/'>Ancient Rome Discover</a></li>
              <li><a href='/'>Get Into Naxos Island</a></li>
              <li><a href='/'>Vietnam Island Experiance</a></li>
            </ul>
          </div>
          <div className='contact'>
            <h4>Contact</h4>
            <ul>
              <li><a href='/'><i class="fa-solid fa-phone"></i>+91 1719534287</a></li>
              <li><a href='/'><i class="fa-solid fa-location-dot"></i>Tamilnadu, India</a></li>
              <li><a href='/'><i class="fa-regular fa-envelope"></i>Wpsarisa333@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <hr className='fhr' />
        <div className='copyright w-1140 only_flex'>
          <p className='fs-6'>Copyright 2021 Softfounder (www.Softfounder.vom) - Email: <a href="/">Wpsarisa333@gmail.com</a></p>
          <ul className='only_flex'>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
          </ul>
        </div>
      </footer>


    </>
  );
}

export default App;
