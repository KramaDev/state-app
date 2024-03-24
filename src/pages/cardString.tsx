import { useState } from "react";

const CardString = () => {
  const [strings, setStrings] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddString = () => {
    if (inputValue.trim() !== "") {
      setStrings([...strings, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveString = (index: number) => {
    const newStrings = [...strings];
    newStrings.splice(index, 1);
    setStrings(newStrings);
  };

  return (
    <>
      <div className="card">
        <div>
          <h1>State String Example:</h1>
          <ul>
            {strings.map((str, index) => (
              <li key={index}>
                {str}
                <button
                  className="btn"
                  onClick={() => handleRemoveString(index)}
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
            placeholder="Enter string in array"
          />
          <button className="btn" onClick={handleAddString}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default CardString;
