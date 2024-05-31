"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BootstrapInput = styled(InputBase)(({ theme, selectedOption,fullWidth }) => ({
  // {console.log(age)}
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    // borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid black",
    fontSize: 16,
    width: "100%",
    padding: "5px 36px 5px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      outline: "none",
      border: "1px solid black",
      boxShadow: "none",
    },
  },
  "& .MuiSelect-icon": {
    color: selectedOption ? "#C72030" : "",
    fontSize: "20px",
    marginRight: "10px",
  },
}));

export default function CustomizedSelects({ list, labelName,handleSelectChange }) {
  const [selectedOption, setSelectedOption] = React.useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleSelectChange(event.target.value);
  };

  return (
    <div className="w-full h-[50px] ">
      <FormControl sx={{  width:"100%" }} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={selectedOption}
          onChange={handleChange}
          input={<BootstrapInput fullWidth selectedOption={selectedOption} />}
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
            getContentAnchorEl: null,
          }}
        >
          {list.map((item, i) => (
            <MenuItem
              value={item}
              key={i}
              className={selectedOption === item ? "text-primary !bg-white" : "hover:bg-red-300"}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
