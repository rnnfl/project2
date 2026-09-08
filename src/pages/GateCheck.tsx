import { useState } from 'react';
import PageHeader from '../components/dashboard/PageHeader';
import ApdDetectionCard from './gate-check/ApdDetectionCard';
import DecisionCard from './gate-check/DecisionCard';
import { gateWorkers } from './gate-check/data';
import DocumentsCard from './gate-check/DocumentsCard';
import QueueCard from './gate-check/QueueCard';
import SupervisorNotesCard from './gate-check/SupervisorNotesCard';
import WorkerDetailCard from './gate-check/WorkerDetailCard';

function GateCheck() {
  const [selectedId, setSelectedId] = useState(gateWorkers[0].badgeId);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [sentAlerts, setSentAlerts] = useState<Record<string, string>>({});
  const [nextAlertNum, setNextAlertNum] = useState(10);

  const worker = gateWorkers.find((w) => w.badgeId === selectedId) ?? gateWorkers[0];

  const handleSelect = (badgeId: string) => {
    setSelectedId(badgeId);
    setActionMessage(null);
  };

  const handleAllow = () => {
    if (worker.verdict === 'ok') {
      setActionMessage(
        `Izin naik diberikan pukul ${worker.time}:04. Pemantauan dilanjutkan di Live Monitoring.`,
      );
    } else {
      setActionMessage(
        'Pekerja masih memiliki temuan APD. Gunakan override manual dengan alasan tertulis bila tetap diizinkan.',
      );
    }
  };

  const handleHold = () => {
    if (worker.verdict === 'ok') {
      setActionMessage('Pekerja ini lolos deteksi. Gunakan override manual bila tetap ingin menahan.');
      return;
    }
    if (!sentAlerts[worker.badgeId]) {
      const alertId = `ALR-0827-${nextAlertNum}`;
      setSentAlerts((prev) => ({ ...prev, [worker.badgeId]: alertId }));
      setNextAlertNum((n) => n + 1);
    }
    setActionMessage(null);
  };

  const defaultMessage = sentAlerts[worker.badgeId]
    ? `Temuan sudah dikirim ke Alert & Insiden sebagai ${sentAlerts[worker.badgeId]}.`
    : worker.verdict === 'ok'
      ? 'Tidak ada temuan. Tidak ada catatan yang dikirim ke Alert & Insiden.'
      : 'Penahanan akan dikirim ke Alert & Insiden sebagai temuan bersumber Gate Check.';

  const statusMessage = actionMessage ?? defaultMessage;

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="PEMERIKSAAN SEBELUM KEGIATAN · GATE-01"
        title="Gate Check"
        timestamp="27/08/2026 12:59:44"
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="xl:col-span-3">
          <QueueCard selectedId={selectedId} onSelect={handleSelect} />
        </div>

        <div className="space-y-4 xl:col-span-5">
          <WorkerDetailCard worker={worker} />
          <ApdDetectionCard worker={worker} />
        </div>

        <div className="space-y-4 xl:col-span-4">
          <DecisionCard worker={worker} statusMessage={statusMessage} onAllow={handleAllow} onHold={handleHold} />
          <DocumentsCard worker={worker} />
          <SupervisorNotesCard worker={worker} />
        </div>
      </div>
    </div>
  );
}

export default GateCheck;
