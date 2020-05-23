import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

import formatString from "../../utils/formatString";

//Generic dropdown component
function CriteriaDropDown(props) {
  return (
    <DropdownButton
      id={`dropdown-basic-button-${formatString(props.selectedCriteria)}`}
      title={props.selectedCriteria}
    >
      {props.dropDownMenu.map((menuitem) => (
        <Dropdown.Item
          key={menuitem}
          id={`dropdownmenu`}
          onSelect={props.onClick}
          eventKey={menuitem}
        >
          {menuitem}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default CriteriaDropDown;
