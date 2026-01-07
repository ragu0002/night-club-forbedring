"use client";
import Table from "./Table";

const TableGrid = ({ selectedTable, setSelectedTable, takenTables }) => {
  const isTaken = (tableNumber) => takenTables.includes(String(tableNumber));

  return (
    <div className="col-(--content-col)">
      <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-10 mt-20 mb-20">
        <Table number="1" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("1")} />
        <Table number="2" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("2")} />
        <Table number="3" image="table2" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("3")} />
        <Table number="4" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("4")} />
        <Table number="5" image="table3" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("5")} />
        <Table number="6" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("6")} />
        <Table number="7" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("7")} />
        <Table number="8" image="table2" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("8")} />
        <Table number="9" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("9")} />
        <Table number="10" image="table3" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("10")} />
        <Table number="11" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("11")} />
        <Table number="12" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("12")} />
        <Table number="13" image="table2" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("13")} />
        <Table number="14" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("14")} />
        <Table number="15" image="table3" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={isTaken("15")} />
      </div>
    </div>
  );
};

export default TableGrid;
