import styled from "styled-components";

const EventNavItems = styled.div``;

const EventNavItem = ({ data, resetInterval, number }) => {
  const click = () => {
    resetInterval(5000 + number, number);
  };

  return (
    <>
      <EventNavItems onClick={click}>{data.text}</EventNavItems>
    </>
  );
};

export default EventNavItem;
