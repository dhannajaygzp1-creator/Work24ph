type WhyChooseWork24Props = {
    title: string;
    highlighted: string;
    description: string;
  };
  
  export default function WhyChooseWork24({
    title,
    highlighted,
    description,
  }: WhyChooseWork24Props) {
    return (
      <section className="about-sec bg-gradient5 pad-tb">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="common-heading">
                <span></span>
                <h1 className="mb30">
                  {title}{" "}
                  <span className="text-radius text-light text-animation bg-b">
                    {highlighted}
                  </span>
                </h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  