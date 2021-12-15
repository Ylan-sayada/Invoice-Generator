import React, { useEffect } from 'react';

/**
 * @param elementHook The hook state of the element we want to close
 * @param ref The references of the element to check if clicked outside
 */
export default function useCloseOnClickOut(elementHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>], arrayOfRef: React.RefObject<HTMLElement>[]) {
  useEffect(() => {
    let [currentState, setState] = elementHook;
    const checkIfClickedOutside = (e: MouseEvent) => {
      let isClickedOut = 0;

      arrayOfRef.forEach(ref => {

        if (currentState && ref.current && !ref.current.contains(e.target as HTMLElement)) {
          isClickedOut++;
        }
      });

      if (isClickedOut === arrayOfRef.length) {
        setState(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [arrayOfRef, elementHook])

}
