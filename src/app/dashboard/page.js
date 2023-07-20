"use client"
import Navbar from '../component/navbar'
import DropDown from '../component/dropdown'
import Form1 from '../component/form1'
import Form2 from '../component/form2'
import Form3 from '../component/form3'
import Form4 from '../component/form4'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
{/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" style={{color: "#050505",}} /> */}
import { faSearch ,faShoppingBag,faShop,faUsers,faList,faGear,faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the Font Awesome icons to the library
library.add(faSearch , faShoppingBag,faShop,faUsers,faList,faGear,faTrash ) ;
const page = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    // Check the screen size on initial load and when resizing the window
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth >= 768); // Hide sidebar for screens smaller than 768px
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size on mount

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Navbar/>
    
    <div className='w-full h-full flex flex-col md:flex-row'>
      {/* This is the sidebar */}
      {isSidebarVisible && (
      <div className='w-[200px] min-h-screen flex flex-col bg-neutral-800 text-white'>
        <div className='w-full flex items-center justify-center'>
          <button className='bg-neutral-200 text-neutral-900 p-1 m-2'>
            + New Item
          </button>
        </div>
          <DropDown head="Dashboard" value1="Commarce" value2="Analytics" value3="Cyrpto" value4="Helpdesk" value5="Monitoring" value6="Fitnes"/>
          <DropDown head="Application" value1="" value2="" value3="" value4="" value5="" value6=""/>
          <DropDown head="Elements" value1="" value2="" value3="" value4="" value5="" value6=""/>
          <DropDown head="Forms" value1="" value2="" value3="" value4="" value5="" value6=""/>
          <DropDown head="Plugins" value1="" value2="" value3="" value4="" value5="" value6=""/>
          <DropDown head="Elements" value1="" value2="" value3="" value4="" value5="" value6=""/>
          <DropDown head="Datagrid" value1="" value2="" value3="" value4="" value5="" value6=""/>
          <DropDown head="Settings" value1="" value2="" value3="" value4="" value5="" value6=""/><br /><br /><hr />
          <div className='w-full mt-2 flex items-center justify-center'>
            <Link href="/login">
              <button className=" mt-4 p-1 bg-blue-600 text-white rounded-md hover:brightness-95">Logout</button>            
            </Link>
          </div>
      </div>
      )} 

      {/* This is the content part */}
      <div className='w-full bg-gray-100'>

        <div className='w-full flex flex-col md:flex-row justify-between items-center p-4 bg-white'>
          <div className='flex gap-5'>
            <p className='font-bold'>Add new post</p>
            <button><span>+</span> Add Content</button>
            <div className='flex items-center gap-1'>
              <span><FontAwesomeIcon className=' text-red bg-slate-100 w-[15px] h-[15px]' icon={faGear} color="purple"  /></span>
              <p>Settings</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <div className="relative flex items-center">
                <input
                  className="relative rounded-md border border-black pl-8 pr-4 py-2"
                  type="text"
                  placeholder="Search Content"
                />
              <FontAwesomeIcon
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red bg-slate-100 w-4 h-4"
                  icon={faSearch}
                  color="black"
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col p-10 mt-4'>
          <div className='flex flex-wrap gap-2 items-center justify-around'>
            <div className='flex bg-white w-[200px] gap-6 p-4 items-center justify-center'>
              <div>
                <FontAwesomeIcon className='right-6 text-red bg-slate-100 w-[30px] h-[30px]' icon={faShoppingBag} color="red"  />
              </div>
              <div className='flex flex-col'>
                <span>Total Sales </span>
                <span>$2,456</span>
              </div>
            </div>
            <div className='flex bg-white w-[200px] gap-6 p-4 items-center justify-center'>
              <div>
                <FontAwesomeIcon className='right-6 text-red bg-slate-100 w-[28px] h-[28px]' icon={faShop} color="purple"  />
              </div>
              <div className='flex flex-col'>
                <span>Total Expenses</span>
                <span>$3,326</span>
              </div>
            </div>
            <div className='flex bg-white w-[200px] gap-6 p-4 items-center justify-center'>
              <div>
                <FontAwesomeIcon className='right-6 text-red bg-slate-100 w-[30px] h-[30px]' icon={faUsers} color="green"  />
              </div>
              <div className='flex flex-col'>
                <span>Total Visitors</span>
                <span>5,325</span>
              </div>
            </div>
            <div className='flex bg-white w-[200px] gap-6 p-4 items-center justify-center'>
              <div>
                <FontAwesomeIcon className='right-6 text-red bg-slate-100 w-[30px] h-[30px]' icon={faList} color="purple"  />
              </div>
              <div className='flex flex-col'>
                <span>Total Orders</span>
                <span>1,326</span>
              </div>
            </div>
          </div>


          <Form1/>
          <Form2/>
          <div className="flex flex-col md:flex-row gap-6">
            <Form3 />
            <Form4 />
          </div>


        </div>
      </div>

    </div>
    </>
  )
}

export default page
