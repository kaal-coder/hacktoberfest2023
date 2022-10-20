import { useState, useRef } from "react";
import Input from "../components/Input";

export default function Home() {
  const inputRef = useRef();
  const [counter, setCounter] = useState({
    curValue: 0,
    prevValue: 0,
    nextValue: 0,
  });

  const changeValue = ({ newValue }) => {
    setCounter({ curValue: newValue !== 100 ? newValue : 99 });
  };

  const handleValueChange = (newValue, isField) => {
    newValue = parseInt(newValue, 10);

    if (!isField) {
      inputRef.current.style.transform =
        newValue > counter.curValue ? "translateY(-100%)" : "translateY(100%)";
      inputRef.current.style.opacity = 0;

      setTimeout(() => {
        inputRef.current.style.transitionDuration = "0s";
        inputRef.current.style.transform =
          newValue > counter.curValue
            ? "translateY(100%)"
            : "translateY(-100%)";
        inputRef.current.style.opacity = 0;
        changeValue({ curValue: counter.curValue, newValue });

        setTimeout(() => {
          inputRef.current.style.transitionDuration = "0.3s";
          inputRef.current.style.transform = "translateY(0)";
          inputRef.current.style.opacity = 1;
        }, 50);
      }, 50);
    } else {
      changeValue({ curValue: counter.curValue, newValue });
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    handleValueChange(e.target.value, true);
  };

  return (
    <div className="h-screen bg-blue-200 flex items-center justify-center">
      <div className="w-60 h-60 rounded-md flex items-center justify-center gap-6">
        <button
          className="rounded-md px-3 py-6"
          onClick={() => {
            handleValueChange(counter.curValue - 1, false);
          }}
          title="-1"
        >
          <i className="uil uil-minus"></i>
        </button>
        <div className="bg-blue-500 text-white  rounded-md">
          <Input
            onChange={onChange}
            inputRef={inputRef}
            value={counter.curValue}
          />
        </div>
        <button
          className="rounded-md px-3 py-6"
          onClick={() => {
            handleValueChange(counter.curValue + 1);
          }}
          title="+1"
        >
          <i className="uil uil-plus"></i>{" "}
        </button>
      </div>
    </div>
  );
}
