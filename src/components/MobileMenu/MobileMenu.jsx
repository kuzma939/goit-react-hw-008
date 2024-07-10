import { useState } from 'react';
import { MenuBtn } from './MobileMenu.styled';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';

export const MobileMenu = () => {
  const [menuShown, setMenuShown] = useState(false);

  const toggleMenu = () => setMenuShown(!menuShown);

  return (
    <>
      <MenuBtn type="button" data-menu-open={menuShown} onClick={toggleMenu}>
        
      </MenuBtn>
      {menuShown && <MobileNavigation closeMenu={toggleMenu} />}
    </>
  );
};