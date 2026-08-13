function Results(props) {
  const { emoji, votes } = props.winner;

  return (
    <>
      <h2>Результати голосування:</h2>

      <div className="result">
        <h3>Переможець:</h3>

        <div className="winner-emoji">{emoji}</div>

        <p>
          Кількість голосів: <span>{votes}</span>
        </p>
      </div>
    </>
  );
}

export default Results;
