import React from "react";
import "./App.css";

const menu = [
  {
    category: "Классические кисели",
    items: [
      { name: "Вишнёвый кисель", description: "Яркий и насыщенный, как лето.", price: "150₽" },
      { name: "Клюквенный кисель", description: "Традиционный вкус, любимый с детства.", price: "150₽" },
      { name: "Молочный кисель", description: "Нежный и сливочный.", price: "140₽" },
      { name: "Яблочный кисель", description: "Свежий и ароматный яблочный вкус.", price: "170₽" },
      { name: "Черничный кисель", description: "Нежный и насыщенный черничный вкус.", price: "190₽" },
    ],
  },
  {
    category: "Авторские кисели",
    items: [
      { name: "Маракуйя-мята", description: "Экзотика и свежесть в одном стакане.", price: "180₽" },
      { name: "Имбирно-апельсиновый", description: "Бодрящий.", price: "180₽" },
      { name: "Кисель без сахара", description: "Для сторонников здорового образа жизни.", price: "160₽", image: "/кисель без сахара.png" },
      { name: "Лавандово-лимонный", description: "Утонченный аромат и нежная кислинка.", price: "190₽", image: "/лавандово-лимонный.png" },
      { name: "Роза-малина", description: "Изысканный букет с легкой терпкостью.", price: "190₽", image: "/роза-малина.png" },
    ]
  },
  {
    category: "Дополнения",
    items: [
      { name: "Пирожки с начинками", description: "Свежая выпечка к вашему напитку.", price: "70₽" },
      { name: "Круассаны", description: "Хрустящие и ароматные.", price: "90₽", image: "круассаны.png" },
      { name: "Мороженое с киселём", description: "Освежающее лакомство.", price: "120₽" },
      { name: "Травяной чай", description: "Ароматный и натуральный.", price: "100₽" },
      { name: "Домашний компот", description: "Освежающий напиток.", price: "100₽" },
    ],
  },
];

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "Меню", href: "#menu" },
  { label: "Мы", href: "#about" },
  { label: "Где мы", href: "#worktime" },
];

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src="/logo.jpeg" alt="Логотип" className="logo-img" />
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.label === "Главная" ? (
                <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Главная</a>
              ) : link.label === "О нас" ? (
                <a href={link.href} onClick={e => {
                  e.preventDefault();
                  const about = document.getElementById('about');
                  if (about) {
                    const y = about.getBoundingClientRect().top + window.pageYOffset - 60;
                    window.scrollTo({top: y, behavior: 'smooth'});
                  }
                }}>О нас</a>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <header className="App-header" id="home">
        <h1 className="kiselnaya-title">Кисельная</h1>
        <p className="kiselnaya-subtitle">Откройте для себя традиционные вкусы и авторские рецепты в уютной атмосфере!</p>
        <div className="contacts-block">
          <div className="contact-item">
            <h4>Наш адрес</h4>
            <p>г. Липецк, ул. Кисельная, д. 14/88</p>
            <div className="contact-subtext">В самом центре города, рядом с метро</div>
          </div>
          <div className="contact-item" id="worktime">
            <h4>Часы работы</h4>
            <p>Пн-Вс: 10:00 – 24:00</p>
            <div className="contact-subtext">Без выходных и перерывов</div>
          </div>
          <div className="contact-item">
            <h4>Свяжитесь с нами</h4>
            <p>+7 (952) 591-87-21<br/>kiselnaya-lip@cafe.ru<br/>
              <a href="https://t.me/Kisel_lip_bot" target="_blank" rel="noopener noreferrer">@Kisel_lip_bot (Telegram)</a>
            </p>
            <div className="contact-subtext">Звоните или пишите — всегда рады!</div>
          </div>
        </div>
      </header>
      <main>
        <div className="menu-title-block">
          <h2 id="menu">Меню</h2>
        </div>
        {/* Классические кисели */}
        {menu
          .filter(section => section.category === "Классические кисели")
          .map(section => (
            <div key={section.category} className="menu-section">
              <h3>{section.category}</h3>
              <ul className="classic-row">
                {section.items.slice(0, 3).map(item => (
                  <li key={item.name} className="menu-item classic-menu-item">
                    <img
                      src={`/${item.name}.jpg`}
                      alt={item.name}
                      className="menu-img"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = `/${item.name}.jpeg`;
                      }}
                    />
                    <div>
                      <span className="item-name">{item.name}</span> <span className="item-desc">{item.description}</span>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
              <ul className="classic-row">
                {section.items.slice(3).map(item => (
                  <li key={item.name} className="menu-item classic-menu-item">
                    <img
                      src={`/${item.name}.jpg`}
                      alt={item.name}
                      className="menu-img"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = `/${item.name}.jpeg`;
                      }}
                    />
                    <div>
                      <span className="item-name">{item.name}</span> <span className="item-desc">{item.description}</span>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        {/* Авторские кисели */}
        {menu
          .filter(section => section.category === "Авторские кисели")
          .map(section => (
            <div key={section.category} className="menu-section">
              <h3>{section.category}</h3>
              <ul className="author-row">
                {section.items.map(item => (
                  <li key={item.name} className="menu-item author-menu-item">
                    <img
                      src={item.image ? item.image : `/${item.name}.jpg`}
                      alt={item.name}
                      className="menu-img"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = item.image ? item.image : `/${item.name}.jpeg`;
                      }}
                    />
                    <div>
                      <span className="item-name">{item.name}</span> <span className="item-desc">{item.description}</span>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        {/* Остальные разделы */}
        {menu
          .filter(section => section.category !== "Классические кисели" && section.category !== "Авторские кисели")
          .map(section => (
            <div key={section.category} className="menu-section">
              <h3>{section.category}</h3>
              <ul className={section.category === "Дополнения" ? "additions-grid" : undefined}>
                {section.items.map(item => (
                  <li key={item.name} className={"menu-item" + (section.category === "Дополнения" ? " addition-menu-item" : "") }>
                    <img
                      src={item.image ? item.image : `/${item.name}.jpg`}
                      alt={item.name}
                      className="menu-img"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = item.image ? item.image : `/${item.name}.jpeg`;
                      }}
                    />
                    <div>
                      <span className="item-name">{item.name}</span> <span className="item-desc">{item.description}</span>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {/* Блок 'О нас' в конце страницы */}
        <section id="about" className="about-section about-two-columns">
          <div className="about-block about-history">
            <div className="about-history-block">
              <h2>Наша история</h2>
              <p className="about-history-text">Кафе "Кисельная" было основано с любовью к старинным русским традициям и желанием поделиться этим уникальным напитком с современным миром. Мы используем только свежие ягоды, фрукты и натуральные ингредиенты, чтобы каждый кисель был не только вкусным, но и полезным. Приглашаем вас в мир тепла, уюта и незабываемых вкусов!<br/><br/>Наше кафе — это место, где традиции встречаются с инновациями, создавая уникальный опыт для каждого гостя. Мы гордимся нашим меню и искренне верим, что кисель может быть современным и захватывающим напитком.</p>
            </div>
          </div>
          <div className="about-block about-reviews">
            <h3>Отзывы наших гостей</h3>
            <div className="reviews-grid">
              <div className="review-column">
                <div className="review-avatar"><img src="/отзыв1.png" alt="Аватар Вадик" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', transform: 'scale(1.2)'}} /></div>
                <div className="review-text">"Спасибо папаша."</div>
                <div className="review-stars">★★★★★</div>
                <div className="review-user">Маргарин</div>
              </div>
              <div className="review-column">
                <div className="review-avatar"><img src="/отзыв2.png" alt="Аватар Маргарин" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', transform: 'scale(1.2)'}} /></div>
                <div className="review-text">"Кисельная моя любовь и в каждом окне<br/>Солдаты трущоб улыбаются мне"</div>
                <div className="review-stars">★★★★★</div>
                <div className="review-user">Вадик</div>
              </div>
              <div className="review-column">
                <div className="review-avatar"><img src="/отзыв3.png" alt="Аватар Мария" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: '60% 50%'}} /></div>
                <div className="review-text">"Кчау."</div>
                <div className="review-stars">★★★★★</div>
                <div className="review-user">Ондрей</div>
              </div>
              <div className="review-column">
                <div className="review-avatar"><img src="/отзыв4.png" alt="Аватар Птица" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} /></div>
                <div className="review-text">"Синица,но без пива"</div>
                <div className="review-stars">★★★★★</div>
                <div className="review-user">Птица</div>
              </div>
            </div>
          </div>
        </section>
        {/* Контактная информация */}
      </main>
      <footer className="footer" id="contacts">
        <p>© Кафе "Кисельная", 2025</p>
      </footer>
    </div>
  );
}

export default App;
