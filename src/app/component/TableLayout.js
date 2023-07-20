import { library } from '@fortawesome/fontawesome-svg-core';
{/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" style={{color: "#050505",}} /> */}
import { faTrash,faEdit  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon   } from '@fortawesome/react-fontawesome';
// Add the Font Awesome icons to the library
library.add(faTrash,faEdit   ) ;
const TableLayout = () => {
    const data = [
        { Row1: "Etiam purus in", Row2: 'Curabitur donec duis', Row3: "Morbi pharetra, accumsan", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1  rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div>  },
        { Row1: "Duis eget habitant", Row2: 'At amet odio', Row3: "Commodo eget scelerisque", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div>  },
        { Row1: "Aliquam velit lacus", Row2: 'Pellentesque egestas placerat', Row3: "Tortor habitant sit", Row4: <div className="flex gap-2">
            <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
            <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
            </div>  },
        { Row1: "Fermentum scelerisque ultricies", Row2: 'Morbi sagittis nulla', Row3: "Quam semper quis", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div>  },
        { Row1: "Integer semper pellentesque", Row2: 'Neque turpis enim', Row3: "Egestas non sociis", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div> },
        { Row1: "Parturient at id", Row2: 'Sem neque, mattis', Row3: "Pellentesque facilisis massa", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div> },
        { Row1: "Amet, pretium eget", Row2: 'In ipsum volutpat', Row3: "Ut feugiat egestas", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div>  },
        { Row1: "Risus consequat sollicitudin", Row2: 'Adipiscing odio nulla', Row3: "Pharetra id sit", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div>  },
        { Row1: "Risus consequat sollicitudin", Row2: 'Adipiscing odio nulla', Row3: "Pharetra id sit", Row4: <div className="flex gap-2">
        <button className="bg-blue-700 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faEdit } color="white"  /></span>Edit</button>
        <button className="bg-amber-600 text-white pl-1 pr-1 flex items-center gap-1 rounded-md"><span><FontAwesomeIcon className=' text-red w-[15px] h-[15px]' icon={faTrash} color="white"  /></span>Delete</button>
        </div>  },
        // Add more data rows as needed
      ];
    
      return (
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border p-2">Table Title</th>
              <th className="border p-2">Table Title</th>
              <th className="border p-2">Table Title</th>
              <th className="border p-2">Table Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.Row1}</td>
                <td className="border p-2">{item.Row2}</td>
                <td className="border p-2">{item.Row3}</td>
                <td className="border p-2">{item.Row4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default TableLayout
