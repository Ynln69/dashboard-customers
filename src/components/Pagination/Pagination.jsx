import "../../scss/customers.scss";

const Pagination = () => {
  return (
    <div className="customers__pagination">
      <p className="customers__data">Showing data 1 to 8 of 256K entries</p>
      <ul className="customers__list">
        <li className="customers__item">
          <span>&#10094;</span>
        </li>
        <li className="customers__item  customers__item--active">1</li>
        <li className="customers__item">2</li>
        <li className="customers__item">3</li>
        <li className="customers__item">4</li>
        <li className="customers__item">...</li>
        <li className="customers__item">40</li>
        <li className="customers__item">
          <span>&#10095;</span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
