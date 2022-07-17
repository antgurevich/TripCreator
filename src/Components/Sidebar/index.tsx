import React from 'react'
import { SidebarButtons, SidebarButtonType } from '../types'
import SidebarButton from './SidebarButton';
import "./styles.scss"

function makeButtons(
): SidebarButtons[] {
    return [
      {
        type: SidebarButtonType.HOME,
        name: "Home",
        url: "",
      },
      {
        type: SidebarButtonType.ABOUT,
        name: "About",
        url: "",
      },
    ];
};

const baseClass = 'sidebar';

export const Sidebar = () => {
    return (
      <div className={baseClass}>
        <div className={`${baseClass}-header`}>
          <h1>TripCreator</h1>
        </div>
        <div className={`${baseClass}-button-section`}>
          {makeButtons().map((button) => (
            <SidebarButton
              key={button.name}
              name={button.name}
              path={button.url}
            />
          ))}
        </div>
      </div>
    );
}

export default Sidebar;