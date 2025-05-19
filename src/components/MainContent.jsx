import { useState } from "react";
import { nextId } from "../utils/utils";
import CreateOrder from "./CreateOrder";
import OrderInfo from "./OrderInfo";

export default function MainContent() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orders, setOrders] = useState([]);

  function handleDelete(id) {
    // console.log("clicked deleted");
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  }

  function handleDeliver(order) {
    // console.log(order);
    const deliverOrder = orders.map((o) => {
      if (o.id === order.id) {
        return {
          ...o,
          status: "DELIVERED",
        };
      } else {
        return o;
      }
    });
    setOrders(deliverOrder);
  }

  function handleOrders(customerName, totalPrice) {
    // console.log(customerName);
    setOrders((prevOrders) => [
      {
        id: nextId(prevOrders),
        name: customerName,
        amount: totalPrice,
        status: "PENDING",
      },
      ...prevOrders,
    ]);
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
      <OrderInfo
        orders={orders}
        handleDeliver={handleDeliver}
        handleDelete={handleDelete}
      />
    </div>
  );
}
