import { useEffect, useState } from 'react';
import PageHeader from '../components/dashboard/PageHeader';
import EscalationCard from './alert-insiden/EscalationCard';
import FindingDetailCard from './alert-insiden/FindingDetailCard';
import FindingsTable from './alert-insiden/FindingsTable';
import { initialAlerts, matchesFilter, type AlertItem, type FilterKey } from './alert-insiden/data';
import SummaryCards from './alert-insiden/SummaryCards';

function nowStr() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getHours())}:${p(d.getMinutes())}`;
}

function AlertInsiden() {
  const [alerts, setAlerts] = useState<AlertItem[]>(initialAlerts);
  const [filter, setFilter] = useState<FilterKey>('all');
  const [selectedId, setSelectedId] = useState(initialAlerts[0].id);
  const [escalatedAt, setEscalatedAt] = useState<Record<string, string>>({});

  const filteredAlerts = alerts.filter((a) => matchesFilter(a, filter));

  useEffect(() => {
    if (!filteredAlerts.some((a) => a.id === selectedId)) {
      setSelectedId(filteredAlerts[0]?.id ?? '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, alerts]);

  const selected = filteredAlerts.find((a) => a.id === selectedId);

  const handleFilterChange = (next: FilterKey) => {
    setFilter(next);
  };

  const handleClose = (id: string) => {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, status: 'Ditutup' } : a)));
  };

  const handleEscalate = (id: string) => {
    setEscalatedAt((prev) => ({ ...prev, [id]: nowStr() }));
  };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="MUARA TEMUAN GATE CHECK & LIVE MONITORING"
        title="Alert & Insiden"
        timestamp="27/08/2026 10:21:46"
      />

      <SummaryCards alerts={alerts} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_340px]">
        <FindingsTable
          alerts={alerts}
          filter={filter}
          onFilterChange={handleFilterChange}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <div className="space-y-4">
          <FindingDetailCard
            alert={selected}
            escalatedAt={selected ? (escalatedAt[selected.id] ?? null) : null}
            onClose={handleClose}
            onEscalate={handleEscalate}
          />
          <EscalationCard />
        </div>
      </div>
    </div>
  );
}

export default AlertInsiden;
