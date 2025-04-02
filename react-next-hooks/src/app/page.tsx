import OtpForm from "./components/otp/OtpForm";
import OtpVerification from "./components/otp-validation/OtpValidation";

export default function Home() {
  return (
    <div>
      <h1>otp validation</h1>
      <OtpForm />
      <div>
        <h1> the second otp varification project with outer Nodejs</h1>
        <OtpVerification />
      </div>
      
    </div>
  );
}
