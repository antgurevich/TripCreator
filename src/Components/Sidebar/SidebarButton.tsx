import React from 'react';
import { NavLink } from "react-router-dom";
import { SidebarButtons, SidebarButtonType } from '../Utils/types';

export interface Props {
  readonly button: SidebarButtons; 
  readonly name: string;
  readonly path: string;
  readonly type: SidebarButtonType;
  readonly isActive: boolean;
}

const baseClass = 'sidebar-button'

export const SidebarButton: React.FC<Props> = (props) => {
  const isSelected = (child: SidebarButtons): boolean => {
    return child.type === props.type;
  } 
  return (
    <nav>
      <li className={`${baseClass}-li`} key={props.name}>
        <NavLink
          className={`${baseClass}-active-link
                      ${isSelected(props.button) ? "selected" : ""}
                    `}
          to={props.path}
        >
          {props.name}
        </NavLink>
      </li>
    </nav>
  );
};

export default SidebarButton