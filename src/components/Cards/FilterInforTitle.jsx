import moment from "moment";
import PropTypes from "prop-types";
import { MdOutlineClose } from "react-icons/md";

const FilterInfoTitle = ({ filterType, filterDates, onClear}) => {
  const DateRangeChip = ({ date }) => {
    const startDate = date?.from
      ? moment(date?.from).format("Do MMM YYYY")
      : "N/A";

    const endDate = date?.to ? moment(date?.to).format("Do MMM YYYY") : "N/A";

    return (
      <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded">
        <p className="text-xs font-medium ">
          {startDate} - {endDate}
        </p>

        <button onClick={onClear}>
          <MdOutlineClose />
        </button>
      </div>
    );
  };

  DateRangeChip.propTypes = {
    date: PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
    }).isRequired,
  };

  return (
    filterType && (
      <div className="mb-5">
        {filterType === "search" ? (
          <h3 className="text-lg font-medium">Search Results</h3>
        ) : (
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Travel Stories from</h3>
            <DateRangeChip date={filterDates} />
          </div>
        )}
      </div>
    )
  );
};
FilterInfoTitle.propTypes = {
  filterType: PropTypes.string.isRequired,
  filterDates: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  onClear: PropTypes.func.isRequired,
};

export default FilterInfoTitle;
