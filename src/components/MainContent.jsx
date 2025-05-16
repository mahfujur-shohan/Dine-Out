import CreateOrder from "./CreateOrder";
import OrderInfo from "./OrderInfo";

export default function MainContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder />
      <OrderInfo />
    </div>
  );
}
