import sprite from "../../images/sprite.svg";
import "../../scss/customers.scss";
import CustomerTable from "../Table/Table";

const Customers = () => {
  return (
    <div className="customers">
      <div className="customers__container">
        <div>
          <h3 className="customers__title">All Customers</h3>
          <p className="customers__subtitle">Active Members</p>
        </div>
        <label htmlFor="" className="customers__label">
          <svg width={24} height={24}>
            <use xlinkHref={`${sprite}#search`} />
          </svg>
          <input
            type="text"
            className="customers__input"
            placeholder="Search"
          />
        </label>
      </div>
      <CustomerTable />
    </div>
  );
};

export default Customers;
