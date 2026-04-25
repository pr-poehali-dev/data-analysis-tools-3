export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ФОЛЬМАНН
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Продукция
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О компании
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              ХИМИЯ
              <br />
              БУДУЩЕГО
            </h1>
            <p className="text-xl max-w-xl">
              Инновационные химические решения для промышленности. Точность формул, надёжность поставок, результат — в каждой молекуле.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ПРОДУКЦИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">01</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Промышленные растворители</h3>
              <p className="text-neutral-400">Высокочистые растворители для точных производственных процессов и спецприменений</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Защитные покрытия</h3>
              <p className="text-neutral-400">Инновационные антикоррозийные и защитные составы для металлоконструкций и поверхностей</p>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Специальная химия</h3>
              <p className="text-neutral-400">Разработка и производство реагентов под технические задачи заказчика</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О КОМПАНИИ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                «Фольманн» — производитель инновационной химической продукции, ориентированный на промышленный сектор. Мы соединяем научный подход с производственной точностью.
              </p>
              <p className="mb-6">
                Наши продукты разрабатываются с применением передовых технологий синтеза и проходят строгий контроль качества. Каждая партия соответствует международным стандартам и требованиям заказчика.
              </p>
              <p className="mb-6">
                Компания работает с предприятиями нефтехимии, машиностроения, металлургии и других отраслей — от малотоннажных заказов до крупносерийных поставок.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Точность формул</li>
                    <li>Контроль качества</li>
                    <li>Надёжность поставок</li>
                    <li>Экологичность</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Направления</h3>
                  <ul className="space-y-2">
                    <li>Нефтехимия</li>
                    <li>Машиностроение</li>
                    <li>Металлургия</li>
                    <li>Спецхимия</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Оставьте заявку — наш менеджер свяжется с вами и подберёт оптимальное решение.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:info@follmann.ru" className="hover:underline">
                    info@follmann.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Опишите ваш запрос или задачу"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2026 Фольманн. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Почта
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}