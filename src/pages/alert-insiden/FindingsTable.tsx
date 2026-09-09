import { filterOptions, matchesFilter, type AlertItem, type AlertSeverity, type AlertStatus, type FilterKey } from './data';

const sourceStyles: Record<AlertItem['source'], string> = {
  gate: 'bg-[#7A5AA8]',
  live: 'bg-[#1E6FA8]',
};

const sourceLabel: Record<AlertItem['source'], string> = {
  gate: 'Gate Check',
  live: 'Live Monitoring',
};

const severityStyles: Record<AlertSeverity, string> = {
  Kritis: 'text-red-600',
  Peringatan: 'text-amber-600',
  Info: 'text-gray-500',
};

const severityDot: Record<AlertSeverity, string> = {
  Kritis: 'bg-red-500',
  Peringatan: 'bg-amber-500',
  Info: 'bg-gray-400',
};

const statusStyles: Record<AlertStatus, string> = {
  Terbuka: 'bg-red-50 text-red-600',
  Diverifikasi: 'bg-amber-50 text-amber-700',
  Ditutup: 'bg-emerald-50 text-emerald-700',
};

interface FindingsTableProps {
  alerts: AlertItem[];
  filter: FilterKey;
  onFilterChange: (filter: FilterKey) => void;
  selectedId: string;
  onSelect: (id: string) => void;
}

function FindingsTable({ alerts, filter, onFilterChange, selectedId, onSelect }: FindingsTableProps) {
  const rows = alerts.filter((a) => matchesFilter(a, filter));

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-gray-900">
          Temuan gate check &amp; live monitoring{' '}
          <span className="ml-1 text-xs font-normal text-gray-400">27 Agustus 2026</span>
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => onFilterChange(opt.key)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                filter === opt.key
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-180 text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-[11px] tracking-widest text-gray-500">
              <th className="pb-2 pl-3 font-semibold">WAKTU</th>
              <th className="pb-2 font-semibold">SUMBER</th>
              <th className="pb-2 font-semibold">TEMUAN</th>
              <th className="pb-2 font-semibold">LOKASI / OBJEK</th>
              <th className="pb-2 font-semibold">SEVERITAS</th>
              <th className="pb-2 font-semibold">STATUS</th>
              <th className="pb-2 font-semibold">PIC</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-10 text-center text-sm text-gray-400">
                  Tidak ada temuan pada filter ini.
                </td>
              </tr>
            ) : (
              rows.map((a) => {
                const isSelected = a.id === selectedId;
                return (
                  <tr
                    key={a.id}
                    onClick={() => onSelect(a.id)}
                    className={`cursor-pointer border-b border-gray-100 last:border-0 ${
                      isSelected ? 'bg-gray-50 shadow-[inset_3px_0_0_#111827]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="py-3 pr-2 pl-3 font-mono text-gray-600">{a.time}</td>
                    <td className="py-3 pr-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700">
                        <span className={`h-1.5 w-1.5 rounded-full ${sourceStyles[a.source]}`} />
                        {sourceLabel[a.source]}
                      </span>
                    </td>
                    <td className="py-3 pr-2 font-semibold text-gray-900">{a.finding}</td>
                    <td className="py-3 pr-2">
                      <p className="text-gray-900">{a.location}</p>
                      <p className="font-mono text-xs text-gray-400">{a.object}</p>
                    </td>
                    <td className="py-3 pr-2">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${severityStyles[a.severity]}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${severityDot[a.severity]}`} />
                        {a.severity}
                      </span>
                    </td>
                    <td className="py-3 pr-2">
                      <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[a.status]}`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-600">{a.pic}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FindingsTable;
