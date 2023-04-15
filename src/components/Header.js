import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/logo.png" />
      </div>
      <button>Get In Touch</button>
    </header>
  );
}

export default Header;
