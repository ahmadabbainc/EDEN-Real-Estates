import { Show, Hide, Box } from "@chakra-ui/react";
import HambugerMenu from "./HambugerMenu";

import NavMenu from "./NavMenu";

const Navbar = () => (
  <>
    <Show above="sm">
      <Box>
        <NavMenu />
      </Box>
    </Show>
    <Show breakpoint='(max-width: 768px)'>
      <Box>
        <HambugerMenu />
      </Box>
    </Show>
  </>
);

export default Navbar;
