import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== _id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== _id);
          const approving = orders.find((odr) => odr._id === _id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h2>You have orders: {orders.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
