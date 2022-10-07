import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    qty: "",
    price: "",
  });
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    item.push(product);
    setItem([...item]);
    setProduct({
      id: "",
      name: "",
      qty: "",
      price: "",
    });
  };
  const hanndleDelete = (param) => {
    const deleletItem = item.filter((item, index) => item.id != param.id);
    setItem([...deleletItem]);
  };

  return (
    <div className="grid grid-cols-2 mt-56">
      <div className="flex justify-center items-center">
        <div className="bg-white  w-2/5 p-6 rounded">
          <h1 className="uppercase text-2xl text-center">add product</h1>
          <form onSubmit={handleSubmit}>
            <label className="block">ID</label>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="input product ID"
              name="id"
              value={product.id}
              onChange={handleChange}
            />
            <br />
            <label className="block">Product Name</label>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="input product Name"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
            <br />
            <label className="block">QTY</label>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="input product QTY"
              name="qty"
              value={product.qty}
              onChange={handleChange}
            />
            <br />
            <label className="block">Price</label>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="input product Price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
            <br />
            <button className="px-10 py-2 text-md text-white bg-gray-700 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-3 gap-4">
          {item.map((res, index) => {
            return (
              <div className="bg-white p-5 rounded-xl" key={index}>
                <button
                  className="float-right bg-red-500 px-2 text-white rounded-full"
                  onClick={() => hanndleDelete(res)}
                >
                  x
                </button>
                <div className="mt-6 text-center">
                  <div className="flex space-x-4 items-center">
                    <h1>Product ID:</h1>
                    <p className="text-xl">{res.id}</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <h1>ProductName:</h1>
                    <p className="text-xl">{res.name}</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <h1>Product QTY:</h1>
                    <p className="text-xl">{res.qty}</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <h1>Product Price:</h1>
                    <p className="text-xl">{res.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
