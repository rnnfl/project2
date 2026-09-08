import { cameraIssues } from './data';

function CameraHealthCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Kesehatan kamera</h2>

      <div className="divide-y divide-gray-100 text-sm">
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-700">Online</span>
          <span className="font-semibold text-gray-900">14 / 16</span>
        </div>

        <div className="flex items-center justify-between py-2">
          <span className="text-gray-700">{cameraIssues[0].camera}</span>
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
            {cameraIssues[0].label}
          </span>
        </div>

        <div className="flex items-center justify-between py-2">
          <span className="text-gray-700">{cameraIssues[1].camera}</span>
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">
            {cameraIssues[1].label}
          </span>
        </div>

        <div className="flex items-center justify-between py-2">
          <span className="text-gray-700">Latensi analitik rata-rata</span>
          <span className="font-semibold text-gray-900">240 ms</span>
        </div>
      </div>

      <p className="mt-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
        Kamera offline menonaktifkan deteksi otomatis. Titik kerja terkait wajib pengawasan langsung.
      </p>
    </div>
  );
}

export default CameraHealthCard;
