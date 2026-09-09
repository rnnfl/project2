export type AlertSource = 'gate' | 'live';
export type AlertSeverity = 'Kritis' | 'Peringatan' | 'Info';
export type AlertStatus = 'Terbuka' | 'Diverifikasi' | 'Ditutup';

export interface AlertItem {
  id: string;
  time: string;
  source: AlertSource;
  finding: string;
  location: string;
  object: string;
  placeholderLabel: string;
  severity: AlertSeverity;
  status: AlertStatus;
  pic: string;
  summary: string;
}

export const initialAlerts: AlertItem[] = [
  {
    id: 'ALR-0827-09',
    time: '15:30:44',
    source: 'live',
    finding: 'Memanjat tangga tanpa hook',
    location: 'Silo Batubara SL-03',
    object: 'CAM-11',
    placeholderLabel: 'Gambar 3',
    severity: 'Kritis',
    status: 'Diverifikasi',
    pic: 'Rian S.',
    summary:
      'Notifikasi NTF-115 divalidasi valid oleh Rian S. pada 15:32. Pekerja memanjat tangga vertikal silo tanpa mengaitkan hook pada rail pengaman. Tangga tidak dilengkapi fall arrester — masuk usulan perbaikan sarana.',
  },
  {
    id: 'ALR-0827-08',
    time: '15:19:10',
    source: 'gate',
    finding: 'APD tidak lengkap — chin strap helm',
    location: 'GATE-01 Portal Barat',
    object: 'Yanto P. · KBM-1180',
    placeholderLabel: 'Gambar Gate',
    severity: 'Peringatan',
    status: 'Ditutup',
    pic: 'Rian S.',
    summary:
      'Pemeriksaan gate menahan pekerja karena tali dagu helm tidak terpasang. Pekerja memperbaiki APD lalu lolos pemeriksaan ulang pada 15:22. Tidak naik ke elevasi sebelum lolos.',
  },
  {
    id: 'ALR-0827-07',
    time: '15:02:33',
    source: 'live',
    finding: 'Durasi kerja berlebih',
    location: 'Tangki BBM TK-01',
    object: 'CAM-13',
    placeholderLabel: 'Gambar 4',
    severity: 'Info',
    status: 'Terbuka',
    pic: 'Yusuf A.',
    summary: 'Tim pengecatan berada di elevasi lebih dari 4 jam menerus. Rotasi personel disarankan untuk menurunkan risiko kelelahan.',
  },
  {
    id: 'ALR-0827-06',
    time: '14:47:19',
    source: 'live',
    finding: 'Bekerja tanpa pengawas',
    location: 'Crusher Tower CR-02',
    object: 'CAM-04',
    placeholderLabel: 'Gambar 1',
    severity: 'Peringatan',
    status: 'Ditutup',
    pic: 'Rian S.',
    summary: 'Rompi pengawas tidak terdeteksi di area kerja selama 17 menit. Pengawas kembali ke lokasi setelah dihubungi via HT.',
  },
  {
    id: 'ALR-0827-05',
    time: '14:31:02',
    source: 'gate',
    finding: 'Sertifikat TKBT kedaluwarsa',
    location: 'GATE-01 Portal Barat',
    object: 'Hendra K. · CAT-2901',
    placeholderLabel: 'Gambar Gate',
    severity: 'Kritis',
    status: 'Terbuka',
    pic: 'Yusuf A.',
    summary:
      'Pekerja ditahan di gate. Sertifikat TKBT-1 habis masa berlaku 07/2026. Supervisor kontraktor diminta mengganti personel atau memperbarui sertifikasi sebelum pekerjaan dilanjutkan.',
  },
  {
    id: 'ALR-0827-04',
    time: '13:58:47',
    source: 'live',
    finding: 'Orang di zona bawah',
    location: 'Workshop HE — Platform B',
    object: 'CAM-09',
    placeholderLabel: 'Gambar 2',
    severity: 'Peringatan',
    status: 'Terbuka',
    pic: 'Yusuf A.',
    summary: 'Satu orang melintas di bawah platform servis boom saat pekerjaan berlangsung. Barikade sisi selatan ditemukan terbuka.',
  },
  {
    id: 'ALR-0827-03',
    time: '13:12:25',
    source: 'live',
    finding: 'Melewati batas railing',
    location: 'Conveyor Gallery CV-14',
    object: 'CAM-07',
    placeholderLabel: 'Gambar 2',
    severity: 'Peringatan',
    status: 'Terbuka',
    pic: 'Yusuf A.',
    summary: 'Pekerja keluar dari zona catwalk untuk menjangkau idler. Diberi teguran lisan oleh pengawas, pekerjaan dilanjutkan dengan platform tambahan.',
  },
];

export type FilterKey = 'all' | 'gate' | 'live' | 'open' | 'kritis';

export const filterOptions: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Semua' },
  { key: 'gate', label: 'Gate Check' },
  { key: 'live', label: 'Live Monitoring' },
  { key: 'open', label: 'Terbuka' },
  { key: 'kritis', label: 'Kritis' },
];

export function matchesFilter(alert: AlertItem, filter: FilterKey): boolean {
  switch (filter) {
    case 'gate':
      return alert.source === 'gate';
    case 'live':
      return alert.source === 'live';
    case 'open':
      return alert.status !== 'Ditutup';
    case 'kritis':
      return alert.severity === 'Kritis';
    default:
      return true;
  }
}
