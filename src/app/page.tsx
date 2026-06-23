import Link from "next/link"

function HomePage() {
  
  return (
      <>
        <div className="w-full bg-stone-800 flex flex-row justify-between items-center p-4 gap-4 text-sm text-white font-sans">
          <div>Zadzwoń do nas</div>
          <div className="flex flex-row gap-8">
            <div>O stronie</div>
            <div>Lokalizacja</div>
          </div>
        </div>

        <nav className="w-full flex flex-col justify-center items-center gap-6 bg-amber-50 py-6 w-5/6 font-sans">
          <div className="flex justify-center">
            <img src="https://placehold.co/600x400" alt="zdjecie" className="max-h-20 w-auto"/>
          </div>

          <div className="text-center flex flex-row justify-center gap-6 border-y w-full py-6">
            <div>
              <Link href="#" className="hover:text-amber-800 transition-colors ease-in duration-200">Strona główna</Link>
            </div>
            <div>
              <Link href="galeria" className="hover:text-amber-800 transition-colors ease-in duration-200">Galeria zdjęć</Link>
            </div>
            <div>
              <Link href="kontakt" className="hover:text-amber-800 transition-colors ease-in duration-200">Skontaktuj się z nami</Link>
            </div>
          </div>
        </nav>

        <section className="pt-6 bg-amber-50 w-5/6 mx-auto">
          <div className="bg-amber-50 relative">
            <img src="https://placehold.co/600x300" alt="" className="w-full h-auto block"/>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 p-4 bg-gray-300 rounded-sm border border-solid border-black cursor-pointer select-none">&lt;</div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 p-4 bg-gray-300 rounded-sm border border-solid border-black cursor-pointer select-none">&gt;</div>
          </div>
        </section>

        <main className="bg-amber-50 py-8 bg-amber-50 w-5/6 mx-auto">
          <header className="py-16">
            <h1 className="text-6xl font-bold text-center font-serif">Odkryj nasze słodkości</h1>
          </header>

          <section className="py-6 flex gap-8">
            <img src="https://placehold.co/600x400" alt="" />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 font-serif">Czym się zajmuję?</h2>
              <p className="text-l">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, qui? Architecto, aliquam obcaecati saepe rerum sequi nemo quidem corporis ab laboriosam porro ut ducimus facere in aliquid sapiente! Similique, molestias.</p>
            </div>
          </section>

          <header className="py-16">
            <h1 className="text-6xl font-bold text-center font-serif">Odkryj nasze słodkości</h1>
          </header>
          
          <div className="grid grid-cols-2 gap-3">
            
            <div>
              <img src="https://placehold.co/600x400" alt="" className="w-full"/>
            </div>

            <section className="py-6 bg-amber-100/50 flex flex-col justify-center p-8">
              <h2 className="text-2xl font-bold py-6 font-serif">Fajne słodkosci</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eum iusto quia nesciunt ducimus a cumque. Quisquam, saepe, dolor corrupti autem sequi quibusdam voluptatibus corporis doloremque aut, voluptates a vel?</p>
            </section>

            <section className="py-6 bg-amber-100/50 flex flex-col justify-center p-8">
              <h2 className="text-2xl font-bold py-6 font-serif">Skontaktuj się ze mną</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati odit maxime id officiis porro provident nemo, possimus at enim dignissimos error aut cum alias itaque, accusamus voluptatibus temporibus similique!</p>
            </section>

            <div>
              <img src="https://placehold.co/600x400" alt="" className="w-full"/>
            </div>

          </div>
        </main>

        <footer className="bg-stone-800 flex flex-col text-white p-6 text-center">
          <div>&copy; by Słodka Pasieka {new Date().getFullYear()}</div>
          <div>Made by Antoni Lubomski</div>
        </footer>
      </>
  );
}

export default HomePage;
