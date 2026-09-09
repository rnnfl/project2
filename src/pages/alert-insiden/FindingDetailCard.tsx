import type { AlertItem } from './data';

interface FindingDetailCardProps {
  alert: AlertItem | undefined;
  escalatedAt: string | null;
  onClose: (id: string) => void;
  onEscalate: (id: string) => void;
}

function FindingDetailCard({ alert, escalatedAt, onClose, onEscalate }: FindingDetailCardProps) {
  if (!alert) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-gray-900">Detail temuan</h2>
        <p className="text-sm text-gray-400">Pilih salah satu temuan pada tabel untuk melihat detailnya.</p>
      </div>
    );
  }

  const objectLabel = alert.source === 'gate' ? 'Pekerja' : 'Kamera';
  const isClosed = alert.status === 'Ditutup';

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Detail temuan</h2>
        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-mono font-medium text-gray-600">
          {alert.id}
        </span>
      </div>

      <div className="overflow-hidden rounded-lg bg-gray-900">
        <div className="flex items-center justify-between px-3 py-2 font-mono text-[11px] text-gray-300">
          <span className="flex items-center gap-1.5 text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> REC
          </span>
          <span>{alert.source === 'gate' ? 'GATE-01' : alert.object}</span>
          <span>27/08/2026 {alert.time}</span>
        </div>
        <div className="flex h-40 items-center justify-center border-y border-white/10 bg-gray-800/60">
          <span className="text-sm font-medium text-gray-500">{alert.placeholderLabel}</span>
        </div>
      </div>

      <div className="mt-3 border-t border-gray-100 pt-3">
        <p className="mb-1 text-[11px] font-semibold tracking-widest text-gray-400">RINGKASAN</p>
        <p className="mb-3 text-sm text-gray-700">{alert.summary}</p>

        <div className="divide-y divide-gray-100 text-sm">
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">Sumber</span>
            <span className="font-semibold text-gray-900">{alert.source === 'gate' ? 'Gate Check' : 'Live Monitoring'}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">Waktu</span>
            <span className="font-mono font-semibold text-gray-900">{alert.time}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">Lokasi</span>
            <span className="font-semibold text-gray-900">{alert.location}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">{objectLabel}</span>
            <span className="font-mono font-semibold text-gray-900">{alert.object}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">Severitas</span>
            <span className="font-semibold text-gray-900">{alert.severity}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">Status</span>
            <span className="font-semibold text-gray-900">{alert.status}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-500">PIC</span>
            <span className="font-semibold text-gray-900">{alert.pic}</span>
          </div>
        </div>

        {escalatedAt ? (
          <p className="mt-2 rounded-md border-l-4 border-red-500 bg-red-50 p-2.5 text-xs text-red-700">
            Dieskalasi pada {escalatedAt} — Level 2 (SHE Officer &amp; Supervisor kontraktor) telah diberitahukan.
          </p>
        ) : null}
      </div>

      <div className="mt-4 flex gap-2 border-t border-gray-100 pt-3">
        <button
          type="button"
          onClick={() => onClose(alert.id)}
          disabled={isClosed}
          className="flex-1 rounded-md bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isClosed ? 'Temuan ditutup' : 'Tutup temuan'}
        </button>
        <button
          type="button"
          onClick={() => onEscalate(alert.id)}
          className="flex-1 rounded-md bg-red-600 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Eskalasi
        </button>
      </div>
    </div>
  );
}

export default FindingDetailCard;
