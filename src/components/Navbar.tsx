"use client";

import React from 'react'
import { useState } from "react";
import { Menu,HoveredLink, MenuItem } from "./ui/navbarMenu";
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
                            <MenuItem setActive={setActive} active={active} item="What We Do">
                                <div className="flex flex-col space-y-4 text-sm">  
                                    <HoveredLink href="/website-development">Web Development</HoveredLink>
                                    <HoveredLink href="/graphic-design">Graphic Design</HoveredLink>
                                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                    <HoveredLink href="/branding-services">Branding Services</HoveredLink>
                                    <HoveredLink href="/presentation-design">Presentation Design</HoveredLink>
                                    <HoveredLink href="/video-production">Video Production</HoveredLink>
                                    <HoveredLink href="/motion-design">Motion Design</HoveredLink>
                                    <HoveredLink href="/ad-creative">Ad Creative</HoveredLink>
                                </div>
                            </MenuItem>
                        
                        <Link href="/about" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Who We Are" />
                        </Link>
                        <Link href="/contact-us" className="cursor-none">
                            <MenuItem setActive={setActive} active={active} item="Contact Us" />
                        </Link>
                    </Menu>
    </div>
  )
}

