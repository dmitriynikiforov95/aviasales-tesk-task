import React from "react";
import { connect } from "react-redux";
import { setStopsSortingValue } from "../../actions";
import TicketListSortingTabs from "../../components/ticket-list-sorting-tabs";

const TicketListSortingTabsContainer = ({
  stopsSortingValue,
  setStopsSortingValue,
}) => {
  const sortingTabs = [
    {
      tabText: "cамый дешевый",
      sortingValue: "price",
    },
    {
      tabText: "cамый быстрый",
      sortingValue: "duration",
    },
  ];

  return (
    <TicketListSortingTabs
      activeTab={stopsSortingValue}
      setStopsSortingValue={setStopsSortingValue}
      sortingTabs={sortingTabs}
    />
  );
};

const mapStateToProps = ({ stopsSortingValue }) => ({
  stopsSortingValue,
});

const mapDispatchToProps = {
  setStopsSortingValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListSortingTabsContainer);
