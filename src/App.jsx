import './App.css'

function App() {
  
  return (
    <>
      <nav className='w-full py-10 bg-black'>
        <ul className='flex justify-center gap-6'>
          <li className='relative group flex justify-center'><a href="#" className='text-[red] text-[22px]'>Contact</a>
          <ul className='w-[250px] p-5 bg-white rounded-lg flex flex-col items-center gap-3 top-[40px] absolute invisible group-hover:visible transition-all'>
            <li><a className='' href="#">Mobile No.</a></li>
            <li><a className='' href="#">Gmail</a></li>
          </ul>
          </li>
          <li className='relative group flex justify-center'><a href="#" className='text-[red] text-[22px]'>Blog</a>
          <ul className='w-[250px] p-5 bg-white rounded-lg flex flex-col items-center gap-3 top-[40px] absolute invisible group-hover:visible transition-all'>
            <li><a className='' href="#">Hello</a></li>
            <li><a className='' href="#">Hello</a></li>
          </ul>
          </li>
          <li><a href="#" className='text-[red] text-[22px]'>About</a></li>
          <li className='relative group flex justify-center'><a href="#" className='text-[red] text-[22px]'>Plans</a>
          <ul className='w-[250px] p-5 bg-white rounded-lg flex flex-col items-center gap-3 top-[40px] absolute invisible group-hover:visible transition-all'>
            <li><a className='' href="#">Hello</a></li>
            <li><a className='' href="#">Hello</a></li>
          </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
