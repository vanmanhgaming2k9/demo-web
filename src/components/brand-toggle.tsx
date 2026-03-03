"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BrandToggle() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {resolvedTheme === "dark" ? (
                <img src="/vanistudio.png" alt="Vani Studio" className="h-10" />
            ) : (
                <img src="/vanistudio-2.png" alt="Vani Studio" className="h-10" />
            )}
        </>
    );
}
