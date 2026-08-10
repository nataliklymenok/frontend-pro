import { Component } from "react";

class Emoji extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { emoji, votes, onClick } = this.props;
    return (
      <div className="emoji-card" onClick={onClick}>
        <div className="emoji">{emoji}</div>
        <div className="votes">{votes}</div>
      </div>
    );
  }
}

export default Emoji;
