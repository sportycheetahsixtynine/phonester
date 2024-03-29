import React from "react";
import styled from "styled-components";
import SideNav from "./sideNav";
import { Switch, Route } from "react-router-dom";
import Stock from "./stock";
import ProductForm from "./productForm";
import AdminHome from "./adminHome";

const Dashboard = styled.div`
  margin-top: 8vh;
  display: flex;
`;

const DashboardPage = styled.div`
  padding: 30px;
  background-color: #fff;
  width: 100%;

  h1 {
    font-size: 40px;
    font-weight: 300;
    color: #666;
    margin-bottom: 30px;
    display: inline-block;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const Admin = ({
  products,
  onLogoChange,
  logo,
  onLogoColorChange,
  logoColor
}) => {
  return (
    <Dashboard>
      <SideNav></SideNav>
      <DashboardPage>
        <Switch>
          <Route
            path="/admin/home"
            render={props => (
              <AdminHome
                {...props}
                onLogoChange={onLogoChange}
                onLogoColorChange={onLogoColorChange}
                logo={logo}
                logoColor={logoColor}
              ></AdminHome>
            )}
          ></Route>
          <Route
            path="/admin/stock"
            render={props => <Stock {...props} products={products}></Stock>}
          ></Route>
          <Route
            path="/admin/:id"
            render={props => <ProductForm {...props}></ProductForm>}
          ></Route>
        </Switch>
      </DashboardPage>
    </Dashboard>
  );
};

export default Admin;
