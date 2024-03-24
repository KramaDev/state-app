import { useState } from "react";

const CardNumber = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddNumber = () => {
    const newNumber = parseInt(inputValue);
    if (!isNaN(newNumber)) {
      setNumbers([...numbers, newNumber]);
      setInputValue("");
    }
  };

  const handleRemoveNumber = (index: number) => {
    const newNumbers = [...numbers];
    newNumbers.splice(index, 1);
    setNumbers(newNumbers);
  };

  return (
    <>
      <div className="card">
        <div>
          <h1>Numbers State Example:</h1>
          <ul>
            {numbers.map((num, index) => (
              <li key={index}>
                {num}
                <button
                  className="btn"
                  onClick={() => handleRemoveNumber(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter number"
          />
          <button className="btn" onClick={handleAddNumber}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default CardNumber;
