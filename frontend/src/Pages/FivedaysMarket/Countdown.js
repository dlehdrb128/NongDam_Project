import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Setcount = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSize_45};
    font-family: YANGJIN;
    color: ${({ theme }) => theme.realWhite};
  }
`;

const Countdown = ({ getWeeks }) => {
  const [data, setData] = useState({
    day: null,
    hour: null,
    min: null,
    sec: null,
  });
  let weeks = new Date().getDate() / 7;

  useEffect(() => {
    getWeeks(weeks);
  }, [weeks]);
  // const setDate = new Date();
  // // console.log(setDate);
  // const Fivedays = 5 * 1000 * 60 * 60 * 24;
  // const afterFivedays = setDate.getTime() + Fivedays;

  // // console.log(afterFivedays);

  // const dis = afterFivedays - setDate;
  // const min1 = 1000 * 60

  // const h = Math.floor(dis / (min1 * 60 * 24));
  // const m = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60));
  // const d = Math.floor((dis % (min1 * 60)) / min1);
  // const s = Math.floor((dis % min1) / 1000);

  // const [day, setday] = useState(h);
  // const [hour, setHour] = useState(m);
  // const [minutes, setMinutes] = useState(d);
  // const [seconds, setSeconds] = useState(s);

  // useEffect(() => {
  //   const countDown = setInterval(() => {
  //     if (parseInt(seconds) > 0) setSeconds(parseInt(seconds) - 1);

  //     if (parseInt(seconds) === 0) {
  //       if (parseInt(minutes) === 0) {
  //         if (parseInt(hour) === 0) {
  //           if (parseInt(day) === 0) {
  //             clearInterval(countDown)
  //           } else {
  //             setday(parseInt(day) - 1);
  //             setHour(23);
  //             setMinutes(59);
  //             setSeconds(59);
  //           }
  //         } else {
  //           setHour(parseInt(hour) - 1)
  //           setMinutes(59)
  //           setSeconds(59)
  //         }
  //       } else {
  //         setMinutes(parseInt(minutes) - 1)
  //         setSeconds(59)
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(countDown)
  // }, [day, hour, minutes, seconds]);

  let dummyData = [
    {
      market: 1,
      local1: "jeonbuk",
      local2: "gangwon",
    },
    {
      market: 2,
      local1: "jeonbuk",
      local2: "gangwon",
    },
    {
      market: 3,
      local1: "jeonbuk",
      local2: "gangwon",
    },
    {
      market: 4,
      local1: "jeonbuk",
      local2: "gangwon",
    },
  ];

  function useInterval(callback, delay) {
    const intervalRef = useRef(null);
    const savedCallback = useRef(callback);
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      const tick = () => savedCallback.current();
      if (typeof delay === "number") {
        intervalRef.current = window.setInterval(tick, delay);
        return () => window.clearInterval(intervalRef.current);
      }
    }, [delay]);
  }

  let good = () => {
    let current = new Date().getTime();
    let next = new Date("2022-10-31").getTime();
    let expected = next - current;
    let day = Math.floor(expected / (1000 * 60 * 60 * 24));
    let hour = Math.floor((expected / (1000 * 60 * 60)) % 24);
    let min = Math.floor((expected / (1000 * 60)) % 60);
    let sec = Math.floor(((expected / 1000) % 60) % 60);
    setData({
      day: day,
      hour: hour,
      min: min,
      sec: sec,
    });
  };

  useInterval(good, 1000);

  if (data.day === null) {
    return <h1>로딩중</h1>;
  }

  return (
    <Setcount>
      <p>
        다음 지역까지 {data.day}일 {data.hour}시간 {data.min}분 {data.sec}초
      </p>
    </Setcount>
  );
};

export default Countdown;
