const steps = [
  {
    title: 'Level 1 · otomatis',
    text: 'Sirene lokal + notifikasi pengawas area di HT channel 3.',
    tone: 'bad' as const,
  },
  {
    title: 'Level 2 · +2 menit tanpa validasi',
    text: 'Notifikasi SHE Officer & Supervisor kontraktor.',
    tone: 'neutral' as const,
  },
  {
    title: 'Level 3 · +5 menit',
    text: 'Stop work authority — pekerjaan dihentikan, ERT disiagakan.',
    tone: 'neutral' as const,
  },
];

const dotStyles: Record<'bad' | 'neutral', string> = {
  bad: 'bg-red-500',
  neutral: 'border-2 border-gray-300 bg-white',
};

function EscalationCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Jalur eskalasi</h2>

      <ul className="space-y-4">
        {steps.map((step) => (
          <li key={step.title} className="flex gap-3">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotStyles[step.tone]}`} />
            <div>
              <p className="font-mono text-xs text-gray-500">{step.title}</p>
              <p className="text-sm text-gray-900">{step.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EscalationCard;
