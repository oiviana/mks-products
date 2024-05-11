import { useEffect, useState } from "react";

type DeviceType = "large" | "tablet" | "phone" | "tablet-large";

export default function useDimensions(): DeviceType | undefined {
    const [device, setDevice]= useState< DeviceType | undefined>();
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setDevice('large');
          }else if (window.innerWidth >= 768) {
            setDevice('tablet-large');
          }  
          else if (window.innerWidth >= 500) {
            setDevice('tablet');
          } else  {
            setDevice('phone');
          }
        };
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      return device;
}