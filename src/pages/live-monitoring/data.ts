export type CamStatus = 'ok' | 'warn' | 'bad';
export type Severity = 'Kritis' | 'Peringatan' | 'Info';

export interface CamTag {
  label: string;
  tone: CamStatus;
}

export interface TimelineEntry {
  time: string;
  text: string;
  tone: CamStatus;
}

export interface CameraFeed {
  id: string;
  location: string;
  status: CamStatus;
  placeholderLabel: string;
  height: string;
  workers: number;
  contractor: string;
  job: string;
  sika: string;
  validUntil: string;
  tags: CamTag[];
  timeline: TimelineEntry[];
}

export const cameraFeeds: CameraFeed[] = [
  {
    id: 'CAM-04',
    location: 'Crusher Tower CR-02',
    status: 'bad',
    placeholderLabel: 'Gambar 1',
    height: '18 m',
    workers: 4,
    contractor: 'PT Sarana Tambang Utama',
    job: 'Ganti liner chute lantai 4',
    sika: 'SIKA-2026-0417',
    validUntil: '17:30',
    tags: [
      { label: 'Hook lepas', tone: 'bad' },
      { label: '4 pekerja terdeteksi', tone: 'ok' },
    ],
    timeline: [
      { time: '15:41:22', text: 'Hook lanyard tidak terpasang — pekerja B', tone: 'bad' },
      { time: '15:22:08', text: 'Pekerja masuk platform lantai 4', tone: 'ok' },
      { time: '14:58:40', text: 'Verifikasi anchor point oleh pengawas', tone: 'ok' },
      { time: '14:02:11', text: 'SIKA diaktifkan, 4 pekerja lolos gate', tone: 'ok' },
    ],
  },
  {
    id: 'CAM-07',
    location: 'Conveyor Gallery CV-14',
    status: 'warn',
    placeholderLabel: 'Gambar 2',
    height: '11 m',
    workers: 3,
    contractor: 'PT Karya Bumi Mandiri',
    job: 'Penggantian idler bentang 3',
    sika: 'SIKA-2026-0421',
    validUntil: '18:00',
    tags: [
      { label: 'Luar zona aman', tone: 'warn' },
      { label: 'Harness lengkap', tone: 'ok' },
    ],
    timeline: [
      { time: '15:28:51', text: 'Melewati batas railing catwalk', tone: 'bad' },
      { time: '15:10:02', text: 'Rotasi pekerja, 1 turun 1 naik', tone: 'ok' },
      { time: '13:45:19', text: 'Pekerjaan dimulai', tone: 'ok' },
    ],
  },
  {
    id: 'CAM-11',
    location: 'Silo Batubara SL-03',
    status: 'bad',
    placeholderLabel: 'Gambar 3',
    height: '24 m',
    workers: 2,
    contractor: 'Internal — Plant',
    job: 'Inspeksi level sensor',
    sika: 'SIKA-2026-0419',
    validUntil: '16:45',
    tags: [
      { label: 'Zona bawah terisi', tone: 'bad' },
      { label: 'Memanjat tanpa hook', tone: 'bad' },
    ],
    timeline: [
      { time: '15:36:04', text: '2 orang melintas di zona jatuhan material', tone: 'bad' },
      { time: '15:30:44', text: 'Pekerja memanjat tangga vertikal', tone: 'warn' },
      { time: '15:12:00', text: 'Barikade zona bawah dipasang', tone: 'ok' },
    ],
  },
  {
    id: 'CAM-02',
    location: 'Menara Penerangan LT-07',
    status: 'ok',
    placeholderLabel: 'Gambar 4',
    height: '9 m',
    workers: 2,
    contractor: 'PT Karya Bumi Mandiri',
    job: 'Perbaikan lampu sorot',
    sika: 'SIKA-2026-0418',
    validUntil: '19:00',
    tags: [
      { label: 'Semua aman', tone: 'ok' },
      { label: 'Double lanyard terpasang', tone: 'ok' },
    ],
    timeline: [
      { time: '15:04:33', text: 'Pemeriksaan berkala — tidak ada temuan', tone: 'ok' },
      { time: '14:20:15', text: 'Pekerjaan dimulai, 2 pekerja', tone: 'ok' },
    ],
  },
];

