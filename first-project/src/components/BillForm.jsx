import { useState } from "react";
import "./BillForm.css";

function BillForm({ setBill }) {
  const [billType, setBillType] = useState("Electric");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");

  const calculateBill = () => {
    if (amount === "" || quantity === "") {
      alert("Please enter all information.");
      return;
    }

    const total = Number(amount) * Number(quantity);

    setBill({
      type: billType,
      amount: Number(amount),
      quantity: Number(quantity),
      total: total
    });
  };

  return (
    <div className="form-container">
      <h2>Enter Bill Information</h2>

      <label>Bill Type:</label>
      <select
        value={billType}
        onChange={(e) => setBillType(e.target.value)}
      >
        <option>Electric</option>
        <option>Water</option>
        <option>Food</option>
        <option>Internet</option>
        <option>Other</option>
      </select>

      <label>Price / Rate:</label>
      <input
        type="number"
        placeholder="Enter price or rate"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>Quantity / Usage:</label>
      <input
        type="number"
        placeholder="Enter quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={calculateBill}>
        Calculate Bill
      </button>
    </div>
  );
}

export default BillForm;