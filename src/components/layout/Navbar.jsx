export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Fon</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">الرئيسية</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">حول</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">الخدمات</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">اتصل بنا</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}