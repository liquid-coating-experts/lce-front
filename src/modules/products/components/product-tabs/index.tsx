import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import Link from "next/link"
import { useMemo } from "react"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = useMemo(() => {
    // console.log(product.metadata, "all meta")
    let metaArr = []
    if (product.metadata) {
      for (const [key, value] of Object.entries(product.metadata)) {
        key !== "FEATURED_PRODUCT" && metaArr.push({ k: key, v: value })
      }
    }
    if (metaArr.length > 0) {
      return [
        {
          label: "Specifications",
          component: <ProductInfoTab product={product} />,
        },
        {
          label: "Shipping & Returns",
          component: <ShippingInfoTab />,
        },
      ]
    } else {
      return [
        {
          label: "Shipping & Returns",
          component: <ShippingInfoTab />,
        },
      ]
    }
  }, [product])

  return (
    <div>
      <Tab.Group>
        <Tab.List className="border-b border-gray-200 box-border grid grid-cols-2">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx(
                    "text-left uppercase text-small-regular pb-2 -mb-px border-b border-gray-200 transition-color duration-150 ease-in-out",
                    {
                      "border-b border-gray-900": selected,
                    }
                  )
                }
              >
                {tab.label}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, j) => {
            return <div key={j}>{tab.component}</div>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  type ProductSpecs = {
    properties: string
    values: string
    method?: string
  }
  let arrayOfValues = []
  let specs: ProductSpecs[] = []
  if (product.metadata) {
    for (const [key, value] of Object.entries(product.metadata)) {
      key !== "FEATURED_PRODUCT" && arrayOfValues.push({ k: key, v: value })
    }
    arrayOfValues.map((data) => {
      console.log(data)

      if (typeof data.v === "string" && data.v.includes("; method:")) {
        const split = data.v.split(" ; method: ")
        const theValue = split[0]
        const theMethod = split[1]
        specs.push({
          properties: data.k,
          values: theValue,
          method: theMethod,
        })
      } else if (typeof data.v === "string") {
        specs.push({ properties: data.k, values: data.v })
      }
    })
    // console.log(arrayOfValues)
  }

  return (
    <Tab.Panel className="text-small-regular py-8">
      {specs.length > 0 && (
        <div>
          <div className="font-bold grid grid-cols-3 gap-8">
            <p className="">properties</p>
            <p>values</p>
            <p>method</p>
          </div>
          {specs.map((spec) => (
            <div key={spec.properties} className="grid grid-cols-3 gap-8">
              <p>{spec.properties}</p>
              <p>{spec.values}</p>
              {spec.method && <p>{spec.method}</p>}
            </div>
          ))}
        </div>
      )}
    </Tab.Panel>
    // <Tab.Panel className="text-small-regular py-8">
    //   <div className="grid grid-cols-2 gap-x-8">
    //     <div className="flex flex-col gap-y-4">
    //       <div>
    //         <span className="font-semibold">Material</span>
    //         <p>{product.material ? product.material : "-"}</p>
    //       </div>
    //       <div>
    //         <span className="font-semibold">Country of origin</span>
    //         <p>{product.origin_country ? product.origin_country : "-"}</p>
    //       </div>
    //       <div>
    //         <span className="font-semibold">Type</span>
    //         <p>{product.type ? product.type.value : "-"}</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-y-4">
    //       <div>
    //         <span className="font-semibold">Weight</span>
    //         <p>{product.weight ? `${product.weight} g` : "-"}</p>
    //       </div>
    //       <div>
    //         <span className="font-semibold">Dimensions</span>
    //         <p>
    //           {product.length && product.width && product.height
    //             ? `${product.length}L x ${product.width}W x ${product.height}H`
    //             : "-"}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   {product.tags?.length ? (
    //     <div>
    //       <span className="font-semibold">Tags</span>
    //     </div>
    //   ) : null}
    // </Tab.Panel>
  )
}

const ShippingInfoTab = () => {
  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              If ordered by 5pm weekdays, the product will be dispatched the
              same day and shipped with APC Overnight for next day delivery.
              Delivery will be trackable on APC Overnight with the tracking
              number supplied
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Returns</span>
            <p className="max-w-sm">
              Please refer to our{" "}
              <Link
                className="text-blue-700 font-semibold"
                href="/delivery-information"
              >
                Delivery Information
              </Link>{" "}
              page regarding returns and other delivery-related topics
            </p>
          </div>
        </div>
        <div>
          <p>
            Still have unanswered questions? please check out our{" "}
            <Link className="text-blue-700 font-semibold" href="/faq">
              FAQ Page
            </Link>{" "}
            and{" "}
            <Link className="text-blue-700 font-semibold" href="/information">
              General Information page
            </Link>
          </p>
        </div>
      </div>
    </Tab.Panel>
  )
}

export default ProductTabs
