import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGnomes } from "./store/actions/Gnomes";
import { Spinner } from "reactstrap";
import Gnome from "./components/Gnomo";
import "./App.css";

function App() {
  const AllGnomes = useSelector((store) => store.gnomes.gnomes);
  const isLoading = useSelector((store) => store.gnomes.isLoading);
  const dispatch = useDispatch();
  const [gnomes, setGnpmes] = useState();

  useEffect(() => {
    dispatch(getGnomes());
  }, []);
  console.log("nomos", AllGnomes.Brastlewark);
  const gno = [];

  if (AllGnomes.Brastlewark) {
    console.log(isLoading);
    const result = AllGnomes.Brastlewark.filter((elem) => elem.id < 50);
    console.log(result);
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
    /*for (const key in AllGnomes.Brastlewark) {
      gno.push(
        <Gnome
          key={AllGnomes.Brastlewark[key].id}
          id={AllGnomes.Brastlewark[key].id}
          name={AllGnomes.Brastlewark[key].name}
          age={AllGnomes.Brastlewark[key].age}
          friends={AllGnomes.Brastlewark[key].friends}
          hairColor={AllGnomes.Brastlewark[key].hair_color}
          profession={AllGnomes.Brastlewark[key].profession}
          image={AllGnomes.Brastlewark[key].thumbnail}
        />
      );
    }*/
  }

  return (
    <div className="App">
      {isLoading ? <Spinner color="primary" /> : null}
      {gno}
    </div>
  );
}

export default App;
