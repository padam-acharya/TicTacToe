export default function Square({ value, click }) {
  return (
    <>
      <button className="square" onClick={click}>
        {value}
      </button>
    </>
  );
}
