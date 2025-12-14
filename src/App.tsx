import { useState } from "react";
import ListGroup from "./components/listGroup/ListGroup";
import Button from "./components/button/Button";
import Alert from "./components/alert/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const locations = ["North Pole", "Caribbean", "Sahara Desert"];
  const [userAnswer, setUserAnswer] = useState("");
  const [alertType, setAlertType] = useState<"success" | "danger" | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    const correct = "North Pole";

    if (userAnswer === correct) {
      setAlertType("success");
      setAlertMessage("Well done - You really know where Santa is!");
    } else {
      setAlertType("danger");
      setAlertMessage("Oops - Sorry, you won't find Santa there!");
    }
  };

  const submitDisabled = !userAnswer || isSubmitted;
  return (
    <div className="content">
      {alertVisible && <Alert type={alertType}> {alertMessage} </Alert>}
      <form
        className="wrapper shadow p-3 mb-2 bg-body-tertiary rounded"
        onSubmit={handleSubmit}
      >
        <ListGroup
          items={locations}
          legend="Where would you look for Santa Claus?"
          selected={userAnswer}
          setUserAnswer={setUserAnswer}
          disabled={disabled}
          isSubmitted={isSubmitted}
        />
        <Button
          disabled={submitDisabled}
          onClick={() => setAlertVisibility(true)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
