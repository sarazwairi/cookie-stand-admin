import { useState } from "react";

export default function CookieStandForm({onCreate}) {
  const initialValues = {
    location: " ",
    max: 0,
    min: 0,
    avg: 0,
};

const [values, setValues] = useState(initialValues);

function submitHandler(event) {
    event.preventDefault();
    onCreate(values);
    setValues(initialValues)
}

function inputChangeHandler(event) {
    let {name, value, type} = event.target;
    if (type == "number") {
        value = parseFloat(value);
    }
    setValues({...values, [name]: value});
}


  return (
    <div className="p-1 mt-8 mb-8 ml-auto mr-auto w-5/6 h-auto rounded-md bg-green-300 text-center self-center">
    <h2 className="text-xl m-4">Create Cookie Stand</h2>
    <form
      className="grid items-center justify-center grid-cols-4 gap-5 p-5 mx-20 my-4 text-center  rounded-lg text-md gap-x-8"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col col-span-8 px-5 py-5 col-span-8 mb-4 ">
        <label
          className="mb-2 font-bold text-grey-darkest"
        >
          Location
        </label>
        <input
          className="px-3 py-2 mx-8 border text-grey-darkest"
          name="location"
          placeholder="Cookie Stand Location"
          value={values.location} onChange={inputChangeHandler}
        />
      </div>
      <div className="flex flex-col col-span-2 bg-green-200 border-2 border-green-400">
        <label
          className="mb-2 font-bold text-grey-darkest width"
        >
          min Customers per Hour
        </label>
        <input
          className="px-3 mx-5 border text-grey-darkest"
          name="min"
          value={values.min} onChange={inputChangeHandler} 
        />
      </div>
      <div className="flex flex-col rounded col-span-2 bg-green-200 border-2 border-green-400">
        <label
          className="mb-2 font-bold text-grey-darkest"
        >
          max Customers per Hour
        </label>
        <input
          className="px-3 mx-5 border text-grey-darkest"
          name="max"
          value={values.max} onChange={inputChangeHandler}
        />
      </div>
      <div className="flex flex-col rounded  col-span-2 bg-green-200 border-2 border-green-400">
        <label
          className="mb-2 font-bold text-grey-darkest"
        >
          Average Cookies per Sale
        </label>
        <input
          className="px-3 mx-5  border text-grey-darkest"
          name="avg"
          value={values.avg} onChange={inputChangeHandler} 
        />
      </div>
      {/* <button
        className=" col-span-2 px-5 py-5 bg-green-500 rounded text-green hover:bg-green-600"
      >
        Create
      </button> */}
    </form>
  </div>
  )
}
