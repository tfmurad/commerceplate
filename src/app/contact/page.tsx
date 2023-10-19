import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

const Contact = async () => {
  const data: any = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image, contactOptions } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="pt-12 xl:pt-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              contactOptions && contactOptions.map((contact: any) => (
                <div key={contact.heading} className="p-10 bg-theme-light dark:bg-darkmode-theme-light rounded-md text-center">
                  <h2 className="mb-6">{contact.heading}</h2>
                  <p>{contact.subHeading}</p>
                  <p>{contact.subtitle}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto sm:col-9 md:col-10">
            <h2 className="mb-14 text-center">We would love to hear from you!</h2>
            <form className="border border-border rounded-md p-10" action={contact_form_action} method="POST">
              <div className="mb-6 md:grid grid-cols-2 gap-x-8 max-md:space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-6 md:grid grid-cols-2 gap-x-8 max-md:space-y-6">
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john.doe@email.com"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name" className="form-label">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enquiry About"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Type your message..."
                  rows={8}
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
