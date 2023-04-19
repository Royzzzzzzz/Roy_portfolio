import Layout from '../components/layout'
import Hero from '../components/home/hero'



export default function Home() {
  return (
    <Layout>

      <section className="flex min-h-screen flex-col text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Hero />
        </div>
      </section>
    </Layout>
  )
}