export interface DetectionRule {
  label: string;
  severity: Severity;
  description: string;
}

export const detectionRules: DetectionRule[] = [
  { label: 'Hook lanyard tidak terpasang', severity: 'Kritis', description: '> 10 detik tanpa hook pada anchor' },
  { label: 'Deteksi jatuh', severity: 'Kritis', description: 'perubahan posisi vertikal mendadak' },
  { label: 'Orang di zona bawah', severity: 'Kritis', description: 'siluet manusia dalam poligon jatuhan' },
  { label: 'Melewati batas railing', severity: 'Peringatan', description: 'centroid di luar zona catwalk' },
  { label: 'Bekerja tanpa pengawas', severity: 'Peringatan', description: 'tidak ada rompi pengawas > 15 menit' },
  { label: 'Durasi kerja berlebih', severity: 'Info', description: '> 4 jam menerus di elevasi' },
];

export type NotifStatus = 'pending' | 'valid' | 'false';

export interface LiveNotification {
  nid: string;
  time: string;
  elapsedSeconds: number;
  detected: string;
  camera: string;
  location: string;
  severity: Severity;
  confidence: string;
  description: string;
  status: NotifStatus;
  validatedAt?: string;
  alertId?: string;
  falseReason?: string;
}

export const initialNotifications: LiveNotification[] = [
  {
    nid: 'NTF-118',
    time: '15:41:22',
    elapsedSeconds: 46,
    detected: 'Hook lanyard tidak terpasang',
    camera: 'CAM-04',
    location: 'Crusher Tower CR-02',
    severity: 'Kritis',
    confidence: '0,92',
    description: 'Pekerja berpindah posisi di platform lantai 4 tanpa hook terpasang selama 38 detik.',
    status: 'pending',
  },
  {
    nid: 'NTF-117',
    time: '15:36:04',
    elapsedSeconds: 364,
    detected: 'Orang di zona bawah',
    camera: 'CAM-11',
    location: 'Silo Batubara SL-03',
    severity: 'Kritis',
    confidence: '0,88',
    description: 'Dua orang melintas di poligon zona jatuhan material saat pekerjaan di elevasi 24 m berlangsung.',
    status: 'pending',
  },
  {
    nid: 'NTF-116',
    time: '15:28:51',
    elapsedSeconds: 796,
    detected: 'Melewati batas railing',
    camera: 'CAM-07',
    location: 'Conveyor Gallery CV-14',
    severity: 'Peringatan',
    confidence: '0,76',
    description: 'Pekerja menjangkau idler di luar batas catwalk. Harness terpasang, posisi kerja di luar zona JSA.',
    status: 'pending',
  },
];

export interface SimPoolEntry {
  detected: string;
  camera: string;
  location: string;
  severity: Severity;
  confidence: string;
  description: string;
}

export const simPool: SimPoolEntry[] = [
  {
    detected: 'Memanjat tangga tanpa hook',
    camera: 'CAM-11',
    location: 'Silo Batubara SL-03',
    severity: 'Kritis',
    confidence: '0,84',
    description: 'Pekerja memanjat tangga vertikal silo tanpa mengaitkan hook pada rail pengaman.',
  },
  {
    detected: 'Bekerja tanpa pengawas',
    camera: 'CAM-04',
    location: 'Crusher Tower CR-02',
    severity: 'Peringatan',
    confidence: '0,71',
    description: 'Rompi pengawas tidak terdeteksi di area kerja selama 15 menit terakhir.',
  },
  {
    detected: 'Durasi kerja berlebih',
    camera: 'CAM-02',
    location: 'Menara Penerangan LT-07',
    severity: 'Info',
    confidence: '0,95',
    description: 'Tim berada di elevasi lebih dari 4 jam menerus. Rotasi personel disarankan.',
  },
];

export const falseAlarmReasons: string[] = [
  'Objek bukan manusia (alat berat)',
  'Bayangan / pantulan cahaya',
  'Hook terpasang, tertutup badan',
  'Pekerja sudah turun',
  'Area sudah dibarikade',
];
