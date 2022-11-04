import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
`;

const postCodeStyle = {
  display: 'block',
  position: 'relative',
  top: '0%',
  width: '350px',
  height: '250px',
  padding: '7px',
};
const PostCode = ({ zipcode, address1, display, postcode }) => {
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    zipcode(data.zonecode);
    address1(fullAddress);
  };

  return (
    <>
      <CloseButton
        onClick={() => {
          display('inline');
          postcode(false);
        }}
      >
        X
      </CloseButton>
      <DaumPostcode
        style={postCodeStyle}
        onComplete={handlePostCode}
        autoClose={false}
      ></DaumPostcode>
    </>
  );
};

export default PostCode;
