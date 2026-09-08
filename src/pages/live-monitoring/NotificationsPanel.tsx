import type { LiveNotification } from './data';
import NotificationItem from './NotificationItem';

interface NotificationsPanelProps {
  notifications: LiveNotification[];
  reasonsOpenFor: string | null;
  onValidate: (nid: string) => void;
  onToggleReasons: (nid: string) => void;
  onMarkFalse: (nid: string, reason: string) => void;
  onViewCamera: (camId: string) => void;
  onSimulate: () => void;
}

function NotificationsPanel({
  notifications,
  reasonsOpenFor,
  onValidate,
  onToggleReasons,
  onMarkFalse,
  onViewCamera,
  onSimulate,
}: NotificationsPanelProps) {
  const pendingCount = notifications.filter((n) => n.status === 'pending').length;

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 bg-gray-50/60 p-4">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <h2 className="text-base font-semibold text-gray-900">Notifikasi langsung</h2>
        <span className="text-xs text-gray-400">
          {pendingCount ? `${pendingCount} menunggu validasi` : 'semua sudah divalidasi'}
        </span>
        <button
          type="button"
          onClick={onSimulate}
          className="ml-auto rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
        >
          Picu notifikasi (demo)
        </button>
      </div>

      <div className="max-h-[560px] overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="p-6 text-center text-sm text-gray-400">Belum ada notifikasi pada shift ini.</p>
        ) : (
          notifications.map((n) => (
            <NotificationItem
              key={n.nid}
              notification={n}
              isPickingReason={reasonsOpenFor === n.nid}
              onValidate={onValidate}
              onToggleReasons={onToggleReasons}
              onMarkFalse={onMarkFalse}
              onViewCamera={onViewCamera}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationsPanel;
