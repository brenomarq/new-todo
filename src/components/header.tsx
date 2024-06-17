import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";

export default function Header() {
  return (
    <Navbar className="shadow mt-3 mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold text-5xl flex gap-2">
          <Image alt="Brand Logo" src={Logo} width={50} height={50} />
          ToDO
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary">Create</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
