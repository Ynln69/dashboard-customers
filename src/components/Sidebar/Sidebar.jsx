import sprite from "../../images/sprite.svg";
import "../../scss/sidebar.scss";
import User from "../../images/user.jpg";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__thumb">
        <svg width={37} height={37}>
          <use xlinkHref={`${sprite}#setting`} />
        </svg>
        <h1 className="sidebar__title">
          Dashboard<span className="sidebar__title-sub">v.01</span>
        </h1>
      </div>
      <div className="sidebar__box">
        <ul className="nav-list">
          <li className="nav-list__item">
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#key-square`} />
            </svg>
            <h2 className="nav-list__subtitle">Dashboard</h2>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="nav-list__item">
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#d-square`} />
            </svg>
            <h2 className="nav-list__subtitle">Product</h2>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="nav-list__item nav-list__item--active">
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#user-square`} />
            </svg>
            <h2 className="nav-list__subtitle nav-list__subtitle--active">
              Customers
            </h2>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="nav-list__item">
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#wallet-money`} />
            </svg>
            <h2 className="nav-list__subtitle">Income</h2>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="nav-list__item">
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#discount-shape`} />
            </svg>
            <h2 className="nav-list__subtitle">Promote</h2>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="nav-list__item">
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#message-question`} />
            </svg>
            <h2 className="nav-list__subtitle">Help</h2>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
        </ul>
        <div className="user">
          <img src={User} alt="user" />
          <div>
            <h3 className="user__title">Evano</h3>
            <p className="user__position">Project Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
