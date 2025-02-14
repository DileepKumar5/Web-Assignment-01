import React from 'react';
const Page = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='border border-black h-1/6 md:h-1/3 flex justify-center items-center m-2 '>A</div>
      <div className='flex flex-col md:flex-row h-1/2 flex-grow'>
        <div className='md:w-2/3 flex flex-col flex-grow'>
          <div className='flex flex-row h-1/2'>
            <div className='border border-black w-1/3 flex justify-center items-center m-2'>B</div>
            <div className='border border-black w-1/3 flex justify-center items-center m-2'>C</div>
            <div className='border border-black w-1/3 flex justify-center items-center m-2'>D</div>
          </div>
          <div className='flex flex-row h-1/2'>
            <div className='border border-black w-1/3 flex justify-center items-center m-2'>E</div>
            <div className='border border-black w-1/3 flex justify-center items-center m-2'>F</div>
            <div className='border border-black w-1/3 flex justify-center items-center m-2'>G</div>
          </div>
        </div>
        <div className='border border-black h-1/3 md:w-1/3 md:h-[23rem] flex justify-center items-center m-2 '>H</div>
      </div>
    </div>
  );
};
export default Page;