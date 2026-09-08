import { useEffect, useRef, useState } from 'react';
import PageHeader from '../components/dashboard/PageHeader';
import CameraDetailCard from './live-monitoring/CameraDetailCard';
import CameraFeedGrid from './live-monitoring/CameraFeedGrid';
import CameraTimelineCard from './live-monitoring/CameraTimelineCard';
import { cameraFeeds, initialNotifications, simPool, type LiveNotification } from './live-monitoring/data';
import DetectionRulesCard from './live-monitoring/DetectionRulesCard';
import NotificationsPanel from './live-monitoring/NotificationsPanel';
import ValidationHelpCard from './live-monitoring/ValidationHelpCard';

function nowStr() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}`;
}

function LiveMonitoring() {
  const [selectedCamId, setSelectedCamId] = useState(cameraFeeds[0].id);
  const [notifications, setNotifications] = useState<LiveNotification[]>(initialNotifications);
  const [reasonsOpenFor, setReasonsOpenFor] = useState<string | null>(null);
  const [nextAlertNum, setNextAlertNum] = useState(27);
  const [simCounter, setSimCounter] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.status === 'pending' ? { ...n, elapsedSeconds: n.elapsedSeconds + 1 } : n)),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const selectedCamera = cameraFeeds.find((c) => c.id === selectedCamId) ?? cameraFeeds[0];

  const handleValidate = (nid: string) => {
    const alertId = `ALR-0827-${nextAlertNum}`;
    setNextAlertNum((n) => n + 1);
    setNotifications((prev) =>
      prev.map((n) => (n.nid === nid ? { ...n, status: 'valid', validatedAt: nowStr(), alertId } : n)),
    );
    setReasonsOpenFor(null);
  };

  const handleToggleReasons = (nid: string) => {
    setReasonsOpenFor((prev) => (prev === nid ? null : nid));
  };

  const handleMarkFalse = (nid: string, reason: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.nid === nid ? { ...n, status: 'false', falseReason: reason, validatedAt: nowStr() } : n)),
    );
    setReasonsOpenFor(null);
  };

  const handleViewCamera = (camId: string) => {
    setSelectedCamId(camId);
    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSimulate = () => {
    const entry = simPool[simCounter % simPool.length];
    const nid = `NTF-${119 + simCounter}`;
    setSimCounter((c) => c + 1);
    setNotifications((prev) => [
      {
        nid,
        time: nowStr() + ':00',
        elapsedSeconds: 0,
        detected: entry.detected,
        camera: entry.camera,
        location: entry.location,
        severity: entry.severity,
        confidence: entry.confidence,
        description: entry.description,
        status: 'pending',
      },
      ...prev,
    ]);
  };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="PEMANTAUAN SAAT KEGIATAN · 4 TITIK KETINGGIAN"
        title="Live Monitoring"
        timestamp="27/08/2026 14:14:07"
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          <CameraFeedGrid selectedId={selectedCamId} onSelect={setSelectedCamId} />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_1fr]">
            <CameraDetailCard ref={detailRef} camera={selectedCamera} />
            <div className="space-y-4">
              <CameraTimelineCard camera={selectedCamera} />
              <DetectionRulesCard />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <NotificationsPanel
            notifications={notifications}
            reasonsOpenFor={reasonsOpenFor}
            onValidate={handleValidate}
            onToggleReasons={handleToggleReasons}
            onMarkFalse={handleMarkFalse}
            onViewCamera={handleViewCamera}
            onSimulate={handleSimulate}
          />
          <ValidationHelpCard />
        </div>
      </div>
    </div>
  );
}

export default LiveMonitoring;
