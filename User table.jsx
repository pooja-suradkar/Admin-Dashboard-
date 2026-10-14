
import { Trash2, Mail, MapPin } from "lucide-react";

export default function UserTable({ users, onDelete }) {
  if (users.length === 0) {
    return <p className="empty-state">No users found.</p>;
  }

  return (
    <div className="table-scroll">
      <table className="user-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>City</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user-info">
                  <div className="user-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <strong>{user.name}</strong>
                </div>
              </td>

              <td>
                <span className="cell-detail">
                  <Mail size={14} />
                  {user.email}
                </span>
              </td>

              <td>
                <span className="cell-detail">
                  <MapPin size={14} />
                  {user.address?.city || "Unknown"}
                </span>
              </td>

              <td>
                <span className="status-badge">Active</span>
              </td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(user.id)}
                  aria-label={`Delete ${user.name}`}
                  title="Delete user"
                >
                  <Trash2 size={17} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
                    }
                
