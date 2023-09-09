"use client"
import React from 'react';
import { useTheme } from "next-themes";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <IconButton
            onClick={() => currentTheme === "dark" ? setTheme('light') : setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 rounded-full p-2 absolute bottom-32 right-32'
        >
            {currentTheme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

export default Button;
