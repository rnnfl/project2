import type { ReactNode } from 'react';

const complianceTrend = [52, 61, 48, 70, 66, 80, 94];

interface StatCardProps {
  accent: string;
  label: string;
  children: ReactNode;
}

function StatCard({ accent, label, children }: StatCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className={`h-1 ${accent}`} />
      <div className="p-4">
        <p className="mb-3 text-[11px] font-semibold tracking-widest text-gray-500">{label}</p>
        {children}
      </div>
    </div>
  );
}

function StatCards() {
  return (
    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard accent="bg-gray-800" label="PEKERJA DI KETINGGIAN">
        <p className="text-3xl font-bold text-gray-900">23</p>
        <p className="mt-1 text-xs text-gray-500">di 6 titik kerja aktif</p>
      </StatCard>

      <StatCard accent="bg-emerald-500" label="KEPATUHAN APD DI GATE">
        <p className="text-3xl font-bold text-gray-900">
          94<span className="text-lg align-top">%</span>
        </p>
        <div className="mt-3 flex h-9 items-end gap-1">
          {complianceTrend.map((value, i) => (
            <span
              key={i}
              style={{ height: `${value}%` }}
              className={`w-full rounded-sm ${i === complianceTrend.length - 1 ? 'bg-gray-800' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </StatCard>

      <StatCard accent="bg-amber-500" label="NOTIFIKASI MENUNGGU VALIDASI">
        <p className="text-3xl font-bold text-gray-900">3</p>
        <p className="mt-1 text-xs text-gray-500">dari Live Monitoring</p>
      </StatCard>

      <StatCard accent="bg-amber-500" label="ALERT TERBUKA">
        <p className="text-3xl font-bold text-gray-900">5</p>
        <p className="mt-1 text-xs text-gray-500">gate + live monitoring</p>
      </StatCard>
    </div>
  );
}

export default StatCards;
