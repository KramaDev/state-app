import { useState } from "react";

const CardBooleanArray = () => {
  const [booleanValue, setBooleanValue] = useState<boolean>(false);
  const [booleanArray, setBooleanArray] = useState<boolean[]>([]);

  const handleToggle = () => {
    setBooleanValue((prevValue) => !prevValue);
  };

  const handleAddBoolean = () => {
    setBooleanArray([...booleanArray, booleanValue]);
  };

  const handleRemoveBoolean = (index: number) => {
    const newBooleanArray = [...booleanArray];
    newBooleanArray.splice(index, 1);
    setBooleanArray(newBooleanArray);
  };

  return (
    <>
      <div className="card">
        <div>
          <h1>Boolean State Example:</h1>
          <p>{booleanValue ? "TRUE" : "FALSE"}</p>
        </div>
        <div>
          <button className="btn" onClick={handleToggle}>
            Change State
          </button>
          <button className="btn" onClick={handleAddBoolean}>
            Add
          </button>
        </div>
        <div>
          <h2>Boolean Array:</h2>
          <ul>
            {booleanArray.map((bool, index) => (
              <li key={index}>
                {bool ? "TRUE" : "FALSE"}{" "}
                <button
                  className="btn"
                  onClick={() => handleRemoveBoolean(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardBooleanArray;
