import type { ApdCheck, CheckStatus, GateWorker } from './data';

const iconStyles: Record<CheckStatus, string> = {
  ok: 'bg-emerald-500 text-white',
  warn: 'bg-amber-500 text-white',
  bad: 'bg-red-500 text-white',
};

const badgeStyles: Record<CheckStatus, string> = {
  ok: 'bg-emerald-50 text-emerald-700',
  warn: 'bg-amber-50 text-amber-700',
  bad: 'bg-red-50 text-red-600',
};

const badgeLabel: Record<CheckStatus, string> = {
  ok: 'terdeteksi',
  warn: 'ragu',
  bad: 'tidak ada',
};

function StatusIcon({ status }: { status: CheckStatus }) {
  if (status === 'ok') {
    return (
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
        <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8 11.6l6.8-6.8a1 1 0 0 1 1.4 0Z" />
      </svg>
    );
  }
  if (status === 'warn') {
    return <span className="text-[11px] font-bold leading-none">!</span>;
  }
  return <span className="text-[11px] font-bold leading-none">×</span>;
}

interface ApdDetectionCardProps {
  worker: GateWorker;
}

function ApdDetectionCard({ worker }: ApdDetectionCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">
        Deteksi APD otomatis <span className="ml-1 text-xs font-normal text-gray-400">confidence per objek</span>
      </h2>

      <div className="divide-y divide-gray-100">
        {worker.checks.map((item: ApdCheck) => (
          <div key={item.label} className="flex items-center gap-3 py-2.5">
            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${iconStyles[item.status]}`}>
              <StatusIcon status={item.status} />
            </span>
            <span className="flex-1 text-sm text-gray-800">{item.label}</span>
            <span className="text-sm text-gray-500">{item.confidence}</span>
            <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${badgeStyles[item.status]}`}>
              {badgeLabel[item.status]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApdDetectionCard;
