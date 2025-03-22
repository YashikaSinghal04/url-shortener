import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[50vh] p-4 md:p-8">
        <div className="flex flex-col gap-4 items-center md:items-start justify-center">
          <p className={`text-3xl md:text-4xl font-bold text-center`}>
            The Best URL shortener in the market
          </p>
          <p className="max-w-md text-center md:text-center">
            We are the most straightforward URL shortener in the world. Most other 
            URL shorteners track you or require account login. We value your privacy 
            and built this tool to provide a hassle-free experience.
          </p>
          <div className='flex gap-3 justify-start'>
         <a href="/shorten">   <button className='bg-purple-500 rounded-lg shadow-1g p-3 py-1 font-bold text-white'>Try now</button></a>
         <a href="/github"><button className='bg-purple-500 rounded-lg shadow-1g p-3 py-1 font-bold text-white'>Github</button></a>
        </div>
        </div>
        <div className="relative w-full h-64">
          <Image
            className="mix-blend-darken object-contain"
            alt="An image of a vector"
            src="/vector.jpg"
            fill
          />
        </div>
      </section>
    </main>
  );
}
