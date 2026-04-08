export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>مرحباً بك في Fon</h1>
        <p>تطبيق حديث وسريع مبني بـ React و Vite</p>
        <button className="cta-button">ابدأ الآن</button>
      </section>
      
      <section className="features">
        <h2>المميزات</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>سريع</h3>
            <p>أداء عالي مع Vite</p>
          </div>
          <div className="feature-card">
            <h3>حديث</h3>
            <p>تقنيات حديثة وأفضل الممارسات</p>
          </div>
          <div className="feature-card">
            <h3>موثوق</h3>
            <p>مستضاف على Vercel</p>
          </div>
        </div>
      </section>
    </div>
  )
}