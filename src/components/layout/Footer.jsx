export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Fon</h3>
          <p>تطبيق حديث وسريع مبني بـ React</p>
        </div>
        <div className="footer-section">
          <h4>الروابط</h4>
          <ul>
            <li><a href="/">الرئيسية</a></li>
            <li><a href="#about">حول</a></li>
            <li><a href="#privacy">الخصوصية</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>تواصل</h4>
          <p>البريد: info@fon.com</p>
          <p>الهاتف: +966 50 000 0000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Fon App. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}