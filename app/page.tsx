/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">Enter your title</h1>
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
        <p>
          Потърсете още уникални оферти. Очакваме ви!
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
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
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
