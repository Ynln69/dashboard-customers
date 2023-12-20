import sprite from "../../";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__thumb">
        <svg width={37} height={37}>
          <use xlinkHref={`${sprite}#setting`} />
        </svg>
        <h1 className="sidebar__title">
          Dashboard<span>v.01</span>
        </h1>
      </div>
      <ul>
        <li>
          <svg width={24} height={24}></svg>
          <h2>Dashboard</h2>
        </li>
        <li>
          <svg width={24} height={24}></svg>
          <h2>Product</h2>
        </li>
        <li>
          <svg width={24} height={24}></svg>
          <h2>Customers</h2>
        </li>
        <li>
          <svg width={24} height={24}></svg>
          <h2>Income</h2>
        </li>
        <li>
          <svg width={24} height={24}></svg>
          <h2>Promote</h2>
        </li>
        <li>
          <svg width={24} height={24}></svg>
          <h2>Help</h2>
        </li>
      </ul>
      <div>
        <img src="" alt="" />
        <div>
          <h3>Evano</h3>
          <p>Project Manager</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
