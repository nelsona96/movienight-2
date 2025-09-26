import { useEffect } from "react";
import SearchInput from "../components/ui/SearchInput";

export default function HomePage({ resetSearch, ...props }) {
  useEffect(() => {
    resetSearch();
  }, []);

  return (
    <>
      <section id="hero">
        <div className="container hero__content">
          <h1 className="hero__title">
            Find the <span className="accent--primary">perfect movie.</span>
          </h1>
          <SearchInput {...props} />
        </div>
      </section>
    </>
  );
}
