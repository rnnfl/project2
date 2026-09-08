import { followUpItems } from './data';

function FollowUpCard() {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Tindak lanjut menunggu Anda</h2>

      <div className="flex-1 divide-y divide-gray-100 text-sm">
        {followUpItems.map((item) => (
          <div key={item.label} className="flex items-center justify-between py-2">
            <span className="text-gray-700">{item.label}</span>
            <span className="font-semibold text-gray-900">{item.count}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-md bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Validasi notifikasi
      </button>
    </div>
  );
}

export default FollowUpCard;
