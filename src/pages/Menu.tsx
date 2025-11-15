export default function Menu() {
  return (
    <div className="menu-page-container">

      {/* Header Section */}

      <div className="menu-header">
        <h1>Menu</h1>
        {/* subtitle or toggle can be added later */}
      </div>

      {/* Category Filters */}

      <div className="menu-filters">
     <button>Breakfast</button>
     <button>Lunch</button>
     <button>Dinner</button>
      </div>

      {/* Food Items Grid */}

      <div className="menu-grid">
        {/* Food Item Cards will go here */}
      </div>

    </div>
  );
}
