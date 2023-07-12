import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import Button from "@modules/common/components/button"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { fetchCollectionProducts } from "@pages/collections/[id]"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCart } from "medusa-react"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

type CollectionTemplateProps = {
  collection: {
    id: string
    title: string
  }
}

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({
  collection,
}) => {
  const { cart } = useCart()
  const { ref, inView } = useInView()

  const {
    data: infiniteData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteQuery(
    [`get_collection_products`, collection.id, cart?.id],
    ({ pageParam }) =>
      fetchCollectionProducts({
        pageParam,
        id: collection.id,
        cartId: cart?.id,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  useEffect(() => {
    if (cart?.region_id) {
      refetch()
    }
  }, [cart?.region_id, refetch])

  const previews = usePreviews({
    pages: infiniteData?.pages,
    region: cart?.region,
  })

  const [showBrand, setShowBrand] = useState("")

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  let filterList: string[] = []
  previews.map((p) => {
    p.tag && p.tag[0] && filterList.push(p.tag[0].value)
  })
  const filter = Array.from(new Set(filterList))

  return (
    <div className="content-container py-6">
      <div className="mb-8 text-2xl-semi">
        <h1>{collection.title}</h1>
      </div>
      <div className="flex gap-3">
        <Button
          variant={showBrand.length < 1 ? "selected" : "option"}
          onClick={() => setShowBrand("")}
          key="all"
        >
          All Brands
        </Button>

        {filter &&
          filter.map((p) => (
            <Button
              variant={showBrand === p ? "selected" : "option"}
              onClick={() => setShowBrand(p)}
              key={p}
            >
              {p}
            </Button>
          ))}
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8 pt-8">
        {previews.map((p) => {
          if (p.tag && p.tag[0] && p.tag[0].value === showBrand) {
            return (
              <li key={p.id}>
                <ProductPreview {...p} />
              </li>
            )
          }
          if (showBrand.length < 1) {
            return (
              <li key={p.id}>
                <ProductPreview {...p} />
              </li>
            )
          }
        })}
        {isLoading &&
          !previews.length &&
          repeat(8).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
        {isFetchingNextPage &&
          repeat(getNumberOfSkeletons(infiniteData?.pages)).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
      </ul>
      <div
        className="py-16 flex justify-center items-center text-small-regular text-gray-700"
        ref={ref}
      >
        <span ref={ref}></span>
      </div>
    </div>
  )
}

export default CollectionTemplate
