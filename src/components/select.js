"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Wrapping the component with React.forwardRef
const CustomizedSelects = React.forwardRef(({ list, labelName, handleSelectChange, date }, ref) => {
  const BootstrapInput = styled(InputBase)(({ theme, selected, fullWidth }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      position: "relative",
      border: "1px solid black",
      fontSize: 16,
      width: "100%",
      padding: "6.5px 36px 6.5px 12px",
      color: date ? "#A5A5A5" : "black",
      fontWeight: date ? "400 !important" : "500",
      fontFamily: date ? "'__Work_Sans_1fc36d', '__Work_Sans_Fallback_1fc36d'" : "",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        outline: "none",
        border: "1px solid black",
        boxShadow: "none",
      },
      "& .MuiMenuItem" : {
        color: date ? "#A5A5A5" : "black",
      },
    },
    
    "& .MuiSelect-icon": {
      color: selected ? "#C72030" : "",
      fontSize: "20px",
      marginRight: "10px",
    },
  }));

  const [selected, setSelectedOption] = React.useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleSelectChange(event.target.value);
  };

  return (
    <div className="w-full h-[50px]">
      <FormControl sx={{ width: "100%" }} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={selected}
          onChange={handleChange}
          input={<BootstrapInput fullWidth selected={selected} />}
          displayEmpty
          fullWidth
          IconComponent={KeyboardArrowDownIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p className="">{labelName}</p>;
            }
            return selected;
          }}
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          }}
          ref={ref} // Forwarding ref to Select component
        >
          {list.map((item, i) => (
            <MenuItem
              value={item}
              key={i}
              className={selected === item ? "text-primary !bg-white" :  "hover:bg-red-300"}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

// Naming the display name of the forwardRef component (for better debugging)
CustomizedSelects.displayName = 'CustomizedSelects';

export default CustomizedSelects;
