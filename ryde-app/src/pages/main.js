import React, { Component } from "react";
import { Card, AppProvider } from "@shopify/polaris";

export default class Main extends Component {
  render() {
    return (
      <AppProvider>
        <Card title="Testing!">
          <p>Work in progress...</p>
        </Card>
      </AppProvider>
    );
  }
}
