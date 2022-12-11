const PileIntro = ({ e, width, height }) => {
  return (
    <img
      alt="none"
      className="hand-card"
      key={e}
      src={require(`../../card_pics/${e}.png`)}
      width={`${width}px`}
      height={`${height}px`}

    ></img>
  );
};

export default PileIntro;
