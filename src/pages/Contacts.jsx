import React from 'react';
import Navbar from '../components/Navbar'; // Используем правильный путь к компоненту Navbar

const Contact = () => {
  return (
    <div>
      <Navbar /> {/* Вставляем Navbar */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Контакты</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="contact-info">
            <h2 className="text-xl font-bold mb-2">Информация</h2>
            <p>
              <b>Название магазина:</b> Магазин "Шарм"
            </p>
            <p>
              <b>Сайт:</b> <a href="http://www.example.com">www.example.com</a>
            </p>
            <p>
              <b>Телефон:</b> +7 (123) 456-7890
            </p>
            <p>
              <b>Email:</b> info@example.com
            </p>
            <p>
              <b>Адрес:</b> ул. Примерная, д. 123, г. Примерово
            </p>
            <p>
              <b>Время работы:</b> Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00
            </p>
          </div>
          <div className="social-media">
            <h2 className="text-xl font-bold mb-2">Социальные сети</h2>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/example"
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5v14h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m4 0h-4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4m-4-18v14a4 4 0 0 0 4 4h4a4"/>
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/example"
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 3c-1.5 0-3 .5-4.1 1.4-1.7-1.1-3.8-1.1-5.5 0-2.3 1.5-3.5 4-3.1 6.6-.6 0-1.3-.1-2 .1C2.8 11.6 2 13.3 2 15c0 3.3 2.7 6 6 6 4.5 0 7.5-4.2 7.7-8.2 2.6-.1 4.9-1.4 6.4-3.4.3-.5-.2-1.1-.8-1.1z"/>
                  </svg>
                  Twitter
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
