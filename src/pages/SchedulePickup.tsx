export default function SchedulePickup() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-orange-500">Schedule a Pickup</h1>

        <div>
          <label className="block mb-1 font-medium text-orange-500">Pickup Time</label>
          <input
            type="time"
            className="border rounded p-2 w-full bg-transparent text-black"
          />
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Confirm Pickup
        </button>
      </div>
  );
}
