import type { GateWorker } from './data';

interface DocumentsCardProps {
  worker: GateWorker;
}

function DocumentsCard({ worker }: DocumentsCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-semibold text-gray-900">Dokumen &amp; kompetensi</h2>

      <div className="divide-y divide-gray-100 text-sm">
        {worker.docs.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2">
            <span className="text-gray-500">{row.label}</span>
            <span className="font-semibold text-gray-900">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentsCard;
