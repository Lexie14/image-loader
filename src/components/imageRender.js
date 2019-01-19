import React, { Component } from "react";

class ImageRender extends Component {
  render() {
    return (
      <div className="imageLoader">
        <div className="input">
          <input
            type="file"
            id="files"
            name="files[]"
            onChange={this.props.handleImageLoad}
            accept="image/*"
          />
        </div>

        <output className="output">
          <ul id="list" />
        </output>
      </div>
    );
  }
}

export default ImageRender;
