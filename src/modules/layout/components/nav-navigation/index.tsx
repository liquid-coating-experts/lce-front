import { useNavigationCollections } from "@lib/hooks/use-layout-data"
import { chunk } from "lodash"
import Link from "next/link"
import React, { useState } from "react"

const NavNavigation = () => {
  const [open, setOpen] = useState(false)

  const { data: collections, isLoading: loadingCollections } =
    useNavigationCollections()
  return (
    <div className="hidden xsmall:block bg-theme_yellow-900">
      {collections &&
        chunk(collections, 6).map((chunk, index) => {
          return (
            <ul
              key={index}
              className="pr-4 sm:content-container flex justify-between sm:justify-around gap-y-8 py-3 text-theme_darkblue-900"
            >
              {chunk.map((collection) => {
                return (
                  <div
                    key={collection.id}
                    className="hover:font-semibold cursor-pointer"
                  >
                    <Link
                      href={`/collections/${collection.id}`}
                      onClick={() => setOpen(false)}
                    >
                      {collection.title}
                    </Link>
                  </div>
                )
              })}
            </ul>
          )
        })}
    </div>
  )
}

export default NavNavigation
