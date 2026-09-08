import { activeSites, type SiteStatus } from './data';

const statusStyles: Record<SiteStatus, string> = {
  Aman: 'bg-emerald-50 text-emerald-700',
  'Hook lepas': 'bg-red-50 text-red-600',
  'Luar zona aman': 'bg-amber-50 text-amber-700',
  'Zona bawah terisi': 'bg-red-50 text-red-600',
};

function ActiveSitesCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm xl:col-span-2">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-gray-900">
          Titik kerja ketinggian aktif{' '}
          <span className="ml-1 text-xs font-normal text-gray-400">SIKA berlaku hari ini</span>
        </h2>
        <button
          type="button"
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Buka monitoring
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-[11px] tracking-widest text-gray-500">
              <th className="pb-2 font-semibold">LOKASI</th>
              <th className="pb-2 font-semibold">KAMERA</th>
              <th className="pb-2 font-semibold">PEKERJA</th>
              <th className="pb-2 font-semibold">KETINGGIAN</th>
              <th className="pb-2 font-semibold">KONTRAKTOR</th>
              <th className="pb-2 font-semibold">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {activeSites.map((site) => (
              <tr key={site.location} className="border-b border-gray-100 last:border-0">
                <td className="py-3 pr-2">
                  <p className="font-semibold text-gray-900">{site.location}</p>
                  <p className="text-xs text-gray-500">{site.description}</p>
                </td>
                <td className="py-3 pr-2 text-gray-600">{site.camera}</td>
                <td className="py-3 pr-2 text-gray-600">{site.workers}</td>
                <td className="py-3 pr-2 text-gray-600">{site.height}</td>
                <td className="py-3 pr-2 text-gray-600">{site.contractor}</td>
                <td className="py-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[site.status]}`}
                  >
                    {site.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveSitesCard;
