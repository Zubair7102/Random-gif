// import logo from './logo.svg';
import './App.css';
import Tag from './component/Tag';
import Random from './component/Random';

function App() {
  return (
    <div className='w-full h-screen flex flex-col background items-center'>
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl px-10 py-2 font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random />
        <Tag/>
      </div>
    </div>
  );
}

export default App;
