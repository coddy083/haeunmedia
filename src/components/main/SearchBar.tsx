import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar: React.FC = () => {
  return (
    <div className="border border-t-0 border-r-0 border-l-0 border-b-2 border-black bg-white flex items-center w-96 poor-story">
      <input
        type="text"
        className="w-full py-2 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:border-transparent text-sm"
        placeholder="검색어를 입력하세요..."
      />
      <button className="text-blue-600 hover:text-blue-800 mx-1">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
