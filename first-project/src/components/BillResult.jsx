import "./BillResult.css";

function BillResult({ bill }) {
  if (!bill) {
    return (
      <div className="result">
        <h2>Bill Result</h2>
        <p>No bill calculated yet.</p>
      </div>
    );
  }

  return (
    <div className="result">
      <h2>Bill Result</h2>

      <p>
        <strong>Bill Type:</strong> {bill.type}
      </p>

      <p>
        <strong>Price / Rate:</strong> ₱{bill.amount}
      </p>

      <p>
        <strong>Quantity / Usage:</strong> {bill.quantity}
      </p>

      <h3>Total Bill: ₱{bill.total.toFixed(2)}</h3>
    </div>
  );
}

export default BillResult;