import { SignInForm } from "@/components/pages/signin";

export const metadata = {
  title: "Organick | Sign in",
};

export default function SignIn() {
  return (
    <>
      <div className="text-center text-4xl font-bold underline decoration-wavy">
        Sign In
      </div>
      <SignInForm />
    </>
  );
}
