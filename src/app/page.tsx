import type { Metadata } from 'next'
import Layout from "./dashboard/page"

export const metadata: Metadata = {
  title: 'My Page Title',
  description: "this is page"
}

export default function Home() {

  return (
    <>
      <Layout />
    </>
  );
}
