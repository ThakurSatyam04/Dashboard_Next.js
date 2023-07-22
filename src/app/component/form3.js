const Form3 = () => {
  return (
    <>
     <div className="mt-10 bg-white w-full md:w-[70%]">
        <form action="" className="border border-dotted p-6">
            <h2 className="font-bold">Form title</h2>
            <span className="global_font">
            Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.
            </span>
            <div className="flex flex-wrap mt-2">
            <button className="p-1 border border-gray-300 rounded-md mr-2 mb-2 hover:bg-gray-900 hover:text-white">
                English
            </button>
            <button className="p-1 border border-gray-300 rounded-md mr-2 mb-2 hover:bg-gray-900 hover:text-white">
                Turkish
            </button>
            </div>
            <div className="mt-4 w-full">
            <div>
                <label htmlFor="">Label title</label>
                <br />
                <input className="border border-gray-300 p-1 w-full" type="text" placeholder="Placeholder content" />
            </div>
            <div className="w-full flex items-center justify-center gap-3 mt-4">
                <div className="w-full">
                <label htmlFor="">Label title</label>
                <br />
                <select className="w-full border border-gray-300 p-1.5" name="options" id="option">
                    <option value="">choose</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                </select>
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                <label htmlFor="">Label title</label>
                <br />
                <input className="border border-gray-300 p-1 w-full" type="text" placeholder="Placeholder content" />
                </div>
                <div className="w-full md:w-1/2">
                <label htmlFor="">Label title</label>
                <br />
                <input className="border border-gray-300 p-1 w-full" type="text" placeholder="Placeholder content" />
                </div>
            </div>
            <div className="w-full mt-4">
                <label htmlFor="">Label title</label>
                <br />
                <textarea className="border border-gray-300 w-full p-1" name="texts" id="" cols="10" rows="5" placeholder="Placeholder content"></textarea>
            </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Form3
