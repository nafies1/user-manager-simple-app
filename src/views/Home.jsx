/** @format */

import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import Table from "../components/TableEmployee";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  useEffect(() => {
    setIsLoading(true);
    db.collection("employees")
      .get()
      .then(querySnapshot => {
        const datas = [];
        querySnapshot.forEach(doc => {
          // console.log(`Ini ${doc.id} => ${JSON.stringify(doc.data())}`);
          datas.push(doc.data());
        });
        setEmployees(datas);
        // console.log(datas);
      })
      .catch(err => {
        console.log("SOMETHING IS WRONG!!!");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='App'>
      <h1>Data Employees</h1>
      {isLoading ? <h2>Loading....</h2> : <Table employees={employees} />}
    </div>
  );
}
