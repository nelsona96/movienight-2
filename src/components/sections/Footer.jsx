import useWindowWidth from "../useWindowWidth";

export default function Footer() {
  const width = useWindowWidth();

  return (
    <footer className="minimal-footer">
      {width > 428 ? (
        <p className="footer__text">
          &copy; 2025 MovieNight | Data provided by OMDb API
        </p>
      ) : (
        <>
          <p className="footer__text">&copy; 2025 MovieNight</p>
          <p className="footer__text">Data provided by OMDb API</p>
        </>
      )}
    </footer>
  );
}
