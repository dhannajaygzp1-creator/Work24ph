type WhyChooseUsProps = {
    tag: string
    title: string
    items: {
      icon: string
      heading: string
      description: string
    }[]
  }
  
  const WhyChooseUs = ({ tag, title, items }: WhyChooseUsProps) => {
    return (
      <section className="why-choose pad-tb">
        <div className="container">
  
          {/* Heading */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading">
                <span>{tag}</span>
                <h2 className="mb30">{title}</h2>
              </div>
            </div>
          </div>
  
          {/* Cards */}
          <div className="row upset">
            {items.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 mt30"
              >
                <div className="s-block up-hor">
                  <div className="s-card-icon">
                    <img
                      src={item.icon}
                      alt={item.heading}
                      className="img-fluid"
                    />
                  </div>
                  <h4>{item.heading}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
  }
  
  export default WhyChooseUs
  