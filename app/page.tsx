/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">НАМАЛЕНИЕ</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/image01.jpg" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Пикантна Тортила</h2>
          <p>
          Насладете се на новата пикантна тортила със зашеметяващ вкус.
          Тя садържа тасманийска пикантна чушка, кисели краставички, гръцки маслини и царевица.
          Имате възможността да избирате между пилешко, свинско и месо от лъв.
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Пържени картофи</h2>
          <p>
            Новите пържени картофи, вече с повече подправки.
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/image02.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Още оферти</h2>
        <p className="textcenter">
          Потърсете още уникални оферти в нашето мобилно приложение.
           И не забравяите да използвате код "Clasher" в Ozone.bg за отстъпка на всички продукти до 5%.
            Очакваме ви!
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Меню</h2>
        <div className="gallery">
          <img className="gallery-image" src="/image04.jpg" alt="image01" />
          <img className="gallery-image" src="/image03.jpg" alt="image01" />
          <img className="gallery-image" src="/image02.jpg" alt="image01" />
          <img className="gallery-image" src="/image01.jpg" alt="image01" />
          <img className="gallery-image" src="/image04.jpg" alt="image01" />
          <img className="gallery-image" src="/image03.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Нашите клиенти</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/shaq.jpg" alt="avatar" />
            <h3 className="card-name">Shaq</h3>
            <p>
              Най-добрите!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/kobe.jpg" alt="avatar" />
            <h3 className="card-name">Kobe</h3>
            <p>
              Храната ми беше студена, но сервитьорите бяха много мили. 7/10.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/obama.jpg" alt="avatar" />
            <h3 className="card-name">Barak Obama</h3>
            <p>
              Уникално преживяване! Една от последните добри вериги за хранене в нашата страна!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/morgan.jpg" alt="avatar" />
            <h3 className="card-name">Morgan Freeman</h3>
            <p>
              Т о р т и л а.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
