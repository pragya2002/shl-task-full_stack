import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (<div className="item">{<SearchResult result={[result.title, result.tech, result.frontend, result.backend, result.db, result.infra]} />}</div>)
      })}
    </div>
  );
};
