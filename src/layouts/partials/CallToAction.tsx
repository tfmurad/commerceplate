import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="rounded-xl bg-theme-light px-4 py-16 dark:bg-darkmode-theme-light">
              <div className="row items-center justify-between">
                <div className="mb-10 md:col-6 md:order-1 text-center">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description,
                    )}
                    className="mb-6"
                  />
                  {data.frontmatter.button.enable && (
                    <form className="flex justify-center">
                      <input
                        placeholder="Email Here"
                        type="text"
                        className="form-input"
                      />
                      <input
                        className="btn btn-primary rounded-tl-none rounded-bl-none"
                        type="submit"
                        value="Subscribe"
                      />
                    </form>
                  )}
                </div>

                <div className=" md:col-6 lg:col-5 md:order-2 md:mb-0">
                  <ImageFallback
                    className="w-full"
                    src={data.frontmatter.image}
                    width={392}
                    height={390}
                    alt="cta-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
