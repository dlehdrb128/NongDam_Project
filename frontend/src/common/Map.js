import { useEffect } from 'react'
const { kakao } = window;

const FivedaysMaps = ({ data }) => {
  let latitude = Number(data.market_latitude);
  let logitude = Number(data.market_longitude);

  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(latitude, logitude),
      lever: 3
    };
    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(
      latitude,
      logitude
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);
  return (
    <div id='map' style={{ width: '496px', height: '333px' }}></div>
  )
}

export default FivedaysMaps;