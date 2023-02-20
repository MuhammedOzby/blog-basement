import React, { Component } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { getContent } from "../lib/getDataFromGit";

export default class WelcomePages extends Component<{}, { icerik: string }> {
  constructor(props: { params: { dosyaYolu: string } }) {
    super(props);
    this.state = { icerik: "" };
  }
  async componentDidMount(): Promise<void> {
    this.setState({
      ...this.state,
      icerik: await getContent("Karşılama Yazısı"),
    });
  }
  render() {
    return <ReactMarkdown children={this.state.icerik} />;
  }
}
