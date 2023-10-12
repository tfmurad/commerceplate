import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";

const About = () => {
  const data: any = getListPage("about/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const accordion = getListPage("sections/faq.md");
  console.log(accordion.content)
  const { frontmatter, content } = data;
  const { title, meta_title, description, image, aboutUs } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <PageHeader title={title} />

      <section>
        <div className="container">

          {aboutUs.map((section: any, index: number) => (
            <div
              className={`lg:flex gap-8 section-sm`}
              key={section.heading}
            >
              {index % 2 === 0 ? (
                <>
                  <ImageFallback
                    className="rounded-md mx-auto"
                    src={section.image}
                    width={536}
                    height={449}
                    alt={section.heading}
                  />
                  <div className="mt-10 lg:mt-0">
                    <h2>{section.heading}</h2>
                    <p className="mt-4 lg:text-xl font-medium text-lunar leading-7" dangerouslySetInnerHTML={markdownify(section.content)} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2>{section.heading}</h2>
                    <p className="mt-4 lg:text-xl font-medium text-lunar leading-7" dangerouslySetInnerHTML={markdownify(section.content)} />
                  </div>
                  <ImageFallback
                    className="rounded-md mx-auto mt-10 lg:mt-0"
                    src={section.image}
                    width={536}
                    height={449}
                    alt={section.heading}
                  />
                </>
              )}
            </div>
          ))}

        </div>
      </section>

      <Testimonials data={testimonial} />


      <section>
        <div className="container">
          <div className="text-center">
            <h2>Out Staff</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
              {
                Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="border border-border rounded-lg">
                    <div className="py-6 space-y-2">
                      <h3 className="h4">Olivia Harper</h3>
                      <p>UI Designer</p>
                    </div>
                    <div className="bg-theme-light lg:px-12 pt-11 rounded-b-xl mx-auto">
                      <ImageFallback
                        src="/images/staff.png"
                        alt="our staff"
                        width={208}
                        height={224}
                        className="mx-auto"
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </section>

      <section className="section">
        <div className="container">
          <div className="bg-theme-light px-7 py-20 dark:bg-darkmode-theme-light text-center rounded-md">
            <h2>Reasons to shop with us</h2>

            <div className="row justify-between gap-x-6 mt-14">
              <div className="col-3">
                <h3 className="h4 mb-4">24/7 Friendly Support</h3>
                <p>Our support team always ready
                  for you to 7 days a week</p>
              </div>

              <div className="col-3">
                <h3 className="h4 mb-4">7 Days Easy Return</h3>
                <p>Product any fault within 7 days for an
                  immediately exchange.</p>
              </div>

              <div className="col-3">
                <h3 className="h4 mb-4">Quality Guaranteed</h3>
                <p>If your product are not perfect, return
                  them for a full refund</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container-lg">
          <div className="bg-theme-light px-7 lg:px-32 py-20 dark:bg-darkmode-theme-light row mb-14 xl:mb-28">
            <div className="col-12 md:col-5 mx-auto space-y-5 mb-10 md:mb-0">
              <h1>Frequently Asked
                Questions</h1>
              <p>Our expertly crafted FAQ guide provides valuable insights on selecting the perfect table lamp to complement your decor and meet your specific lighting needs.</p>
            </div>

            <div className="col-12 md:col-7">
              <MDXContent content={accordion.content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
