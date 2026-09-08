import type { GateWorker } from './data';

interface WorkerDetailCardProps {
  worker: GateWorker;
}

function WorkerDetailCard({ worker }: WorkerDetailCardProps) {
  const badCount = worker.checks.filter((c) => c.status !== 'ok').length;
  const apdTag =
    badCount === 0 ? `${worker.checks.length}/${worker.checks.length} APD terdeteksi` : `${badCount} item bermasalah`;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-gray-900">{worker.name}</h2>
          <p className="text-xs text-gray-500">
            {worker.role} → {worker.destination}
          </p>
        </div>
        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          GATE-01 · Portal Barat
        </span>
      </div>

      <div className="overflow-hidden rounded-lg bg-gray-900">
        <div className="flex items-center justify-between px-3 py-2 font-mono text-[11px] text-gray-300">
          <span className="flex items-center gap-1.5 text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> REC
          </span>
          <span>GATE-01</span>
          <span>27/08/2026 {worker.time}:04</span>
        </div>

        <div className="flex h-64 items-center justify-center border-y border-white/10 bg-gray-800/60">
          <span className="text-sm font-medium text-gray-500">Gambar 1</span>
        </div>

        <div className="flex flex-wrap gap-2 px-3 py-2">
          <span
            className={`rounded-md px-2.5 py-1 text-[11px] font-medium ${
              badCount === 0 ? 'bg-emerald-500/15 text-emerald-300' : 'bg-red-500/15 text-red-300'
            }`}
          >
            {apdTag}
          </span>
          <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-gray-200">
            Wajah cocok · {worker.badgeId}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WorkerDetailCard;
