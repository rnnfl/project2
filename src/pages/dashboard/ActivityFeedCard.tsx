import { activityEvents, type EventSeverity } from './data';

const dotStyles: Record<EventSeverity, string> = {
  critical: 'bg-red-500',
  resolved: 'bg-emerald-500',
  pending: 'border-2 border-gray-300 bg-white',
};

function ActivityFeedCard() {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">
          Aliran kejadian <span className="ml-1 text-xs font-normal text-gray-400">15 menit terakhir</span>
        </h2>
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      </div>

      <ul className="flex-1 space-y-4">
        {activityEvents.map((event, i) => (
          <li key={i} className="flex gap-3">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotStyles[event.severity]}`} />
            <div>
              <p className="font-mono text-xs text-gray-500">
                {event.time} · {event.camera}
              </p>
              <p className="text-sm text-gray-900">
                <span className="font-semibold">{event.message}</span> — {event.location}.
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-4 w-full rounded-md bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Lihat Alert & Insiden
      </button>
    </div>
  );
}

export default ActivityFeedCard;
