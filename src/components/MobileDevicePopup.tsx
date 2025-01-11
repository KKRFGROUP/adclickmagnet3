"use client"

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog';

const MobileDevicePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to check if localStorage is available
  const isLocalStorageAvailable = () => {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return false;
    }
  };

  // Helper function to get cookie
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  };

  // Helper function to set cookie with 365 days expiry
  const setCookie = (name: string, value: string) => {
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // 365 days
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  };

  // Helper function to check if user has seen popup
  const hasUserSeenPopup = (): boolean => {
    if (isLocalStorageAvailable()) {
      return localStorage.getItem('hasSeenMobilePopup') === 'true';
    }
    return getCookie('hasSeenMobilePopup') === 'true';
  };

  // Helper function to mark popup as seen
  const markPopupAsSeen = () => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem('hasSeenMobilePopup', 'true');
    } else {
      setCookie('hasSeenMobilePopup', 'true');
    }
  };

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth < 768;
    
    const shouldShowPopup = () => {
      return !hasUserSeenPopup() && checkIsMobile();
    };

    if (shouldShowPopup()) {
      setIsOpen(true);
      markPopupAsSeen();
    }

    const handleResize = () => {
      if (shouldShowPopup()) {
        setIsOpen(true);
        markPopupAsSeen();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isOpen) return null;

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-white rounded-2xl shadow-xl max-w-[80%] mx-2" style={{fontFamily: "Syne"}}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-gray-900 mb-2">
            Desktop Recommended
          </AlertDialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
          <AlertDialogDescription className="text-gray-600">
            For the best experience, we recommend viewing this site on a desktop device.
            While you can continue on mobile, some features may be limited.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors"
          >
            Continue Anyway
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MobileDevicePopup;