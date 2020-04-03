import React, { useState, useEffect } from "react";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import ChartNavigator from "../components/ChartNavigator";
import FieldNavigator from '../components/FieldNavigator'
import { useSelector } from "react-redux";

export default function Dashboard() {
  const users = useSelector(state => state.users)
  const isLoading = useSelector(state => state.isLoading)
  const listFields = ["company", "gender", "eyeColor", "age"];
  const [fields, setFields] = useState([]);
  const [selectedField, setSelectedField] = useState("company");
  const [chart, setChart] = useState(0);

  const capitalize = word => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const countField = () => {
    let ageGroups = [
      ["< 20 thn", 0],
      ["20-25 thn", 0],
      ["> 25 thn", 0]
    ];
    const fieldsInObject = fields.reduce((countItem, item) => {
      countItem[item] = ++countItem[item] || 1;
      return countItem;
    }, {});
    if (selectedField !== "age") {
      return Object.entries(fieldsInObject).map(e => [e[0], e[1]]);
    }
    for (const age in fieldsInObject) {
      if (age < 20) ageGroups[0][1] += fieldsInObject[age];
      else if (age <= 25) ageGroups[1][1] += fieldsInObject[age];
      else ageGroups[2][1] += fieldsInObject[age];
    }
    return ageGroups;
  };

  useEffect(() => {
    const result = users.map(employee => employee[selectedField]);
    result.sort();
    setFields(result);
  }, [users, selectedField]);

  return (
    <div className='App'>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div>
          <FieldNavigator setSelectedField={setSelectedField} listFields={listFields} />
          <br/>
          {chart === 0 ? (
            <PieChart selectedField={capitalize(selectedField)} data={countField()} />
          ) : (
            <BarChart selectedField={capitalize(selectedField)} data={countField()} />
          )}
          <br/>
          <ChartNavigator setChart={setChart} />
        </div>
      )}
    </div>
  );
}
