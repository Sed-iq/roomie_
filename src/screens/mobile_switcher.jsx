import Checkout from "./checkout";
import Information from "./information";
import Payment_details from "./payment_details";

// Switches screens on mobile
export default ({ screen, infoIco, cart, setpaymentab, email, setEmail }) => {
  switch (screen) {
    // Mobile screen is different
    case 1:
      return (
        <Information email={email} setemail={setEmail} setInfoicon={infoIco} />
      );
    case 2:
      return <Payment_details cart={cart} setpaymentab={setpaymentab} />;
    case 3:
      return <Checkout />;
    default:
      break;
  }
};
