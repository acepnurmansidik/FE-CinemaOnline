import React from "react";
import { Col } from "react-bootstrap";

export default function HistoryTransaction() {
  return (
    <Col sm={6} className="profile-history-transactions">
      <h1>History Transaction</h1>
      <div className="transactions-list">
        <div className="transaction-item-container">
          <div className="transaction-item-info">
            <h3>Tom & Jerry</h3>
            <p>
              <div className="text-day">
                <p>Saturday</p>
              </div>
              , 12 Aril 2022
            </p>
            <p>Rp. 5000</p>
          </div>
          <div className="transaction-item-status">
            <div className="transaction-status">Success</div>
          </div>
        </div>
      </div>
    </Col>
  );
}
