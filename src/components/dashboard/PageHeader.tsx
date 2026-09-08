interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  timestamp?: string;
}

function PageHeader({ breadcrumb, title, timestamp = '27/08/2026 10:42:05' }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold tracking-widest text-gray-400">{breadcrumb}</p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900">{title}</h1>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          14 kamera aktif
        </span>
        <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700">
          Shift Siang · 14:00–22:00
        </span>
        <span className="rounded-md bg-gray-900 px-3 py-1.5 font-mono text-sm text-white">{timestamp}</span>
      </div>
    </div>
  );
}

export default PageHeader;
