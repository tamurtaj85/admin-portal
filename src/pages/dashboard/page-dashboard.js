import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import CategoryIcon from "@mui/icons-material/Category";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import { ProductChart } from "./configs-product";
import { UserChart } from "./configs-users";
import { OrderChart } from "./configs-orders";
import { CategoryChart } from "./configs-category";

const style = {
  width: "100%",
  // maxWidth: 360,
  bgcolor: "background.paper",
};

const mValue = 1;
const pValue = 3;

export const PageDashboard = () => {
  return (
    <Container>
      <h1 className="mb-5">Dashboard</h1>
      <Row sm={2}>
        <Col>
          <Row
            className={`border border-secondary rounded m-${mValue} p-${pValue}`}
          >
            <h3>Products</h3>
            <ProductChart />
          </Row>
          <Row
            className={`border border-secondary rounded m-${mValue} p-${pValue}`}
          >
            <h3>Users</h3>
            <UserChart />
          </Row>
          <Row
            className={`border border-secondary rounded m-${mValue} p-${pValue}`}
          >
            <h3>Orders</h3>
            <OrderChart />
          </Row>
        </Col>
        <Col>
          <Row
            className={`border border-secondary rounded m-${mValue} p-${pValue}`}
          >
            <h3>Categories</h3>
            <CategoryChart />
          </Row>
          <Row
            className={`border border-secondary rounded m-${mValue} p-${pValue}`}
          >
            <h3>All Stats</h3>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button divider>
                <ListItemAvatar>
                  <Avatar>
                    <ProductionQuantityLimitsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total Products" secondary={6} />
              </ListItem>
              <ListItem button divider>
                <ListItemAvatar>
                  <Avatar>
                    <PeopleAltIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total Users" secondary={6} />
              </ListItem>
              <ListItem button divider>
                <ListItemAvatar>
                  <Avatar>
                    <BorderColorIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total Orders" secondary={6} />
              </ListItem>
              <ListItem button divider>
                <ListItemAvatar>
                  <Avatar>
                    <CategoryIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total Categories" secondary={6} />
              </ListItem>
            </List>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
