import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen h-full w-full flex items-center justify-center">
      <SignIn />
    </main>
  );
}
