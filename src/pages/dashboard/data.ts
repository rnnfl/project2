export type SiteStatus = 'Aman' | 'Hook lepas' | 'Luar zona aman' | 'Zona bawah terisi';

export interface ActiveSite {
  location: string;
  description: string;
  camera: string;
  workers: number;
  height: string;
  contractor: string;
  status: SiteStatus;
}

export const activeSites: ActiveSite[] = [
  {
    location: 'Crusher Tower CR-02',
    description: 'Ganti liner chute lantai 4',
    camera: 'CAM-04',
    workers: 4,
    height: '18 m',
    contractor: 'Sarana Tambang Utama',
    status: 'Hook lepas',
  },
  {
    location: 'Conveyor Gallery CV-14',
    description: 'Penggantian idler bentang 3',
    camera: 'CAM-07',
    workers: 3,
    height: '11 m',
    contractor: 'Karya Bumi Mandiri',
    status: 'Luar zona aman',
  },
  {
    location: 'Silo Batubara SL-03',
    description: 'Inspeksi level sensor',
    camera: 'CAM-11',
    workers: 2,
    height: '24 m',
    contractor: 'Internal — Plant',
    status: 'Zona bawah terisi',
  },
  {
    location: 'Menara Penerangan LT-07',
    description: 'Perbaikan lampu sorot',
    camera: 'CAM-02',
    workers: 2,
    height: '9 m',
    contractor: 'Karya Bumi Mandiri',
    status: 'Aman',
  },
  {
    location: 'Workshop HE — Platform B',
    description: 'Servis boom excavator',
    camera: 'CAM-09',
    workers: 6,
    height: '6 m',
    contractor: 'Internal — Maintenance',
    status: 'Aman',
  },
  {
    location: 'Tangki BBM TK-01',
    description: 'Pengecatan dinding tangki',
    camera: 'CAM-13',
    workers: 6,
    height: '14 m',
    contractor: 'Sarana Tambang Utama',
    status: 'Aman',
  },
];

export type EventSeverity = 'critical' | 'resolved' | 'pending';

export interface ActivityEvent {
  time: string;
  camera: string;
  message: string;
  location: string;
  severity: EventSeverity;
}

export const activityEvents: ActivityEvent[] = [
  {
    time: '15:30:44',
    camera: 'CAM-11',
    message: 'Memanjat tangga tanpa hook',
    location: 'Silo Batubara SL-03',
    severity: 'critical',
  },
  {
    time: '15:19:10',
    camera: 'Gate Check',
    message: 'APD tidak lengkap — chin strap helm',
    location: 'GATE-01 Portal Barat',
    severity: 'resolved',
  },
  {
    time: '15:02:33',
    camera: 'CAM-13',
    message: 'Durasi kerja berlebih',
    location: 'Tangki BBM TK-01',
    severity: 'pending',
  },
  {
    time: '14:47:19',
    camera: 'CAM-04',
    message: 'Bekerja tanpa pengawas',
    location: 'Crusher Tower CR-02',
    severity: 'critical',
  },
  {
    time: '14:31:02',
    camera: 'Gate Check',
    message: 'Sertifikat TKBT kedaluwarsa',
    location: 'GATE-01 Portal Barat',
    severity: 'critical',
  },
];

export interface GateCheckRow {
  label: string;
  value: number;
  tone: 'dark' | 'gray' | 'red';
}

export const gateCheckRows: GateCheckRow[] = [
  { label: 'Lolos langsung', value: 72, tone: 'dark' },
  { label: 'Lolos setelah perbaikan', value: 5, tone: 'gray' },
  { label: 'Ditahan', value: 5, tone: 'red' },
];

export interface CameraIssue {
  camera: string;
  label: string;
}

export const cameraIssues: CameraIssue[] = [
  { camera: 'CAM-06 Ramp Utara', label: 'Lensa berdebu' },
  { camera: 'CAM-15 Stockpile', label: 'Offline 2j 14m' },
];

export interface FollowUpItem {
  label: string;
  count: number;
}

export const followUpItems: FollowUpItem[] = [
  { label: 'Notifikasi belum divalidasi', count: 3 },
  { label: 'Alert terbuka', count: 5 },
  { label: 'SIKA kedaluwarsa < 2 jam', count: 2 },
  { label: 'Sertifikat TKBT habis bulan ini', count: 4 },
];
