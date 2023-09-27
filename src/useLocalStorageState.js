import { useState,useEffect } from "react";

export function useLocaleStorageState(initialStage,key){
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        return storedValue? JSON.parse(storedValue):initialStage;
      });

      useEffect(
        function () {
          localStorage.setItem(key, JSON.stringify(value));
        },
        [value,setValue]
      );
      return [value,setValue]
}