import { SidebarButtons, SidebarButtonType } from '../Utils/types'
import SidebarButton from './SidebarButton';
import "./styles.scss"

function makeButtons(
): SidebarButtons[] {
    return [
      {
        type: SidebarButtonType.HOME,
        name: 'Home',
        url: '/',
      },
      {
        type: SidebarButtonType.CREATE,
        name: 'Create',
        url: '/createtrip',
      },
      {
        type: SidebarButtonType.PROFILE,
        name: 'Profile',
        url: '/profile',
      },
      {
        type: SidebarButtonType.ABOUT,
        name: 'About',
        url: '/about',
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
              button={button}
              name={button.name}
              path={button.url}
              type={button.type}
              isActive={true}
            />
          ))}
        </div>
      </div>
    );
}

export default Sidebar;