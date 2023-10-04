import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";

const NotFound = async () => {
  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-4">
              {/* <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
                404
              </span> */}
              <Image
                src="/images/404.png"
                alt="404"
                width={538}
                height={200}
              />
              <h1 className="h2 my-4">Opps Page not found!</h1>
              <div className="content">
              </div>
              <a href="/" className="btn btn-primary mt-8">
                Back to home page
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
