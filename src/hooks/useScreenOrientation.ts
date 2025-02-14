import { useEffect, useState } from "react";

const useScreenOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // Initial check
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // Check orientation immediately
    checkOrientation();

    // Add event listener for resize
    window.addEventListener("resize", checkOrientation);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  return isPortrait;
};

export default useScreenOrientation;
