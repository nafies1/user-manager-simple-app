import React from "react";
import Table from "../components/TableEmployee";
import MapsFullDialog from '../components/MapsFullDialog'
import { useSelector } from "react-redux";

export default function Home() {
  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className='App'>
      <h1>Users Data</h1>
      {isLoading ? <h1 className="loading">Loading...</h1> : <Table />}
      <MapsFullDialog />
    </div>
  );
}
