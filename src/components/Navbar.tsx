"use client";

import React from 'react'
import { useState } from "react";
import { Menu, MenuItem } from "./ui/navbarMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Navbar({className}: {className?: string}) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(" fixed top-7 inset-x-0 mx-auto z-50", className)}>
                    <Menu setActive={setActive}>
                        <Link href="/" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Home" />
                        </Link>
                        <Link href="/services" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Services" />
                        </Link>
                        <Link href="/portfolio" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Portfolio" />
                        </Link>
                        <Link href="/contact-us" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Contact Us" />
                        </Link>
                    </Menu>
    </div>
  )
}

