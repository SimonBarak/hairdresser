import Head from "next/head";

export default function Home() {
  return (
    <div className="font-body">
      <Head>
        <title>Kadeřnictví Vlaďka K</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className=" ">
        <section className="relative overflow-hidden">
          <header className="flex justify-between">
            <a href="/" className="block w-36 md:w-44 lg:w-48 p-4">
              <img src="./img/logo.png" alt="Logo kadeřnictví Vlaďka K" />
            </a>
          </header>
          <div className="z-10 max-w-3xl mx-auto pt-28 lg:pt-80 "></div>
          <img
            style={{ zIndex: -1 }}
            className="absolute top-0 z-0 h-screen w-screen object-cover"
            loading="lazy"
            srcSet="https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1633088226/vladkak/bg2.jpg 500w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1633088226/vladkak/bg2.jpg 710w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1000/v1633088226/vladkak/bg2.jpg 1000w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1633088226/vladkak/bg2.jpg 1420w"
            src="https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1633088226/vladkak/bg2.jpg"
            alt="Ukázka účesu z kadeřnictví Vlaďka K"
          />
        </section>
        <div className="bg-amber-50">
          <section id="mapa" className="m-auto text-center px-4 py-20">
            <div className="mb-8 lg:text-xl">Objednávejte se telefonicky</div>
            <div className="text-4xl lg:text-6xl mb-8">602 966 633</div>
            <div className="text-gray-500 lg:text-xl">
              Objednávky na svatební účesy
              <br />v současné době nepřijímám
            </div>
          </section>
          <section id="map" className="max-w-3xl mx-auto px-4 pb-14">
            <h2 className="text-center pb-14 text-2xl">
              Vstup z parkoviště v zadní části budovy
            </h2>
            <img src="./img/map.jpg" alt="" className="-" />
            <div className="text-center -translate-y-8">
              <a
                href="https://goo.gl/maps/zuF3ZV3bLTTG8tsf7"
                alt="Link to google maps"
                className="bg-gray-900 p-4 px-16 text-xl rounded-lg text-amber-50"
              >
                Google Maps
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900">
        <div className="pt-28 pb-28">
          <table className="text-amber-50 m-auto">
            <tbody>
              <tr>
                <td className="p-2">E-mail:</td>
                <td className="p-2">kadernictvi@vladkak.cz</td>
              </tr>
              <tr>
                <td className="p-2">Adresa:</td>
                <td className="p-2">
                  Hrotovická 1202/27
                  <br />
                  Třebíč, 674 01
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full text-center pt-28 pb-96">
          <a href="https://simon-barak.link/" className="text-gray-600 text-sm">
            Šimon Bařák
          </a>
        </div>
      </footer>
    </div>
  );
}
