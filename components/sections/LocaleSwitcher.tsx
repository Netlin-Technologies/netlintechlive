"use client";

import { useState, useEffect } from 'react';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Get current locale from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('locale') || 'en';
    setCurrentLocale(savedLocale);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    setCurrentLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    // Trigger a page reload or update your app's locale state
    window.location.reload();
  };

  return (
    <LocaleSwitcherSelect 
      defaultValue={currentLocale} 
      label="Language Selector"
      onLocaleChange={handleLocaleChange}
    >
      <option value="en" className='bg-[#181622] border-none mt-2.5'>
        English
      </option>
      <option value="de" className='bg-[#181622] border-none mt-2.5'>
        Deutsch
      </option>
    </LocaleSwitcherSelect>
  );
}
