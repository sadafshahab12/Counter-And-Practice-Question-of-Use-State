import "./App.css";
import ArrayState from "./component/ArrayState";
import CheckBoxToggle from "./component/CheckBoxToggle";
import Counter from "./component/Counter";
import FormInput from "./component/FormInput";
import Mode from "./component/Mode";

function App() {
  return (
    <>
      <div className="m-5">
        <h1 className="text-2xl font-bold text-center pb-5 pt-0">Use State Counter & Practice Question</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <Counter />
          <Mode />
          <CheckBoxToggle />
          <FormInput />
          <ArrayState />
        </div>
      </div>
    </>
  );
}

export default App;
