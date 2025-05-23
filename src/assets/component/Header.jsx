function Header(){
return(
<>
  <div className="pre-header" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
              <li><a href="#"><i className="bi bi-google"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo.png" alt="" style={{maxWidth: "112px"}} />
                    </a>
                      <ul class="nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> 
                 
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>

</>
    
)


}

export default Header