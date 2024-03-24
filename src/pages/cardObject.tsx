import { useState } from "react";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

const CardObject = () => {
  const [person, setPerson] = useState<Person>({
    id: 1,
    firstName: "",
    lastName: "",
  });
  const [people, setPeople] = useState<Person[]>([]);

  const handleAddPerson = () => {
    if (person.firstName.trim() !== "" && person.lastName.trim() !== "") {
      setPeople([...people, person]);
      setPerson({ id: person.id + 1, firstName: "", lastName: "" });
    }
  };

  const handleRemovePerson = (id: number) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <div className="card">
        <div>
          <h1>People List:</h1>
          <ul>
            {people.map((person) => (
              <li key={person.id}>
                {`ID: ${person.id}, Name: ${person.firstName} ${person.lastName}`}
                <button
                  className="btn"
                  onClick={() => handleRemovePerson(person.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input
            value={person.firstName}
            onChange={(e) =>
              setPerson({ ...person, firstName: e.target.value })
            }
            type="text"
            placeholder="Enter first name"
          />
          <input
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
            type="text"
            placeholder="Enter last name"
          />
          <button className="btn" onClick={handleAddPerson}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default CardObject;
