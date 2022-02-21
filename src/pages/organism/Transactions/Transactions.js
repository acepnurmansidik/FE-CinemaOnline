/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getTransaction,
  updateTransaction,
  getTransactionSpecific,
} from "../../../services/transaction";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function Transactions() {
  const router = useNavigate();
  const [trxs, setTrxs] = useState([]);

  // validator
  useEffect(() => {
    if (
      !Cookies.get("token") ||
      jwtDecode(atob(Cookies.get("token"))).status !== "admin"
    ) {
      router("/");
    }
  }, [router]);

  // GET data trx
  useEffect(async () => {
    const response = await getTransaction();
    setTrxs(response.data.data);
  }, []);

  return (
    <Container>
      <NavigationBar />
      <div className="transactions-title">
        <p>Incoming Transaction</p>
      </div>
      <div className="table-transactions">
        <DropdownButton id="dropdown-basic-buttonTRX" title="Select Filter">
          <Dropdown.Item
            style={{ color: "#999" }}
            onClick={async () => {
              const response = await getTransaction();
              setTrxs(response.data.data);
            }}
          >
            All
          </Dropdown.Item>
          <Dropdown.Item
            style={{ color: "#999" }}
            onClick={async () => {
              const response = await getTransactionSpecific("pending");
              setTrxs(response.data.data);
            }}
          >
            Pending
          </Dropdown.Item>
          <Dropdown.Item
            style={{ color: "#999" }}
            onClick={async () => {
              const response = await getTransactionSpecific("approved");
              setTrxs(response.data.data);
            }}
          >
            Approved
          </Dropdown.Item>
          <Dropdown.Item
            style={{ color: "#999" }}
            onClick={async () => {
              const response = await getTransactionSpecific("cancel");
              setTrxs(response.data.data);
            }}
          >
            Cancel
          </Dropdown.Item>
        </DropdownButton>
        <Table striped bordered hover variant="dark" responsive="sm">
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Film</th>
              <th>Number Account</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trxs.map((trx, i) => (
              <tr key={trx.id}>
                <td>{i + 1}</td>
                <td>{trx.users.fullname}</td>
                <td>{trx.transferProof}</td>
                <td>{trx.films.title}</td>
                <td>{trx.accountNumber}</td>
                {trx.status === "pending" ? (
                  <td style={{ color: "#F7941E" }}>{trx.status}</td>
                ) : trx.status === "approved" ? (
                  <td style={{ color: "#0ACF83" }}>{trx.status}</td>
                ) : (
                  <td style={{ color: "#FF0742" }}>{trx.status}</td>
                )}
                <td>
                  <Dropdown>
                    <Dropdown.Toggle>
                      <img
                        src="../assets/icons/polygon.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item
                        onClick={() => {
                          updateTransaction(trx.id, "approved");
                          window.location.reload();
                        }}
                      >
                        <p className="approved">Approved</p>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          updateTransaction(trx.id, "cancel");
                          window.location.reload();
                        }}
                      >
                        <p className="cancel">Cancel</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
