import React from 'react';
import logoPrincipal from './assets/logoConFondo.jpg';
import HeaderBar from './Sections/Header';
import Who from './Sections/Who';

function App() {
  return (
    <div className="relative" >
      <HeaderBar />
      <div className="w-full min-h-[90vh] bg-[url('../public/grupal-oveja.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center  " />
      <Who/>
      <div className="ml-2 text-white absolute left-[42%] top-[50%] " >
        <img src={logoPrincipal} alt='logo' className='ml-2 w-[30%] h-[30%] rounded-3xl border-2 border-slate-400 shadow-2xl' />
      </div>
    </div>
  );
}

export default App;
