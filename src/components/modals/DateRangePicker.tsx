import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangeSelector = ({ sendCheckDate }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7), // Default range of 7 days
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setState([ranges.selection]);
    sendCheckDate(ranges.selection);
  };

  return (
    <div className='absolute -left-48 top-16 rounded-3xl'>
      <DateRangePicker
        onChange={handleSelect}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction='horizontal'
      />
    </div>
  );
};

export default DateRangeSelector;
