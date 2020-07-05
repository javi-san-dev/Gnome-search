import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGnomes } from "./store/actions/Gnomes";
import { Spinner } from "reactstrap";
import Search from "./components/Search";
import Gnome from "./components/Gnomo";
import "./App.css";

function App() {
  const AllGnomes = useSelector((store) => store.gnomes.gnomes);
  const isLoading = useSelector((store) => store.gnomes.isLoading);
  const dispatch = useDispatch();
  const [gnomes, setGnomes] = useState(50);
  const [value, setValue] = useState("");
  const gnomos = [];

  useEffect(() => {
    dispatch(getGnomes());
    window.addEventListener("scroll", scrollHandler);
  }, []);

  if (AllGnomes.Brastlewark) {
    let result = AllGnomes.Brastlewark.filter((elem) => elem.id < gnomes);
    if (value !== "") {
      result = AllGnomes.Brastlewark.filter((elem) =>
        elem.name.toLowerCase().includes(value)
      );
    }
    result.map((elem) => {
      gnomos.push(
        <Gnome
          key={elem.id}
          id={elem.id}
          name={elem.name}
          age={elem.age}
          friends={elem.friends}
          hairColor={elem.hair_color}
          professions={elem.professions}
          image={elem.thumbnail}
        />
      );
    });
  }

  const scrollHandler = () => {
    const scrollPosition = Math.round(window.innerHeight + window.scrollY);
    if (scrollPosition === document.body.offsetHeight)
      setGnomes((gnomes) => gnomes + 50);
  };

  return (
    <div className="App" data-test="appComponent">
      <Search value={value} setValue={(val) => setValue(val)} />
      {isLoading ? (
        <div className="app-spinner" data-test="spinnerComponent">
          <Spinner color="primary" />
        </div>
      ) : null}
      {gnomos}
    </div>
  );
}

export default App;
