import type { CamStatus, CameraFeed } from './data';

const dotStyles: Record<CamStatus, string> = {
  ok: 'bg-emerald-500',
  warn: 'border-2 border-amber-400 bg-white',
  bad: 'bg-red-500',
};

interface CameraTimelineCardProps {
  camera: CameraFeed;
}

function CameraTimelineCard({ camera }: CameraTimelineCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Kejadian di kamera ini</h2>

      <ul className="space-y-4">
        {camera.timeline.map((entry, i) => (
          <li key={i} className="flex gap-3">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotStyles[entry.tone]}`} />
            <div>
              <p className="font-mono text-xs text-gray-500">{entry.time}</p>
              <p className="text-sm text-gray-900">{entry.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CameraTimelineCard;
