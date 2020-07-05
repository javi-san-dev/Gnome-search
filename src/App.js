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

  useEffect(() => {
    window.addEventListener("scroll", (e) => scrollHandler(e));
  }, []);

  useEffect(() => {
    dispatch(getGnomes());
  }, []);
  const gno = [];

  if (AllGnomes.Brastlewark) {
    let result = AllGnomes.Brastlewark.filter((elem) => elem.id < gnomes);
    if (value !== "") {
      result = AllGnomes.Brastlewark.filter((elem) =>
        elem.name.toLowerCase().includes(value)
      );
    }
    result.map((elem) => {
      gno.push(
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

  const scrollHandler = (e) => {
    const scrollPosition = Math.round(window.innerHeight + window.scrollY);
    if (scrollPosition === document.body.offsetHeight)
      setGnomes((gnomes) => gnomes + 50);
  };

  return (
    <div className="App">
      <Search value={value} setValue={(val) => setValue(val)} />
      {isLoading ? (
        <div className="app-spinner">
          <Spinner color="primary" />
        </div>
      ) : null}
      {gno}
    </div>
  );
}

export default App;
