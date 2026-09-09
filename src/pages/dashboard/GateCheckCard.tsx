import { gateCheckRows } from './data';

const barStyles: Record<(typeof gateCheckRows)[number]['tone'], string> = {
  dark: 'bg-gray-800',
  gray: 'bg-gray-400',
  red: 'bg-red-500',
};

function GateCheckCard() {
  const total = gateCheckRows.reduce((sum, row) => sum + row.value, 0);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Gate Check hari ini</h2>
        <button
          type="button"
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Buka gate
        </button>
      </div>

      <div className="space-y-3">
        {gateCheckRows.map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="w-40 shrink-0 text-sm text-gray-700">{row.label}</span>
            <div className="h-2 flex-1 rounded-full bg-gray-100">
              <div
                className={`h-2 rounded-full ${barStyles[row.tone]}`}
                style={{ width: `${(row.value / total) * 100}%` }}
              />
            </div>
            <span className="w-6 text-right text-sm font-semibold text-gray-900">{row.value}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-500">
        Penahanan terbanyak: <span className="font-semibold text-gray-700">double lanyard tidak lengkap</span> (3
        dari 5). Setiap penahanan otomatis masuk ke Alert & Insiden.
      </p>
    </div>
  );
}

export default GateCheckCard;
