function ValidationHelpCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-semibold text-gray-900">Cara validasi</h2>

      <div className="space-y-3 text-xs leading-relaxed text-gray-600">
        <p>
          <b className="text-gray-900">Valid</b> — kejadian benar terjadi. Notifikasi naik jadi alert di halaman
          Alert &amp; Insiden, sirene lokal tetap aktif, dan eskalasi berjalan.
        </p>
        <p>
          <b className="text-gray-900">False alarm</b> — deteksi keliru. Anda memilih alasan, dan sistem menutup
          notifikasi tanpa membuat alert. Alasan dipakai untuk melatih ulang model.
        </p>
        <p>
          <b className="text-gray-900">Lihat kamera</b> — memuat feed sumber di panel kiri agar Anda bisa memeriksa
          sebelum memutuskan.
        </p>
      </div>
    </div>
  );
}

export default ValidationHelpCard;
