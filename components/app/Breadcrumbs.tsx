import { Slash } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Fragment } from "react"


const listBreadcrumb = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/components',
    title: 'Components',
  },
  {
    title: 'Breadcrumb',
    link: '/components/breadcrumb',
  }
  , {
    title: 'new Breadcrumb',
    link: '/components/breadcrumb',
  }


]

export default function Breadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {listBreadcrumb.map((item, index) => (
          <Fragment key={item.link + index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            {index !== listBreadcrumb.length - 1
              &&
              <BreadcrumbSeparator />
            }
          </Fragment>
        ))}



      </BreadcrumbList>
    </Breadcrumb>
  )
}
