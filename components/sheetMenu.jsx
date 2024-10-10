"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CiMenuFries } from "react-icons/ci";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetMenu() {
    const [open, setOpen] = useState(false)

    const handleLinkClick = (id) => {
        setOpen(false)
        setTimeout(() => {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }, 100)
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button>
                    <CiMenuFries className="text-xl" />
                </button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                    <button
                        onClick={() => handleLinkClick("home")}
                        className="text-left text-lg hover:text-primary transition-colors pb-2 border-b border-gray-200"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleLinkClick("projects")}
                        className="text-left text-lg hover:text-primary transition-colors pb-2 border-b border-gray-200"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleLinkClick("mywork")}
                        className="text-left text-lg hover:text-primary transition-colors pb-2 border-b border-gray-200"
                    >
                        My work
                    </button>
                    <button
                        onClick={() => handleLinkClick("blog")}
                        className="text-left text-lg hover:text-primary transition-colors pb-2 border-b border-gray-200"
                    >
                        Blog
                    </button>
                    <button
                        onClick={() => handleLinkClick("awards")}
                        className="text-left text-lg hover:text-primary transition-colors pb-2 border-b border-gray-200"
                    >
                        Awards
                    </button>
                    <button
                        onClick={() => handleLinkClick("contact")}
                        className="text-left text-lg hover:text-primary transition-colors pb-2 border-b border-gray-200"
                    >
                        Contact
                    </button>
                </nav>
            </SheetContent>
        </Sheet>
    )
}