import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="assets/logo.png" />
      </div>
      <address className="footer-contact">
        <h4>Contact Us</h4>
        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </address>

      <nav className="footer-nav">
        <h4>More</h4>
        <a href="">About </a>
        <a href="">Products</a>
        <a href="">Career</a>
        <a href="">Contact Us</a>
      </nav>
      <nav className="footer-social">
        <h4>Social Links</h4>
        <div className="footer-social-links">
          <a href="">
            <img src="assets/insta.png" />
          </a>
          <a href="">
            <img src="assets/twitter.png" />
          </a>
          <a href="">
            <img src="assets/fb.png" />
          </a>
        </div>
        <p className="copy-right">© 2022 Food Truck Example</p>
      </nav>
    </footer>
  );
}

export default Footer;
