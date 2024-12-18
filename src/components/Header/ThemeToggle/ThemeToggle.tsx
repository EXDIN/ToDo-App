import React, { useState, useEffect } from 'react';


function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => { return localStorage.getItem('theme') === 'dark'; });
    
    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);
    

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    return (
        <button onClick={toggleTheme} className="bg-gray-400 rounded-3xl p-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white" >
            {isDarkMode ? 'Світла тема' : 'Темна тема'} 
        </button>
    );
};
    
    
    
export default ThemeToggle