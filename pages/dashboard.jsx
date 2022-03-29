import { Box } from "@mui/material";
import CustomTable from "../components/CustomTable";
import PageHeader from "../components/PageHeader";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const dataRow = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

const headColumns = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
    align: "left",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
    align: "left",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
    align: "left",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
    align: "left",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
    align: "left",
  },
  // Add actions cell for button
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
    align: "center",
  },
];

const DashboardPage = (props) => {
  // states
  // methods
  // useEffects
  return (
    <Box>
      <PageHeader title="Dashboard Page" />
      {/* <CustomTable data={[]} headColumns={[]}/> */}
      <CustomTable data={dataRow} headColumns={headColumns} />
    </Box>
  );
};

export default DashboardPage;
