import { ComponentRendererWrapper, PreactTable } from "@guiexpert/preact-table";
import {
  applyBodyRenderer,
  createColumnDefs,
  createTableOptions,
  createTableRows,
  SimplePersonIf
} from "@guiexpert/demo-table-models";
import { ColumnDefIf, TableApi, TableModelFactory } from "@guiexpert/table";
import GenderRendererComponent from "./GenderRendererComponent";

function App() {

  const tableOptions = createTableOptions();
  const rows: SimplePersonIf[] = createTableRows();
  const columnDefs: ColumnDefIf[] = createColumnDefs();
  applyBodyRenderer(columnDefs[2], new ComponentRendererWrapper(GenderRendererComponent));
  const tableModel = TableModelFactory.buildByTypedRowsParam({
    rows,
    columnDefs,
    tableOptions,
    fixedLeftColumnCount: 0
  });

  function tableReady(api: TableApi) {
    console.info("Table API:", api);
  }

  return (
    <PreactTable
      tableOptions={tableOptions}
      tableModel={tableModel}
      mouseClicked={console.info}
      tableReady={tableReady}
    />
  );
}

export default App;
