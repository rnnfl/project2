import { detectionRules, type Severity } from './data';

const iconStyles: Record<Severity, string> = {
  Kritis: 'bg-red-500 text-white',
  Peringatan: 'bg-amber-500 text-white',
  Info: 'bg-emerald-500 text-white',
};

function DetectionRulesCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Aturan deteksi aktif</h2>

      <div className="divide-y divide-gray-100">
        {detectionRules.map((rule) => (
          <div key={rule.label} className="flex items-start gap-3 py-2.5">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${iconStyles[rule.severity]}`}
            >
              {rule.severity === 'Info' ? 'i' : '!'}
            </span>
            <div>
              <p className="text-sm text-gray-900">{rule.label}</p>
              <p className="text-xs text-gray-500">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetectionRulesCard;
