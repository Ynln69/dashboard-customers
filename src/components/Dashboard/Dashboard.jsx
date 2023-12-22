import "../../scss/dashboard.scss";
import Customers from "../Customers/Customers";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h2 className="dashboard__title">Hello Evano 👋🏻 ,</h2>
      <Customers />
    </section>
  );
};

export default Dashboard;
