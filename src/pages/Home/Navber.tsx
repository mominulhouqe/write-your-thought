import  { useState } from 'react';

const Navber = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-100 px-2 shadow-md py-2 fixed w-full top-0 z-30 ">
        <h4 className="md:text-4xl text-2xl font-semibold">Thoughts</h4>
        <ul className="hidden md:flex">
          <li className="mx-2">
            <a href="#">Home</a>
          </li>
          <li className="mx-2">
            <a href="#">Blogs</a>
          </li>
          <li className="mx-2">
            <a href="#">About</a>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="bg-rose-400 p-2 rounded-full cursor-pointer block md:hidden text-white"
        >
          Menu
        </button>
      </div>
 
      {open && (
        <div className="md:hidden bg-slate-100 py-4">
          <ul className="flex flex-col items-center">
          <li className="mx-2">
            <a href="#">Home</a>
          </li>
          <li className="mx-2">
            <a href="#">Blogs</a>
          </li>
          <li className="mx-2">
            <a href="#">About</a>
          </li>
          </ul>
        </div>
      )} 
    </div>
  );
};

export default Navber;
