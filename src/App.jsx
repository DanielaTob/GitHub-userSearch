import './App.css'
import Search from './components/Search'

function App() {
  

  return (
    <div className="bg-bluedark font-manrope min-h-screen fles justify-center items-center">

      <div className='text-white text-xl pb-6 pt-10 flex justify-center pl-48 w-[600px]'>
        <h1>devfinder</h1>

      </div>
      
      <div className='flex justify-center items-center'>
      <Search />
      </div>
     
     
      
 
    </div>
  )
}

export default App
