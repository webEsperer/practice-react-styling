import React, { useState } from "react";

import {
  DefaultTabsStyle,
  ChildTabsStyled,
  LinkTabsStyles,
} from "./Tabs.styled";

export const Tabs = ({ children, defaultActiveKey }) => {
  const [profile, setProfile] = useState(defaultActiveKey);

  function handleClick(eventKey) {
    setProfile(eventKey);
  }
  return (
    <>
      <DefaultTabsStyle>
        {children.map((child) => (
          <LinkTabsStyles
            key={child.props.title}
            active={child.props.eventKey === profile}
            disabled={child.props.disabled}
            onClick={() =>
              !child.props.disabled && handleClick(child.props.eventKey)
            }
          >
            {child.props.title}
          </LinkTabsStyles>
        ))}
      </DefaultTabsStyle>
      {children.map((child) => (
        <ChildTabsStyled
          key={child.props.title}
          active={child.props.eventKey === profile}
        >
          {child}
        </ChildTabsStyled>
      ))}
    </>
  );
};
