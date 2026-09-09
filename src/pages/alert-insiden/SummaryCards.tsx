import type { AlertItem } from './data';

interface SummaryCardsProps {
  alerts: AlertItem[];
}

function SummaryCards({ alerts }: SummaryCardsProps) {
  const open = alerts.filter((a) => a.status !== 'Ditutup').length;
  const fromLive = alerts.filter((a) => a.source === 'live').length;
  const fromGate = alerts.filter((a) => a.source === 'gate').length;
  const closed = alerts.filter((a) => a.status === 'Ditutup').length;

  const cards = [
    { accent: 'bg-red-500', label: 'TERBUKA', value: open, footer: 'butuh tindak lanjut' },
    { accent: 'bg-amber-500', label: 'DARI LIVE MONITORING', value: fromLive, footer: 'notifikasi tervalidasi valid' },
    { accent: 'bg-gray-800', label: 'DARI GATE CHECK', value: fromGate, footer: 'pekerja ditahan di portal' },
    { accent: 'bg-emerald-500', label: 'DITUTUP HARI INI', value: closed, footer: 'rata-rata respons 4m 12s' },
  ];

  return (
    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className={`h-1 ${card.accent}`} />
          <div className="p-4">
            <p className="mb-3 text-[11px] font-semibold tracking-widest text-gray-500">{card.label}</p>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className="mt-1 text-xs text-gray-500">{card.footer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
