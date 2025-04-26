import "./App.css";
import useNotification from "./hooks/useNotification";

function App() {
  const { triggerNotification, NotificationComponent } =
    useNotification("bottom-right");
  return (
    <>
      <center>Toast Component</center>
      <center className="buttonContainer">
        <button
          className="button"
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "Hey!! its a success",
              duration: 4000,
              animation: 'slide'
            })
          }
        >
          Success
        </button>
        {NotificationComponent}

        <button
          className="button"
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "Hey!! its a error",
              duration: 4000,
              position: "top-right",
              animation: 'pop',
            })
          }
        >
          Error
        </button>
        {NotificationComponent}

        <button
          className="button"
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "Hey!! its a info",
              duration: 4000,
              position: "top-left",
              animation: 'fade'
            })
          }
        >
          Info
        </button>
        {NotificationComponent}

        <button
          className="button"
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "Hey!! its a warning",
              duration: 4000,
              position: "bottom-left",
            })
          }
        >
          Warning
        </button>
        {NotificationComponent}
      </center>
    </>
  );
}

export default App;
