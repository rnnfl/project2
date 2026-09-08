import { NavLink } from 'react-router-dom';

const operasional = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/gate-check', label: 'Gate Check' },
  { to: '/live-monitoring', label: 'Live Monitoring', badge: 3 },
];

const tindakLanjut = [{ to: '/alert-insiden', label: 'Alert & Insiden', badge: 5 }];

function NavItem({ to, label, badge, end }: { to: string; label: string; badge?: number; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
          isActive
            ? 'bg-white/10 font-semibold text-white'
            : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
        }`
      }
    >
      <span>{label}</span>
      {badge ? (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-semibold text-white">
          {badge}
        </span>
      ) : null}
    </NavLink>
  );
}

function Sidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col overflow-y-auto bg-[#14151d] px-4 py-5">
      <div className="mb-8 flex items-center gap-3 px-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-lime-400">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#14151d]" fill="currentColor">
            <path d="M12 3 2 20h20L12 3Zm0 4.2 6.6 11.4H5.4L12 7.2Z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold leading-tight text-white">HEIGHTWATCH</p>
          <p className="text-[10px] font-medium tracking-widest text-gray-500">ANALITIK KETINGGIAN</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-6">
        <div>
          <p className="mb-2 px-3 text-[11px] font-semibold tracking-widest text-gray-600">OPERASIONAL</p>
          <div className="flex flex-col gap-1">
            {operasional.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 px-3 text-[11px] font-semibold tracking-widest text-gray-600">TINDAK LANJUT</p>
          <div className="flex flex-col gap-1">
            {tindakLanjut.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      </nav>

      <div className="border-t border-white/10 px-1 pt-4">
        <p className="text-sm font-semibold text-white">Rian Saputra</p>
        <p className="text-xs text-gray-500">SHE Officer · Ruang Kendali</p>
      </div>
    </aside>
  );
}

export default Sidebar;
