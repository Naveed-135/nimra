"use client";
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
const SwitchMode = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <div className="flex items-center gap-2">
            <Switch
                isSelected={theme === 'dark'}
                onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                size="lg"
                color="primary"
                thumbIcon={({ isSelected }) => (
                    <div className="flex items-center justify-center h-full w-full">
                        {isSelected ? (
                            <LuSun className="h-6 w-6 text-yellow-500" />
                        ) : (
                            <IoMoonOutline className="h-6 w-6 text-indigo-500" />
                        )}
                    </div>
                )}
                classNames={{
                    base: [
                        "inline-flex flex-row-reverse items-center",
                        "justify-between cursor-pointer rounded-lg gap-2",
                        "data-[selected=true]:border-primary",
                    ],
                    wrapper: [
                        "p-0 h-12 w-12",
                        "group-data-[selected=true]:bg-indigo-100",
                        "group-data-[selected=false]:bg-gray-300",   
                    ],
                    thumb: [
                        "h-12 w-12",
                        "shadow-lg",
                        "group-data-[selected=true]:", 
                        "bg-transparent", 
                    ],
                }}
            />
        </div>
    );
};
export default SwitchMode;