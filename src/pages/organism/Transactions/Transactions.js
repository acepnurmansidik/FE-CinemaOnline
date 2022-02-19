import React, { useState } from "react";
import { Container, Dropdown, DropdownButton, Table } from "react-bootstrap";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";

export default function Transactions() {
  return (
    <Container>
      <NavigationBar />
      <div className="transactions-title">
        <p>Incoming Transaction</p>
      </div>
      <div className="table-transactions">
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
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

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">
                      <p className="approved">Approved</p>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <p className="cancel">Cancel</p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
