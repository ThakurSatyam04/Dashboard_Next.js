const Form4 = () => {
  return (
    <>
      <div className="mt-10 bg-white w-full md:w-[30%]">
        <form action="" className="border border-dotted p-6">
          <h2 className="font-bold">Form title</h2>
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
            <div className="w-full mt-4">
              <label htmlFor="">Label title</label>
              <br />
              <textarea className="border border-gray-300 w-full p-1" name="texts" id="" cols="10" rows="5" placeholder="Placeholder content"></textarea>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-4">
            <button className="bg-blue-500 text-white p-2 rounded-md w-full">Button title</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form4
