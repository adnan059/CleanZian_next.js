"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Menu, X } from "lucide-react";
import { headerMenuItems } from "@/lib/data";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="sidebarMenuButton">
          <Menu size={34} className="sidebarMenuIcon" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="sidebarContent">
        <SheetTitle className={"sidebarTitle"}>
          <Link href={"/"}>
            Clean<span>Zian</span>
          </Link>
        </SheetTitle>

        <nav className="sidebarNav">
          <Accordion type="multiple" className="sidebarMenuContainer">
            {headerMenuItems.map((item) =>
              item.subMenu ? (
                <AccordionItem
                  className="sidebarMenu withSubmenus"
                  key={item.menu}
                  value={item.menu}
                >
                  <AccordionTrigger className={"sidebarMenuText"}>
                    {item.menu}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sidebarSubMenuContainer">
                      {item.subMenu.map((sub) => (
                        <Link
                          href={`/${sub.replace(/\s+/g, "-").toLowerCase()}`}
                          className="sidebarSubMenu"
                          key={sub}
                          onClick={handleLinkClick}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.menu} className="sidebarMenu">
                  <button className="sidebarMenuText" onClick={handleLinkClick}>
                    <Link
                      href={`/${item.menu.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {item.menu}
                    </Link>
                  </button>
                </div>
              )
            )}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
