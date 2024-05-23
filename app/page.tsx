import SubmitButton from "@/components/Button";
import LoginPage from "@/components/LoginPage";

export default function Home() {
  (function () {
    console.log("Welcome to GeeksforGeeks!");
  })();

  return (
    <div>
      <LoginPage />
    </div>
  );
}
