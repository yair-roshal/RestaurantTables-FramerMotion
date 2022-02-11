import { useState, useRef, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Table } from "components";
import floor from "../data/floor.json";
import "animate.css";

export function Tables() {
  // const [checked, setChecked] = useState(false);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ display: "flex", flexWrap: "wrap", width: "500", height: "500" }}
      >
        {floor.map((value, key) => {
          return <Table key={key} table={value.table} diners={value.diners} />;
        })}
      </Box>
    </Container>
  );
}

{
  /* <Grow
in={checked}
style={{ transformOrigin: "0 0 0" }}
{...(checked ? { timeout: 1000 } : {})}
>
{icon}
</Grow> */
}
