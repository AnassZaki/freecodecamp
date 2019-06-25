import React from "react";

class SidePanel extends React.Component {
  render() {
    const style = this.props.power
      ? { background: "#0ad82c" }
      : { background: "black", boxShadow: "none" };

    return (
      <div className="side-panel">
        <div style={this.props.colorStyle} className="display" id="display">
          {this.props.currentSound}
        </div>
        <div>
          <p>Power</p>
          <button style={style} onClick={this.props.togglePower} />
        </div>
        <div>
          <p>Volume</p>
          <input
            value={this.props.volumeInput}
            type="range"
            min="0"
            max="100"
            onChange={this.props.changeVolume}
          />
        </div>
      </div>
    );
  }
}

export default SidePanel;
