import Link from "next/link"

function HomePage() {
  
  return (
    <>
      <nav className="w-full bg-blue-300 font-bold flex flex-row justify-center items-center p-4 gap-4">
        <div>
          Tu będzie logo
        </div>
        <div>
          O stronie
        </div>
        <div>
          <Link href="/kontakt">do kontaktu</Link>
        </div>
      </nav>
      <main className="bg-white text-black w-full p-8">
        <header className="pt-m">
          <h1 className="text-2xl font-bold">Witaj na mojej stronie</h1>
        </header>
        <section>Czym się zajmuje</section>
        <section>Fajne słodkosci</section>
        <section>Skontaktuj się ze mną</section>
      </main>

      <footer className="bg-black flex flex-col text-white p-6 text-center">
        <div>&copy; by Słodka Pasieka {new Date().getFullYear()}</div>
        <div>Made by Antoni Lubomski</div>
      </footer>
    </>
  );
}

export default HomePage;
