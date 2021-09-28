import Head from "next/head";

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const resPrices = await fetch("http://localhost:3000/data/prices.json");
  const resNews = await fetch("http://localhost:3000/data/news.json");
  const { prices } = await resPrices.json();
  const { news } = await resNews.json();

  return {
    props: {
      prices,
      news,
    },
  };
}

export default function Home({ prices, news }) {
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
            <div className="w-20 lg:w-24">
              <img src="./img/logo.svg" alt="Logo kadeřnictví Vlaďka K" />
            </div>
          </header>
          <div className="z-10 max-w-3xl mx-auto pt-72">
            <h1 className="text-4xl md:text-6xl mb-14 px-4 leading-loose">
              Podpořte svou
              <br />
              přirozenou krásu
            </h1>
            <div className="text-center md:text-left mb-14 px-4">
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
            loading="lazy"
            srcSet="
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1632772014/vladkak/bg.jpg 500w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1632772014/vladkak/bg.jpg 710w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1000/v1632772014/vladkak/bg.jpg 1000w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1632772014/vladkak/bg.jpg 1420w"
            src="https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1632772014/vladkak/bg.jpg"
            alt="Ukázka účesu z kadeřnictví Vlaďka K"
          />
        </section>
        <div className="bg-amber-50">
          <section className="max-w-3xl mx-auto pt-20 pb-20 px-4">
            <h3 className="text-2xl md:text-3xl">
              <div>Studio Vlaďka K</div>
              <div className="text-gray-500">
                Dámské, pánské a dětské kadeřnictví.
              </div>
            </h3>
          </section>
          <section className="max-w-3xl mx-auto  px-4 pb-20 md:pb-28">
            <div className="grid gap-2 md:grid-cols-2">
              {news.map((item) => (
                <div
                  key={item.content}
                  className="bg-white shadow-lg p-4 rounded-lg flex flex-col"
                >
                  <div className="mb-6 flex-1">
                    <img
                      className="w-6 inline-block mr-2"
                      src="./img/news.png"
                      alt="news emoji"
                    />

                    {item.content}
                  </div>
                  <div className="text-sm text-gray-300">10. 9. 2021</div>
                </div>
              ))}
            </div>
          </section>
          <section className="max-w-3xl mx-auto px-4 pb-20 md:pb-28">
            <h2 className="pb-14 text-2xl md:text-3xl text-center">Ceník</h2>
            <table className="prices mx-auto w-full border-b-2 border-gray-100 text-md">
              <tbody>
                {prices.map((price) => (
                  <tr key={price.name}>
                    <td>
                      <div>{price.name}</div>
                      <div className="opacity-50">{price.more}</div>
                    </td>
                    <td>{price.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 text-gray-500 text-md">
              Objednávky na svatební účesy v současné době nepřijímám.
            </div>
          </section>
          <section className="max-w-3xl mx-auto px-4 pb-20 md:pb-28">
            <h2 className="text-center pb-14 md:pb-28 text-2xl md:text-3xl">
              Nové kadeřnictví v Třebíči
            </h2>
            <img
              loading="lazy"
              srcSet="
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1632772160/vladkak/trebic.jpg 500w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1632772160/vladkak/trebic.jpg 710w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1000/v1632772160/vladkak/trebic.jpg 1000w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1632772160/vladkak/trebic.jpg 1420w"
              src="https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1632772160/vladkak/trebic.jpg"
              alt=""
              className="-"
            />
            <div className="text-center -translate-y-8">
              <button className="bg-gray-900 p-4 px-16 text-xl rounded-lg text-amber-50">
                Zobrazit na mapě
              </button>
            </div>
          </section>
          <section className="max-w-3xl mx-auto px-4 pb-14 md:pb-28">
            <h3 className="text-center text-2xl md:text-3xl pb-20 md:pb-28">
              Používáme profesionální kosmetiku Goldwell
            </h3>
            <img
              loading="lazy"
              srcSet="
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1632772169/vladkak/goldwell.jpg 500w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1632772169/vladkak/goldwell.jpg 710w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1000/v1632772169/vladkak/goldwell.jpg 1000w,
https://res.cloudinary.com/dhxmg9p4i/image/upload/w_1420/v1632772169/vladkak/goldwell.jpg 1420w"
              src="https://res.cloudinary.com/dhxmg9p4i/image/upload/w_500/v1632772169/vladkak/goldwell.jpg"
              alt=""
              className="-"
            />
          </section>
          <section className="m-auto text-center px-4 pt-14 pb-40">
            <div className="mb-8 lg:text-xl">Objednávejte se telefonicky</div>
            <div className="text-4xl lg:text-6xl mb-8">602 966 633</div>
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
