import Payment_details from "./payment_details";
import Information from "./information";
import Checkout from "./checkout";

export default ({
  screen,
  infoIco,
  cart,
  setpaymentab,
  email,
  setEmail,
  navigate,
}) => {
  switch (screen) {
    case 1:
      return (
        <Information email={email} setemail={setEmail} setInfoicon={infoIco} />
      );
    case 2:
      return <Payment_details cart={cart} setpaymentab={setpaymentab} />;
    case 3:
      return <Checkout navigate={navigate} />;
    default:
      break;
  }
};
