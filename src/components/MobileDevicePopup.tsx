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

  useEffect(() => {
    // Check if the device is mobile using window width
    const checkIsMobile = () => {
      return window.innerWidth < 768; // Standard mobile breakpoint
    };

    // Set initial state
    setIsOpen(checkIsMobile());

    // Add resize listener
    const handleResize = () => {
      setIsOpen(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Don't render anything if not mobile
  if (!isOpen) return null;

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-white p-6 rounded-2xl shadow-xl max-w-sm mx-4" style={{fontFamily: "Syne"}}>
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