import { useEffect, useState } from 'react'
import styled from 'styled-components';


const Setcount = styled.div`
  &>p{
  font-size: ${({ theme }) => theme.fontSize_45};
  font-family: YANGJIN;
  color: ${({ theme }) => theme.realWhite};
  }
`

const Countdown = () => {
  const setDate = new Date();
  // console.log(setDate);
  const Fivedays = 5 * 1000 * 60 * 60 * 24;
  const afterFivedays = setDate.getTime() + Fivedays;

  // console.log(afterFivedays);

  const dis = afterFivedays - setDate;
  const min1 = 1000 * 60

  const h = Math.floor(dis / (min1 * 60 * 24));
  const m = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60));
  const d = Math.floor((dis % (min1 * 60)) / min1);
  const s = Math.floor((dis % min1) / 1000);

  const [day, setday] = useState(h);
  const [hour, setHour] = useState(m);
  const [minutes, setMinutes] = useState(d);
  const [seconds, setSeconds] = useState(s);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (parseInt(seconds) > 0) setSeconds(parseInt(seconds) - 1);

      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          if (parseInt(hour) === 0) {
            if (parseInt(day) === 0) {
              clearInterval(countDown)
            } else {
              setday(parseInt(day) - 1);
              setHour(23);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setHour(parseInt(hour) - 1)
            setMinutes(59)
            setSeconds(59)
          }
        } else {
          setMinutes(parseInt(minutes) - 1)
          setSeconds(59)
        }
      }
    }, 1000);
    return () => clearInterval(countDown)
  }, [day, hour, minutes, seconds]);

  return (
    <Setcount>
      <p>다음 지역까지 {day} : {hour} : {minutes} : {seconds} </p>
    </Setcount>
  )
}

export default Countdown;