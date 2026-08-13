function Emoji(props) {
  const { emoji, votes, onClick } = props;
  return (
    <div className="emoji-card" onClick={onClick}>
      <div className="emoji">{emoji}</div>
      <div className="votes">{votes}</div>
    </div>
  );
}

export default Emoji;
