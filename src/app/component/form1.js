import TableLayout from './TableLayout'
import { library } from '@fortawesome/fontawesome-svg-core';
{/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" style={{color: "#050505",}} /> */}
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the Font Awesome icons to the library
library.add(faTrash ) ;
const Form1 = () => {
  return (
    <>
      <div className="mt-10 bg-white overflow-x-auto">
      <form action="" className="border border-dotted p-6">
        <h2 className="font-bold">Form title</h2>
        <span className="global_font">
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.
        </span>
        <div className="p-2 bg-red-50 text-red-900 rounded-sm mt-4 mb-4">
          <p>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
        </div>

        {/* Table component */}
        <div className="w-full">
          <TableLayout />
        </div>
      </form>
      <div className="w-full flex flex-wrap items-center justify-center gap-2 mt-4 mb-10">
        <button className="flex items-center justify-center w-[20px] h-[20px] border border-black rounded-md">
          1
        </button>
        <button className="bg-blue-600 text-white flex items-center justify-center w-[20px] h-[20px] border border-black rounded-md">
          2
        </button>
        <button className="flex items-center justify-center w-[20px] h-[20px] border border-black rounded-md">
          3
        </button>
        <button className="flex items-center justify-center w-[20px] h-[20px] border border-black rounded-md">
          4
        </button>
        <button className="flex items-center justify-center w-[20px] h-[20px] border border-black rounded-md">
          5
        </button>
      </div>
    </div>
  </>
  )
}

export default Form1
