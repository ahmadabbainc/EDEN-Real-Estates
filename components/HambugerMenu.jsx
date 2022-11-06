import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout, FcSearch } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Image from "next/image";

import Logo from "../assets/images/logo.png";

const HambugerMenu = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box>
      <Link href="/" paddingLeft="2">
        <Image 
        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" 
        src={Logo} alt="logo"
        width={160} />
      </Link>
    </Box>
    <Spacer />

    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<FcSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FiKey />}>Buy Home</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FcAbout />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default HambugerMenu;
