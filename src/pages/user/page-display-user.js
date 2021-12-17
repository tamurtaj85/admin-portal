import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// Icons
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VerifiedIcon from "@mui/icons-material/Verified";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";

import { Services } from "../../services";

// Table headings
const tableHeadings = ["Sr No", "", "Full Name", "Email", "Account Status"];

// Main user component
export const PageDisplayUser = () => {
  const [users, setUsers] = useState([]);

  async function getUsersData() {
    const response = await Services.Users.getUsers();
    setUsers(await response.data);
    // console.log(response);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Container>
      <h1 className="mb-5">Users</h1>
      <Table hover>
        <thead>
          <tr>{SetTableHeading(tableHeadings)}</tr>
        </thead>
        <tbody>{SetTableData(users)}</tbody>
      </Table>
    </Container>
  );
};

const SetTableHeading = (headings = []) => {
  return headings.map((heading) => {
    return <th>{heading}</th>;
  });
};

const SetTableData = (data) => {
  return data.map((user, index) => {
    return (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td>
          <Link to={`/edit-user/${user._id}`}>
            <ModeEditIcon style={{ color: "#F45118" }} />
          </Link>
        </td>
        <td>{user.fullName}</td>
        <td>{user.email}</td>
        <td>
          {user.verified ? (
            <VerifiedIcon style={{ color: "green" }} />
          ) : (
            <GppMaybeIcon style={{ color: "red" }} />
          )}
        </td>
      </tr>
    );
  });
};
