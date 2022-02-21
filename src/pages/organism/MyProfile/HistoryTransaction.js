/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { getTransaction } from "../../../services/transaction";
import NumberFormat from "react-number-format";
import moment from "moment";

export default function HistoryTransaction() {
  const [listTrx, setListTrx] = useState([]);

  useEffect(async () => {
    const response = await getTransaction();
    setListTrx(response.data.data);
  }, []);

  return (
    <Col sm={6} className="profile-history-transactions">
      <h1>History Transaction</h1>
      <div className="transactions-list">
        {listTrx.map((list) => (
          <div className="transaction-item-container">
            <div className="transaction-item-info">
              <h3>{list.films.title}</h3>
              <p>
                <div className="text-day">
                  <p>{moment(list.orderDate).format("dddd")}</p>
                </div>
                , {moment(list.orderDate).subtract(10, "days").calendar()}
              </p>
              <p>
                <NumberFormat
                  value={`${list.films.price}`}
                  className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp. "}
                  renderText={(value, props) => <div {...props}>{value}</div>}
                />
              </p>
            </div>
            <div className="transaction-item-status">
              <div className="transaction-status">{list.status}</div>
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
}
