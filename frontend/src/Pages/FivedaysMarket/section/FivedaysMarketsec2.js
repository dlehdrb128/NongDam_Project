import FivedaysMarketsec2conwrapper from "./FivedaysMarketsec2conwrapper";

const FivedaysMarketsec2 = ({ productData }) => {
  return (
    <>
      <FivedaysMarketsec2conwrapper data={productData} title={({ theme }) => theme.orange} local={productData[0].product_local} brcol={({ theme }) => theme.orange}></FivedaysMarketsec2conwrapper>
    </>
  );
};
//end

export default FivedaysMarketsec2;
