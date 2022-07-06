import Head from "next/head";
import Image from "next/image";
import DayHolder from "components/DayHolder";

export default function Home() {
  let exerciseSession;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DayHolder />
    </div>
  );
}
