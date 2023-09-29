import { Link } from 'rakkasjs'
import { Features } from './Features'


interface WelcomePageProps {}

export function WelcomeSection({}: WelcomePageProps) {

  return (
    <div className="hero min-h-screen bg-base-300 text-base-content">
      <div className="hero-content text-center">
        <div className="min-h-[200px] flex flex-col justify-evenly items-center gap-5">
          <h1 className="text-6xl font-bold">Welcome To Sherpa</h1>
          <p className="text-2xl text-base-content/80 ">
            Your smart job application assistant
          </p>
          <Features />

          <div className="flex  gap-2">
            <Link href="/dashboard" className="btn btn-secondary-focus">
              Get Started
            </Link>
            <Link href="/login" className="btn btn-secondary-focus">
              Or login to continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
