import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import Link from "next/link";
import {} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout, FcSearch } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Image from "next/image";

import Logo from "../assets/images/logo.png";

const NavMenu = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box >
      <Link href="/" paddingLeft="2" passHref>
        <Image src={Logo}
        alt="logo" 
        width={160} 
        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
      </Link>
    </Box>
    <Box
      fontSize="sm"
      color="gray.700"
      fontWeight="bold"
      display="flex"
      alignItems="center"
      marginLeft="100"
    >
      <Breadcrumb separator="">
        <BreadcrumbItem>
        <BreadcrumbLink padding="1.5">
        <FcHome />
        </BreadcrumbLink>
          <Link href="/" passHref>
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
        <BreadcrumbLink padding="1.5">
        <FcSearch />
        </BreadcrumbLink>
          <Link href="/search" passHref>
            Search
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
        <BreadcrumbLink padding="1.5">
        <FiKey />
        </BreadcrumbLink>
          <Link href="/search?purpose=for-sale" passHref>
            Buy Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
        <BreadcrumbLink padding="1.5">
        <FcAbout />
        </BreadcrumbLink>
          <Link href="/search?purpose=for-rent" passHref>
            Rent Property
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  </Flex>
);

export default NavMenu;
