import React, { useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";

export const HamburgerStall = () => {
  const [order, setOrder] = useState([]);
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [total, setTotal] = useState(0);
  const [profit, setProfit] = useState([]);
  const [searchedOrders, setSearchedOrders] = useState([]);
  const [searchTotal, setSearchTotal] = useState(0);

  const items = [
    { name: 'cheeseburger with cheese', price: 5 },
    { name: 'cheeseburger without cheese', price: 4 },
    { name: 'chips', price: 3 },
    { name: 'coke', price: 2 },
  ];

const handleAddItem = () => {
  if (item) {
    const itemPrice = items.find(i => i.name === item).price;
    setOrder([...order, { item, quantity, price: itemPrice * quantity, index: order.length + 1 }]);
    setTotal(total + itemPrice * quantity);
    setItem('');
    setQuantity(1);
  }
};

const handleRemoveItem = (index) => {
  const newOrder = order.filter((_, i) => i !== index);
  setOrder(newOrder);
  setTotal(total - order[index].price);
};

 const handleSearch = async () => {
  const date = new Date(year, month - 1, day);
  const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  const response = await axios.get(`http://localhost:8080/api/v1/orders/getByDate?date=${utcDate.toISOString().split('T')[0]}`);

  const data = await response.data;
  setSearchedOrders(data);
  
  // Calculate the total price of all orders in the searchedOrders array

  const searchTotal = data.reduce((acc, cur) => acc + cur.total, 0);

  setSearchTotal(searchTotal);
};

const handleSaveOrder = async () => {
  const currentDate = new Date();
  setDay(currentDate.getDate());
  setMonth(currentDate.getMonth() + 1);
  setYear(currentDate.getFullYear());
  const order_description = order.map((o, i) => `${i + 1}. ${o.item} x ${o.quantity}`).join(' - ');
  const time = new Date().toLocaleTimeString();
  const total = order.reduce((acc, cur) => acc + cur.price, 0);
  const orderData = { order_description, day, month, year, time, total };
  await axios.post('http://localhost:8080/api/v1/orders/create', orderData);
};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="section" style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <h2>Order</h2>
        <select value={item} onChange={e => setItem(e.target.value)} style={{ marginRight: '1rem' }}>
          <option value="">Select item</option>
          {items.map(i => <option key={i.name} value={i.name}>{i.name}</option>)}
        </select>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} style={{ marginRight: '1rem' }} />
        <button onClick={handleAddItem} disabled={!item}>Add to order</button>
      </div>
      <div className="section">
        <ul>
          {order.map((o, i) => (
            <li key={i} style={{ marginBottom: '1rem' }}>
              {i + 1}. {o.item} x {o.quantity} - ${o.price}
              <button onClick={() => handleRemoveItem(i)} style={{ marginLeft: '1rem' }}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${total}</p>
        <button onClick={handleSaveOrder}>Save order</button>
      </div>
      <div className="section" style={{ marginTop: '1rem' }}>
        <h2>Search orders</h2>
        <input type="number" placeholder="Day" value={day} onChange={e => setDay(e.target.value)} style={{ marginRight: '1rem' }} min={1} max={31} />
        <input type="number" placeholder="Month" value={month} onChange={e => setMonth(e.target.value)} style={{ marginRight: '1rem' }} min={1} max={12} />
        <input type="number" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} style={{ marginRight: '1rem' }} min={2023} max={2043} />
        <button onClick={handleSearch}>Search</button>
  
  <MDBTable bordered>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Time</th>
          				<th scope='col'>description</th>
         				<th scope='col'>total</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {searchedOrders.map((searchedOrders) => (<tr key={searchedOrders.order_description}>
						<th scope='row'>{searchedOrders.time}</th>
                      
                        <td>
                            {searchedOrders.order_description}
                        </td>
                        <td>
                            {searchedOrders.total}
                        </td>

                    </tr>))}
                </MDBTableBody>
            </MDBTable>
<p>Total: ${searchTotal}</p>

      </div>
    </div>
  );
};