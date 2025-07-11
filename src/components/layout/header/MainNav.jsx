"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { headerMenuItems } from "@/lib/data.js";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const MainNav = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <nav className="mainNav">
      {headerMenuItems?.map((item, idx) =>
        item.subMenu ? (
          <Popover key={item.menu} open={openIndex === idx}>
            <div
              className="relative"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <PopoverTrigger asChild className="headerPopTrigger">
                <button className="mainNavMenu withSubmenus">
                  <span>{item.menu}</span>

                  <ChevronDown className="mainNavMenuIcon" />
                </button>
              </PopoverTrigger>

              <PopoverContent
                side="bottom"
                align="start"
                sideOffset={0}
                className="mainNavSubMenuContainer"
              >
                {item.subMenu.map((subItem) => (
                  <Link
                    key={subItem}
                    href={`/${subItem.replace(/\s+/g, "-").toLowerCase()}`}
                    className="mainNavSubMenu"
                  >
                    {subItem}
                  </Link>
                ))}
              </PopoverContent>
            </div>
          </Popover>
        ) : (
          <Link
            key={item.menu}
            href={`/${item.menu.replace(/\s+/g, "-").toLowerCase()}`}
            className="mainNavMenu"
          >
            {item.menu}
          </Link>
        )
      )}
    </nav>
  );
};

export default MainNav;
