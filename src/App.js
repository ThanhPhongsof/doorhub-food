import { Layout } from "components/layout";
import {
  About,
  Catagory,
  CTA,
  Features,
  Howitwork,
  Illustration,
  OurBlog,
  Subscription,
  Testimonials,
} from "modules/main";

function App() {
  return (
    <div className="app">
      <Layout>
        <main>
          <Illustration />
          <Howitwork />
          <Catagory />
          <Features />
          <About />
          <CTA />
          <Testimonials />
          <OurBlog />
          <Subscription />
        </main>
      </Layout>
    </div>
  );
}

export default App;
