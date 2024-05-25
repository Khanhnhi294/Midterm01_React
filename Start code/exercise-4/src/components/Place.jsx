export default function Place({image, title}) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>"the place title" {title}</h3>
      </button>
    </li>
  );
}
