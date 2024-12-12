import Footer from '../components/Footer'

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl font-bold mb-6">Support Our Exhibition</h1>
        <p className="text-xl mb-8">Your contribution helps us continue to showcase amazing artworks and support artists.</p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors">
          Donate Now
        </button>
      </main>
      
      {/* Fixed footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  )
}

