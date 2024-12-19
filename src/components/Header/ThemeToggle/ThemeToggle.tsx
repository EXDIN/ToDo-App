import { useState, useEffect } from 'react';
import themeEnum from '../../../constants/enums/themeEnum';


function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === themeEnum.dark;
  });

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add(themeEnum.dark);
      localStorage.setItem('theme', themeEnum.dark);
    } else {
      body.classList.remove(themeEnum.dark);
      localStorage.setItem('theme', themeEnum.light);
    }
  }, [isDarkMode]);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme}
      className="bg-gray-400 rounded-3xl p-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white
      hover:shadow-lg hover:shadow-gray-500 hover:shadow-center 
      dark:hover:shadow-white duration-200">
        {isDarkMode ? 'Світла тема' : 'Темна тема'}
    </button>
  );
};


export default ThemeToggle