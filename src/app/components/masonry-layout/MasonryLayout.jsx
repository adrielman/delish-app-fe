import React, { Component } from "react";
import styles from "./MasonryLayout.module.css";
import masonry from "masonry-layout";

class MasonryLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const elem = document.querySelector(".grid");
    const mason = new masonry(elem, {
      itemSelector: ".grid-item",
      columnWidth: 200
    });
  }

  render() {
    return (
      <div className={`${styles.masonry} grid`}>{this.props.children}</div>
    );
  }
}

export { MasonryLayout };
