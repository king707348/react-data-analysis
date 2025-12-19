
import type { Metadata } from 'next'

import Page from "./dashboard/account/page"

export const metadata: Metadata = {
  title: 'My Page Title',
  description: "this is page"
}

export default function Home() {
  return (
    <>
      <Page />
    </>
  );
}
