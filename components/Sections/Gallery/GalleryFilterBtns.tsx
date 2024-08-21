// import styles from "./GalleryFilterBtns.Module.scss"

interface GalleryFilterBtnsProps {
  filter: string;
  onFilter: (filter: string) => void;
}

export function GalleryFilterBtns({
  filter,
  onFilter,
}: GalleryFilterBtnsProps) {
  const filters = ["all", "apps", "games", "websites"];

  return (
    <ul role="list" className="grid__filter-btns">
      {filters.map((filter) => (
        <li key={filter} role="listitem">
          <button
            className={`btn ${filter === filter ? "active" : ""}`}
            onClick={() => onFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}
