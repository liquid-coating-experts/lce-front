import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Our most popular products
          </p>
          <UnderlineLink href="/store">Explore All Products</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data?.map((product) => {
                if (
                  product.metadata &&
                  "FEATURED_PRODUCT" in product.metadata
                ) {
                  // console.log(product)

                  return (
                    <li key={product.id}>
                      <ProductPreview {...product} />
                    </li>
                  )
                }
              })
            : Array.from(Array(8).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
