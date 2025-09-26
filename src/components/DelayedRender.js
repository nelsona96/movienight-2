import { useEffect, useState } from "react";

export default function DelayedRender({ delay, children }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return render ? children : null;
}
