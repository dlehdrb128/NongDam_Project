import { useEffect } from 'react'
const { kakao } = window;

const FivedaysMaps = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(36.6281765811891, 127.49005221639906),
      lever: 3
    };
    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(
      36.6281765811891,
      127.49005221639906
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