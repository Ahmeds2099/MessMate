export default function Menu() {
    {/*Loop for multiple menu items*/ }
    const foodItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Creamy, rich & perfect for lunch",
    image: "",
    price:120,
  },
  {
    id: 2,
    name: "Egg Fried Rice",
    description: "Light, tasty and filling",
    image: "",
    price:120,
  },
  {
    id: 3,
    name: "Aloo Paratha",
    description: "Soft, buttery & classic breakfast",
    image: "",
    price:120,
  }
];


  return (

    /*Menu Page Container*/
    <div className="p-6 flex flex-col gap-6">


      {/* Header Section */}
         <h1><p className="text-gray-500 text-3xl">Today's food selection</p>
            </h1>

     {/*Menu Header Div*/}

      <div className="flex items-center justify-between font-semibold text-3xl text-orange-500">

        <h1>Menu</h1>
        {/* subtitle or toggle can be added later */}
      </div>

      {/* Category Filters */}

       {/*Filters Header Div*/}

 <div className="flex gap-3">
  <button className="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-orange-100 hover:border-orange-400 transition">
    Breakfast
  </button>

  <button className="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-orange-100 hover:border-orange-400 transition">
    Lunch
  </button>

  <button className="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-orange-100 hover:border-orange-400 transition">
    Dinner
  </button>
</div>


      {/* Food Items Grid */}

        {/*Grid Div*/} 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {/*FoodCard*/}

 {foodItems.map(item => (
  <div key={item.id} className="border rounded-xl p-4 shadow-sm flex flex-col gap-3 transition hover:shadow-md">
    <div className="border rounded-xl p-4 shadow-sm flex flex-col gap-3 transition hover:shadow-md hover:scale-[1.01]"
      ></div>
    <h3 className="px-4 py-2 rounded-lg border bg-white text-gray-700">{item.name}</h3>
    <p className="text-sm text-gray-600">{item.description}</p>
    <p className="text-sm text-orange-600">{item.price}</p>
    <button className="bg-orange-500 text-white py-2 rounded-lg hover:opacity-90">
      Add
    </button>
  </div>
))}

</div>


    </div>
  );
}
