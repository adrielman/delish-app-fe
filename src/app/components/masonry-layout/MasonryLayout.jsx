import React, { Component } from "react";
import styles from "./MasonryLayout.module.scss";

export class MasonryLayout extends Component {
  render() {
    return <div className={styles.masonry}>{this.props.children}</div>;
  }
}
