import Head from "next/head";

const imagesData = [
  { src: "./img/img0.jpg" },
  { src: "./img/img2.jpg" },
  { src: "./img/img1.jpg" },
  { src: "./img/img3.jpg" },
];

export default function Home() {
  const imagesEls = imagesData.map((img) => (
    <img
      key={img.src}
      src={img.src}
      alt="Vercel Logo"
      className="bg-cover block w-full"
    />
  ));

  return (
    <div className="font-body">
      <Head>
        <title>Kadeřnictví Vlaďka K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" ">
        <section className="relative overflow-hidden">
          <header className="flex justify-between">
            <div className="w-20 lg:w-24">
              <img src="./img/logo.svg" alt="Logo kadeřnictví Vlaďka K" />
            </div>
          </header>
          <div className="z-10 max-w-3xl mx-auto pt-72">
            <h1 className="text-4xl lg:text-6xl font-normal mb-20 px-4">
              Podpořte svou
              <br />
              přirozenou krásu
            </h1>
            <div className="text-center mb-14">
              <a
                href="/kontakt"
                className="bg-gray-600 p-4 px-20 text-xl rounded-lg text-amber-50"
              >
                Objednat se
              </a>
            </div>
          </div>
          <img
            style={{ zIndex: -1 }}
            className="absolute top-0 z-0 h-screen w-screen object-cover"
            src="./bg.jpg"
            alt="Ukázka účesu z kadeřnictví Vlaďka K"
          />
        </section>
        <div className="bg-amber-50">
          <section className="max-w-3xl mx-auto pt-14 pb-14 px-4">
            <h3 className="text-2xl">
              <div>Studio Vlaďka K</div>
              <div className="text-gray-500">
                Dámské, pánské a dětské kadeřnictví.
              </div>
            </h3>
          </section>
          <section className="max-w-3xl mx-auto  px-4 pb-14">
            <div className="grid md:grid-flow-col gap-2">
              <div className="bg-white shadow-lg p-4 rounded-lg">
                <div className="mb-6">📣 Otevřela jsem studio v Třebíči.</div>
                <div className="text-sm text-gray-300">10. 9. 2021</div>
              </div>
              <div className="bg-white shadow-lg p-4 rounded-lg">
                <div className="mb-6">
                  📣 Stříhám v roušce, ale mohu přijímat objednávky.
                </div>
                <div className="text-sm text-gray-300">10. 9. 2021</div>
              </div>
            </div>
          </section>
          <section className="max-w-3xl mx-auto px-4 pb-14">
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2">
              {imagesEls}
            </div>
          </section>
          <section className="max-w-3xl mx-auto px-4 pb-14">
            <h2 className="text-center pb-14 text-2xl">
              Nové kadeřnictví v Třebíči
            </h2>
            <img src="./img/trebic.jpg" alt="" className="-" />
            <div className="text-center -translate-y-8">
              <button className="bg-gray-900 p-4 px-16 text-xl rounded-lg text-amber-50">
                Zobrazit na mapě
              </button>
            </div>
          </section>
          <section className="max-w-3xl mx-auto px-4 pb-14">
            <h3 className="text-center text-2xl pb-14">
              Používáme profesionální kosmetiku Goldwell
            </h3>
            <img src="./img/goldwell.jpg" alt="" className="-" />
          </section>
          <section className="m-auto text-center px-4 pt-14 pb-28">
            <div className="mb-8">
              Zavolejte a najdeme pro
              <br /> vás ideální termín
            </div>
            <div className="text-4xl mb-8">602 966 633</div>
            <div className="text-gray-500">
              Objednávky na svatební účesy
              <br />v současné době nepřijímám
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
