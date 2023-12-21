import customerData from "../data/customers.json";
import "../../scss/customers.scss";

const CustomerTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th className="customers__th">Customer Name</th>
          <th className="customers__th">Company</th>
          <th className="customers__th">Phone Number</th>
          <th className="customers__th">Email</th>
          <th className="customers__th">Country</th>
          <th className="customers__th">Status</th>
        </tr>
      </thead>
      <tbody>
        {customerData.map((customer, index) => (
          <tr key={index}>
            <td className="customers__td">{customer.name}</td>
            <td className="customers__td">{customer.company}</td>
            <td className="customers__td">{customer.number}</td>
            <td className="customers__td">{customer.email}</td>
            <td className="customers__td">{customer.country}</td>
            <td className="customers__td ">
              <p
                className={`customers__status ${
                  customer.status === "Active"
                    ? "customers__status--active"
                    : "customers__status--inactive"
                }`}
              >
                {customer.status}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
