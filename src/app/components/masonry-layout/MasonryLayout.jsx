import React, { Component } from "react";
import styles from "./MasonryLayout.module.scss";
import masonry from "masonry-layout";
import "./MasonryStandardStyle.css";
import imagesLoaded from "imagesloaded";

const UpdateMasonry = () => {
  const elem = document.querySelector(".grid");
  const mason = new masonry(elem, {
    itemSelector: ".grid-item",
    columnWidth: 300
  });
  imagesLoaded(mason, () => {
    UpdateMasonry();
  });
};

class MasonryLayout extends Component {
  componentDidUpdate() {
    UpdateMasonry();
  }

  componentDidMount() {
    UpdateMasonry();
  }

  render() {
    return (
      <div className={`${styles.masonry} grid`}>{this.props.children}</div>
    );
  }
}

export { MasonryLayout };
