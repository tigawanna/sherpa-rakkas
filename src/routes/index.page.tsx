import { WelcomeSection } from "./welcome/Welcome";

export default function HomePage() {
	return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary/10 ">
      <WelcomeSection />
    </main>
  );
}
