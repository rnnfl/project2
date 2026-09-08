import { cameraFeeds, falseAlarmReasons, type LiveNotification, type Severity } from './data';

const severityTagStyles: Record<Severity, string> = {
  Kritis: 'bg-red-50 text-red-600',
  Peringatan: 'bg-amber-50 text-amber-700',
  Info: 'bg-gray-100 text-gray-600',
};

function fmtElapsed(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

interface NotificationItemProps {
  notification: LiveNotification;
  isPickingReason: boolean;
  onValidate: (nid: string) => void;
  onToggleReasons: (nid: string) => void;
  onMarkFalse: (nid: string, reason: string) => void;
  onViewCamera: (camId: string) => void;
}

function NotificationItem({
  notification: n,
  isPickingReason,
  onValidate,
  onToggleReasons,
  onMarkFalse,
  onViewCamera,
}: NotificationItemProps) {
  const camera = cameraFeeds.find((c) => c.id === n.camera);

  if (n.status !== 'pending') {
    const isValid = n.status === 'valid';
    return (
      <div className="border-b border-gray-100 p-3.5 last:border-0">
        <div className="mb-2 flex items-start gap-2">
          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-500">
            {n.severity}
          </span>
          <b className="text-sm font-semibold text-gray-500">{n.detected}</b>
          <span className="ml-auto shrink-0 font-mono text-[11px] text-gray-400">{n.time}</span>
        </div>
        <div className={`rounded-md border-l-4 bg-gray-50 p-2.5 text-xs leading-relaxed text-gray-600 ${isValid ? 'border-red-500' : 'border-emerald-500'}`}>
          {isValid ? (
            <>
              <b className="text-gray-900">Divalidasi valid</b> oleh Rian S. · {n.validatedAt}
              <br />
              Diteruskan ke Alert &amp; Insiden sebagai <b className="text-gray-900">{n.alertId}</b>.
            </>
          ) : (
            <>
              <b className="text-gray-900">Ditandai false alarm</b> oleh Rian S. · {n.validatedAt}
              <br />
              Alasan: {n.falseReason}. Tidak dibuatkan alert; sampel dikirim untuk pelatihan ulang model.
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-gray-100 p-3.5 last:border-0">
      <div className="mb-2 flex items-start gap-2">
        <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${severityTagStyles[n.severity]}`}>
          {n.severity}
        </span>
        <b className="text-sm font-semibold text-gray-900">{n.detected}</b>
        <span className="ml-auto shrink-0 font-mono text-[11px] text-gray-400">{n.time}</span>
      </div>

      <div className="mb-2 flex h-16 items-center justify-center overflow-hidden rounded-md bg-gray-900">
        <span className="text-xs font-medium text-gray-500">{camera?.placeholderLabel}</span>
      </div>

      <p className="mb-2 flex flex-wrap items-center gap-1 font-mono text-[11px] text-gray-400">
        <span>{n.nid}</span>
        <span>·</span>
        <span>{n.location}</span>
        <span>·</span>
        <span>conf {n.confidence}</span>
      </p>

      <p className="mb-2 text-xs leading-relaxed text-gray-600">{n.description}</p>

      <p className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] font-medium text-red-600">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
        belum divalidasi {fmtElapsed(n.elapsedSeconds)}
      </p>

      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => onValidate(n.nid)}
          className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
        >
          Valid — jadikan alert
        </button>
        <button
          type="button"
          onClick={() => onToggleReasons(n.nid)}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
        >
          False alarm
        </button>
        <button
          type="button"
          onClick={() => onViewCamera(n.camera)}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
        >
          Lihat kamera
        </button>
      </div>

      {isPickingReason ? (
        <div className="mt-2.5 rounded-md border border-dashed border-gray-300 bg-gray-50 p-2.5">
          <p className="mb-2 text-[11px] font-semibold tracking-widest text-gray-400">ALASAN FALSE ALARM</p>
          <div className="flex flex-wrap gap-1.5">
            {falseAlarmReasons.map((reason) => (
              <button
                key={reason}
                type="button"
                onClick={() => onMarkFalse(n.nid, reason)}
                className="rounded-full border border-gray-300 bg-white px-3 py-1 text-[11px] font-medium text-gray-700 hover:bg-gray-900 hover:text-white"
              >
                {reason}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NotificationItem;
