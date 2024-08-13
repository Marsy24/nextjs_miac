import { cn } from "@/lib/utils"
import { NavigationMenuLink } from "@/shared"
import Link from "next/link"
import React from "react"
import { INavItem } from "./nav-item"

export interface INavSubItem extends Omit<INavItem, 'subItems'> {
    description?: string;
    aside?: boolean;
}

export const NavSubItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & INavSubItem
>(({ className, text, description, href, aside, children, ...props }, ref) => {
    return (
        <>
            {
                aside
                    ?
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                            <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                            >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                    {text}
                                </div>
                                {description && (
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        {description}
                                    </p>
                                )}
                            </Link>
                        </NavigationMenuLink>
                    </li>
                    :
                    <li>
                        <NavigationMenuLink asChild>
                            {href && (
                                <Link
                                    href={href}
                                    ref={ref}
                                    className={cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                        className
                                    )}
                                    {...props}
                                >
                                    <div className="text-sm font-medium leading-none">{text}</div>
                                    {description && (
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            {description}
                                        </p>
                                    )}
                                </Link>
                            )}
                        </NavigationMenuLink>
                    </li>
            }
        </>

    )
})
NavSubItem.displayName = "NavSubItem"