
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  Settings,
  ChartNoAxesCombined,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Users", icon: Users },
  { name: "Orders", icon: ShoppingCart },
  { name: "Products", icon: Package },
  { name: "Analytics", icon: ChartNoAxesCombined },
  { name: "Settings", icon: Settings },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <h2 className="brand">Admin<span>Pro</span></h2>

      <p className="menu-label">MAIN MENU</p>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`nav-item ${
                active === item.name ? "active" : ""
              }`}
              onClick={() => onNavigate(item.name)}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="avatar">AD</div>
        <div>
          <strong>Admin User</strong>
          <small>Administrator</small>
        </div>
      </div>
    </aside>
  );
                       }
          
