import { useState } from "react";
import "./ListGroup.css";

interface ListGroupProps {
  selected: string;
  setUserAnswer: (value: string) => void;
  disabled: boolean;
  isSubmitted: boolean;
  items: string[];
  legend: string;
}

function ListGroup({
  selected,
  setUserAnswer,
  disabled,
  items,
  legend,
  isSubmitted,
}: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState("");
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setUserAnswer(item);
  };

  return (
    <>
      <fieldset className="list">
        <legend className="mb-2">{legend}</legend>
        <ul
          className="list-group mb-3 p-3 border border-light-subtle"
          aria-label="location options"
        >
          {items.map((item) => (
            <li className="list-group">
              <label
                key={item}
                onClick={() => {
                  if (!disabled && !isSubmitted) {
                    handleSelect(item);
                  }
                }}
                className={`${
                  selectedItem === item
                    ? "list-group-item shadow p-3 mb-2 bg-body-tertiary rounded active"
                    : "list-group-item shadow p-3 mb-2 bg-body-tertiary rounded"
                }
                ${isSubmitted ? "disabled" : ""}`}
              >
                <input
                  type="radio"
                  name="item"
                  value={item}
                  checked={selectedItem === item}
                  onChange={() => handleSelect(item)}
                ></input>
                {item}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </>
  );
}

export default ListGroup;
