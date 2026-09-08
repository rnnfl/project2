import { useState } from 'react';
import { cameraFeeds, type CamStatus } from './data';

const tagStyles: Record<CamStatus, string> = {
  ok: 'bg-emerald-500/15 text-emerald-300',
  warn: 'bg-amber-500/15 text-amber-300',
  bad: 'bg-red-500/15 text-red-300',
};

const statusPillStyles: Record<CamStatus, string> = {
  ok: 'bg-emerald-50 text-emerald-700',
  warn: 'bg-amber-50 text-amber-700',
  bad: 'bg-red-50 text-red-600',
};

const statusLabel: Record<CamStatus, string> = {
  ok: 'Aman',
  warn: 'Peringatan',
  bad: 'Alarm',
};

const filters = ['Semua', 'Hanya alarm', 'Zona bawah'];

interface CameraFeedGridProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

function CameraFeedGrid({ selectedId, onSelect }: CameraFeedGridProps) {
  const [activeFilter, setActiveFilter] = useState('Semua');

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-gray-900">
          Feed kamera titik ketinggian{' '}
          <span className="ml-1 text-xs font-normal text-gray-400">klik untuk membuka detail</span>
        </h2>
        <div className="flex gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                activeFilter === f
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {cameraFeeds.map((cam) => {
          const isSelected = cam.id === selectedId;
          return (
            <button
              key={cam.id}
              type="button"
              onClick={() => onSelect(cam.id)}
              aria-pressed={isSelected}
              className={`rounded-lg border bg-white p-1.5 text-left transition-colors ${
                isSelected ? 'border-gray-900 ring-2 ring-gray-900/10' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="overflow-hidden rounded-md bg-gray-900">
                <div className="flex items-center justify-between px-2.5 py-1.5 font-mono text-[10px] text-gray-300">
                  <span className="flex items-center gap-1 text-red-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> REC
                  </span>
                  <span>{cam.id}</span>
                  <span>15:42:0{cameraFeeds.indexOf(cam) + 1}</span>
                </div>
                <div className="flex h-28 items-center justify-center border-y border-white/10 bg-gray-800/60">
                  <span className="text-xs font-medium text-gray-500">{cam.placeholderLabel}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 px-2.5 py-1.5">
                  {cam.tags.map((tag) => (
                    <span key={tag.label} className={`rounded px-2 py-0.5 text-[10px] font-medium ${tagStyles[tag.tone]}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between px-1.5 pt-2 pb-1">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{cam.location}</p>
                  <p className="text-xs text-gray-500">
                    {cam.id} · {cam.height}
                  </p>
                </div>
                <span className={`rounded-md px-2 py-1 text-xs font-medium ${statusPillStyles[cam.status]}`}>
                  {statusLabel[cam.status]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CameraFeedGrid;
