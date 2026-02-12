'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumb = ({
   backgroundImage,
}: {
  backgroundImage?: string
}) => {
  const pathname = usePathname()

  // Split URL path
  const pathSegments = pathname.split('/').filter(Boolean)

  // Create breadcrumbs
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const label = segment.replace(/-/g, ' ')
    return { href, label }
  })

  // Page title (last segment)
  const title =
    pathSegments.length > 0
      ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ')
      : 'Home'

  return (
    <section
      className="breadcrumb-area banner-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 v-center">
              <div className="bread-inner">
              <div className="bread-title">
                  <h2>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </h2>
                </div>
                <div className="bread-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>

                    {breadcrumbs.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>
                          {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

               

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
