import type { GateWorker } from './data';

interface DecisionCardProps {
  worker: GateWorker;
  statusMessage: string;
  onAllow: () => void;
  onHold: () => void;
}

function DecisionCard({ worker, statusMessage, onAllow, onHold }: DecisionCardProps) {
  const isOk = worker.verdict === 'ok';

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Keputusan gate</h2>

      <div className={`mb-4 flex items-center justify-center rounded-lg py-8 ${isOk ? 'bg-emerald-50/60' : 'bg-red-50/60'}`}>
        <div
          className={`-rotate-6 rounded-md border-2 px-5 py-2 text-center ${
            isOk ? 'border-emerald-500 text-emerald-600' : 'border-red-500 text-red-600'
          }`}
        >
          <p className="text-lg font-extrabold tracking-wide">{isOk ? 'LOLOS' : 'DITAHAN'}</p>
          <p className="text-[11px] font-bold tracking-wide">{isOk ? 'BOLEH NAIK' : 'TIDAK BOLEH NAIK'}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onAllow}
          className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
            isOk
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Izinkan naik
        </button>
        <button
          type="button"
          onClick={onHold}
          className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
            isOk
              ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          Tahan &amp; catat
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-500">{statusMessage}</p>
    </div>
  );
}

export default DecisionCard;
