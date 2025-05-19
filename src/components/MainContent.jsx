import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderInfo from "./OrderInfo";

export default function MainContent() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orders, setOrders] = useState([]);

  function handleOrders(customerName, totalPrice) {
    // console.log(customerName);
    setOrders([...orders, { id: 1, name: customerName, amount: totalPrice }]);
  }

  function handleTotalPrice(item) {
    const updatedPrice = totalPrice + item.price;
    setTotalPrice(updatedPrice);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder
        totalPrice={totalPrice}
        handleTotalPrice={handleTotalPrice}
        handleOrders={handleOrders}
        setTotalPrice={setTotalPrice}
      />
      <OrderInfo orders={orders} />
    </div>
  );
}
