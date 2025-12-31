import Layout from "../../components/dashboard/page"
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale:string }>
}

export async function generateMetadata({params}: Props) {
  const { locale } = await params
  const t = await getTranslations({locale})

  return {
    title: t("title"),
    description: t("welcomeMessage", {name:"Evan"})
  }
}

export default function Home() {

  return (
    <>
      <Layout />
    </>
  )
}