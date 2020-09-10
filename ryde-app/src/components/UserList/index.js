import React, { Component } from "react";

import { Layout, Card, Button } from "@shopify/polaris";

export default class userList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.content,
    };
  }

  render() {
    return (
      <Layout>
        <Layout.Section>
          {this.state.content.map((data) => (
            <Card>{data.name}</Card>
          ))}
        </Layout.Section>
      </Layout>
    );
  }
}
