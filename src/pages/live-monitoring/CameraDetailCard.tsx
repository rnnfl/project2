import { forwardRef } from 'react';
import type { CamStatus, CameraFeed } from './data';

const tagStyles: Record<CamStatus, string> = {
  ok: 'bg-emerald-500/15 text-emerald-300',
  warn: 'bg-amber-500/15 text-amber-300',
  bad: 'bg-red-500/15 text-red-300',
};

interface CameraDetailCardProps {
  camera: CameraFeed;
}

const CameraDetailCard = forwardRef<HTMLDivElement, CameraDetailCardProps>(({ camera }, ref) => {
  return (
    <div ref={ref} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">{camera.location}</h2>
        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-mono font-medium text-gray-600">
          {camera.id}
        </span>
      </div>

      <div className="overflow-hidden rounded-lg bg-gray-900">
        <div className="flex items-center justify-between px-3 py-2 font-mono text-[11px] text-gray-300">
          <span className="flex items-center gap-1.5 text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> REC
          </span>
          <span>{camera.id}</span>
          <span>27/08/2026 15:42:07</span>
        </div>

        <div className="flex h-56 items-center justify-center border-y border-white/10 bg-gray-800/60">
          <span className="text-sm font-medium text-gray-500">{camera.placeholderLabel}</span>
        </div>

        <div className="flex flex-wrap gap-2 px-3 py-2">
          {camera.tags.map((tag) => (
            <span key={tag.label} className={`rounded-md px-2.5 py-1 text-[11px] font-medium ${tagStyles[tag.tone]}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 divide-y divide-gray-100 border-t border-gray-100 text-sm">
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-500">Pekerjaan</span>
          <span className="font-semibold text-gray-900">{camera.job}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-500">Kontraktor</span>
          <span className="font-semibold text-gray-900">{camera.contractor}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-500">Elevasi kerja</span>
          <span className="font-semibold text-gray-900">{camera.height}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-500">Pekerja terdeteksi</span>
          <span className="font-semibold text-gray-900">{camera.workers} orang</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-500">SIKA</span>
          <span className="font-semibold text-gray-900">{camera.sika}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-500">Berlaku sampai</span>
          <span className="font-semibold text-gray-900">{camera.validUntil}</span>
        </div>
      </div>
    </div>
  );
});

CameraDetailCard.displayName = 'CameraDetailCard';

export default CameraDetailCard;
