export default function ServiceCard({ service, onBook }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col">
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="text-sm text-gray-600 flex-1">{service.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">₹{service.price}</span>
        {onBook && <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={() => onBook(service)}>Book</button>}
      </div>
    </div>
  );
}
