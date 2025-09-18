import './App.css'
import Navbar from './components/Navbar.tsx'
import Landing from './components/pages/Landing.tsx'

function App() {
  return (
    <>
      <div className='w-screen min-h-screen overflow-x-hidden bg-zinc-900'>
        <Navbar />
        <main><Landing /></main>
      </div>
    </>
  )
}

export default App
