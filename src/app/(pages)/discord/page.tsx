'use client'
import { useEffect } from "react";

const DISCORD_INVITE_URL = "https://discord.gg/4Ubd9tX5FR"; 

export default function DiscordRedirectPage() {
    useEffect(() => {
        window.location.href = DISCORD_INVITE_URL;
    }, []);

    return null;
}
