import type { GateWorker } from './data';

interface SupervisorNotesCardProps {
  worker: GateWorker;
}

function SupervisorNotesCard({ worker }: SupervisorNotesCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-semibold text-gray-900">Catatan pengawas</h2>

      <p className="text-sm text-gray-700">{worker.note}</p>

      <div className="mt-4 border-t border-gray-100 pt-3">
        <p className="mb-1 text-[11px] font-semibold tracking-widest text-gray-400">OVERRIDE MANUAL</p>
        <p className="text-xs text-gray-500">
          Keputusan sistem dapat dikesampingkan oleh pengawas berwenang. Setiap override tercatat beserta alasan dan
          nama pengawas.
        </p>
      </div>
    </div>
  );
}

export default SupervisorNotesCard;
