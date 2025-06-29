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
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { headerMenuItems } from "@/lib/data";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-96 p-4 [&>button>svg]:w-12 [&>button>svg]:h-12"
      >
        <SheetTitle>Menu</SheetTitle>

        <nav className="mt-4 space-y-2">
          <Accordion type="multiple">
            {headerMenuItems.map((item) =>
              item.subMenu ? (
                <AccordionItem key={item.menu} value={item.menu}>
                  <AccordionTrigger className="capitalize text-lg font-semibold">
                    {item.menu}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ml-2 space-y-1">
                      {item.subMenu.map((sub) => (
                        <button
                          key={sub}
                          onClick={handleLinkClick}
                          className="block w-full text-left text-base capitalize"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <button
                  key={item.menu}
                  onClick={handleLinkClick}
                  className="capitalize text-lg font-semibold block w-full text-left"
                >
                  {item.menu}
                </button>
              )
            )}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
