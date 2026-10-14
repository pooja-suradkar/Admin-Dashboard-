
import { Users, IndianRupee, ShoppingBag, Package } from "lucide-react";

const icons = {
  users: Users,
  revenue: IndianRupee,
  orders: ShoppingBag,
  products: Package,
};

export default function StatCard({ title, value, change, type }) {
  const Icon = icons[type];

  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>
        <div className={`stat-icon ${type}`}>
          <Icon size={21} />
        </div>
      </div>

      <h2>{value}</h2>

      <p className="stat-change">
        <span>{change}</span> from last month
      </p>
    </div>
  );
        }
