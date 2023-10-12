'use client';
import { useState, useEffect } from 'react';

export default function Layout({ dashboard, login }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const isLoggedIn = 'ada';
  return isClient && isLoggedIn === 'ada' ? login : dashboard;
}
