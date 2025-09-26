export default function KeyDetail({ detail, detailInfo }) {
  return detailInfo !== "N/A" ? (
    <li className="key-detail">
      <strong className="highlight">{detail}:</strong> {detailInfo}
    </li>
  ) : (
    <></>
  );
}
