import { gateWorkers } from './data';

const statusStyles = {
  ok: 'border-emerald-300 text-emerald-700',
  bad: 'border-red-300 text-red-600',
};

interface QueueCardProps {
  selectedId: string;
  onSelect: (badgeId: string) => void;
}

function QueueCard({ selectedId, onSelect }: QueueCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">
        Antrean gate <span className="ml-1 text-xs font-normal text-gray-400">GATE-01</span>
      </h2>

      <div className="space-y-1">
        {gateWorkers.map((worker) => {
          const isSelected = worker.badgeId === selectedId;
          return (
            <button
              key={worker.badgeId}
              type="button"
              onClick={() => onSelect(worker.badgeId)}
              aria-pressed={isSelected}
              className={`flex w-full items-center gap-3 border-l-4 py-2 pl-3 pr-2 text-left transition-colors ${
                isSelected ? 'border-gray-900 bg-gray-50' : 'border-transparent hover:bg-gray-50'
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-900 text-xs font-bold text-white">
                {worker.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900">{worker.name}</p>
                <p className="text-xs text-gray-400">
                  {worker.badgeId} · {worker.time}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-md border bg-white px-2.5 py-1 text-xs font-semibold ${statusStyles[worker.verdict]}`}
              >
                {worker.verdict === 'ok' ? 'LOLOS' : 'TAHAN'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QueueCard;
