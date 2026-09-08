export type CheckStatus = 'ok' | 'warn' | 'bad';
export type GateVerdict = 'ok' | 'bad';

export interface ApdCheck {
  label: string;
  status: CheckStatus;
  confidence: string;
}

export interface DocumentRow {
  label: string;
  value: string;
}

export interface GateWorker {
  initials: string;
  name: string;
  badgeId: string;
  role: string;
  time: string;
  destination: string;
  verdict: GateVerdict;
  checks: ApdCheck[];
  docs: DocumentRow[];
  note: string;
  finding: string;
}

export const gateWorkers: GateWorker[] = [
  {
    initials: 'AS',
    name: 'Ahmad Sulaiman',
    badgeId: 'STU-4471',
    role: 'Rigger · PT Sarana Tambang Utama',
    time: '15:38',
    destination: 'Crusher Tower CR-02',
    verdict: 'ok',
    checks: [
      { label: 'Helm + tali dagu', status: 'ok', confidence: '0,97' },
      { label: 'Full body harness', status: 'ok', confidence: '0,95' },
      { label: 'Double lanyard (2 hook besar)', status: 'ok', confidence: '0,93' },
      { label: 'Sepatu safety', status: 'ok', confidence: '0,98' },
      { label: 'Rompi hi-vis', status: 'ok', confidence: '0,99' },
      { label: 'Kacamata pelindung', status: 'ok', confidence: '0,91' },
    ],
    docs: [
      { label: 'SIKA Ketinggian', value: 'SIKA-2026-0417' },
      { label: 'Berlaku sampai', value: '27/08 17:30' },
      { label: 'Sertifikat TKBT', value: 'TKBT-2 · valid s/d 03/2027' },
      { label: 'Fit to work', value: 'Lolos · 06:12' },
      { label: 'Rescue plan', value: 'Terlampir' },
    ],
    note: 'Semua APD wajib terdeteksi lengkap. Pekerja diizinkan naik ke Crusher Tower CR-02.',
    finding: '',
  },
  {
    initials: 'BW',
    name: 'Bagus Wicaksono',
    badgeId: 'KBM-2210',
    role: 'Teknisi · PT Karya Bumi Mandiri',
    time: '15:34',
    destination: 'Conveyor Gallery CV-14',
    verdict: 'bad',
    checks: [
      { label: 'Helm + tali dagu', status: 'warn', confidence: '0,72' },
      { label: 'Full body harness', status: 'ok', confidence: '0,94' },
      { label: 'Double lanyard (2 hook besar)', status: 'bad', confidence: '—' },
      { label: 'Sepatu safety', status: 'ok', confidence: '0,96' },
      { label: 'Rompi hi-vis', status: 'ok', confidence: '0,98' },
      { label: 'Kacamata pelindung', status: 'ok', confidence: '0,88' },
    ],
    docs: [
      { label: 'SIKA Ketinggian', value: 'SIKA-2026-0421' },
      { label: 'Berlaku sampai', value: '27/08 18:00' },
      { label: 'Sertifikat TKBT', value: 'TKBT-1 · valid s/d 11/2026' },
      { label: 'Fit to work', value: 'Lolos · 06:04' },
      { label: 'Rescue plan', value: 'Terlampir' },
    ],
    note: 'Hanya satu hook lanyard terdeteksi. Kerja di CV-14 mensyaratkan double lanyard karena ada perpindahan posisi. Tali dagu helm juga tampak longgar.',
    finding: 'Double lanyard tidak lengkap',
  },
  {
    initials: 'DP',
    name: 'Dedi Prasetyo',
    badgeId: 'INT-0912',
    role: 'Mekanik · Internal Maintenance',
    time: '15:29',
    destination: 'Silo Batubara SL-03',
    verdict: 'ok',
    checks: [
      { label: 'Helm + tali dagu', status: 'ok', confidence: '0,96' },
      { label: 'Full body harness', status: 'ok', confidence: '0,97' },
      { label: 'Double lanyard (2 hook besar)', status: 'ok', confidence: '0,90' },
      { label: 'Sepatu safety', status: 'ok', confidence: '0,99' },
      { label: 'Rompi hi-vis', status: 'ok', confidence: '0,97' },
      { label: 'Kacamata pelindung', status: 'ok', confidence: '0,86' },
    ],
    docs: [
      { label: 'SIKA Ketinggian', value: 'SIKA-2026-0419' },
      { label: 'Berlaku sampai', value: '27/08 16:45' },
      { label: 'Sertifikat TKBT', value: 'TKBT-2 · valid s/d 08/2028' },
      { label: 'Fit to work', value: 'Lolos · 05:58' },
      { label: 'Rescue plan', value: 'Terlampir' },
    ],
    note: 'SIKA berakhir 16:45. Sistem akan mengingatkan pengawas 30 menit sebelum masa berlaku habis.',
    finding: '',
  },
  {
    initials: 'MR',
    name: 'M. Ridwan',
    badgeId: 'CAT-3388',
    role: 'Pengecat · CV Anugerah Teknik',
    time: '15:21',
    destination: 'Tangki BBM TK-01',
    verdict: 'bad',
    checks: [
      { label: 'Helm + tali dagu', status: 'ok', confidence: '0,94' },
      { label: 'Full body harness', status: 'bad', confidence: '—' },
      { label: 'Double lanyard (2 hook besar)', status: 'bad', confidence: '—' },
      { label: 'Sepatu safety', status: 'ok', confidence: '0,95' },
      { label: 'Rompi hi-vis', status: 'warn', confidence: '0,68' },
      { label: 'Kacamata pelindung', status: 'ok', confidence: '0,89' },
    ],
    docs: [
      { label: 'SIKA Ketinggian', value: 'Tidak ditemukan' },
      { label: 'Berlaku sampai', value: '—' },
      { label: 'Sertifikat TKBT', value: 'Kedaluwarsa 07/2026' },
      { label: 'Fit to work', value: 'Lolos · 06:22' },
      { label: 'Rescue plan', value: 'Belum diunggah' },
    ],
    note: 'Harness tidak terdeteksi dan sertifikat TKBT sudah kedaluwarsa. Pekerja tidak boleh naik sampai dokumen diperbarui oleh supervisor kontraktor.',
    finding: 'Harness tidak terdeteksi + TKBT kedaluwarsa',
  },
];
