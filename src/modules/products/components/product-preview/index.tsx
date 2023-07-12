import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  subtitle,
  handle,
  thumbnail,
  price,
  variants,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <div>
        <Thumbnail thumbnail={thumbnail} size="full" />
        <div className="text-base-regular mt-1">
          <span className="text-base-bold text-lg">
            <strong>{title}</strong>
          </span>
          <p>{subtitle}</p>
          <div className="flex items-center gap-x-2 mt-2">
            {variants && variants.length > 1 && (
              <p className="font-semibold italic">From </p>
            )}
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <span className="line-through text-gray-500">
                    {price.original_price}
                  </span>
                )}
                <span
                  className={clsx("font-semibold", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                  {price.calculated_price}
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
            <span className="text-gray-500">Ex VAT</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
