export default function MetaData({ meta }) {
  return (
    <>
      {meta !== "N/A" && (
        <>
          <span className="metadata__info">{meta}</span>
          <span className="meta-dot">•</span>
        </>
      )}
    </>
  );
}
