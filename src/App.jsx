import { useEffect, useState } from "react";
import { Tweet } from "react-twitter-widgets";

function getDiff(t1, t2) {
  const diff = new Date(t2.getTime() - t1.getTime());
  return {
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
}

export default function App() {
  const enforced = new Date(1658336400 * 1000);
  const [diff, setDiff] = useState({});

  useEffect(() => {
    setInterval(() => {
      setDiff(getDiff(new Date(), enforced));
    }, 1000);
  });

  return (
    <div className="flex min-h-screen flex-row justify-center bg-gray-200 py-16 text-gray-900 hover:decoration-2 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col justify-between space-y-16">
        <div className="flex flex-col space-y-8 px-8 md:max-w-2xl md:space-y-16">
          <div className="space-y-4 md:space-y-8">
            <h1 className="text-center text-3xl font-semibold">
              Internet Apocalypse Countdown
            </h1>
            <p className="text-center text-xl font-medium text-gray-700 dark:text-gray-400">
              The Indonesian government is planning to ban countless online
              services including Google, YouTube, and Twitter.
            </p>
          </div>
          <div className="grid gap-4 text-6xl font-semibold md:grid-cols-4 md:gap-2">
            <div className="space-y-2">
              <h1 className="text-center">{diff.day}</h1>
              <h2 className="text-center font-mono text-2xl text-gray-700 dark:text-gray-400">
                days
              </h2>
            </div>
            <div className="space-y-2">
              <h1 className="text-center">{diff.hour}</h1>
              <h2 className="text-center font-mono text-2xl text-gray-700 dark:text-gray-400">
                hours
              </h2>
            </div>
            <div className="space-y-2">
              <h1 className="text-center">{diff.minute}</h1>
              <h2 className="text-center font-mono text-2xl text-gray-700 dark:text-gray-400">
                minutes
              </h2>
            </div>
            <div className="space-y-2">
              <h1 className="text-center">{diff.second}</h1>
              <h2 className="text-center font-mono text-2xl text-gray-700 dark:text-gray-400">
                seconds
              </h2>
            </div>
          </div>
          <div className="space-y-4 md:space-y-8">
            <p className="text-center text-xl font-medium">
              Still confused? Check{" "}
              <a
                href="https://twitter.com/resir014/status/1547937891380146177"
                className="underline decoration-gray-600 decoration-2 hover:text-gray-800 hover:decoration-blue-500 dark:decoration-gray-500 dark:hover:text-gray-100"
              >
                this tweet
              </a>{" "}
              out.
            </p>
            <h2 className="text-center text-xl font-medium">
              Remember people, arbitrary censorship is a clear violation of
              human rights!
            </h2>
          </div>
        </div>
        <div className="hidden space-y-2 md:block">
          <p className="text-center text-gray-500">Made with ♥ by Pixel.</p>
          <p className="text-center text-gray-500">
            This website is open-source! Check it out{" "}
            <a
              href="https://github.com/pnxl/kominfuck"
              className="underline hover:text-gray-600 hover:decoration-blue-800 dark:hover:text-gray-400"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
