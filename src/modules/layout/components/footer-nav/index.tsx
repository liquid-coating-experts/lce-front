import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import Image from "next/image"
import Facebook from "@modules/common/icons/facebook"
import LinkedIn from "@modules/common/icons/linkedin"
import Twitter from "@modules/common/icons/twitter"
import Instagram from "@modules/common/icons/instagram"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 items-center justify-between">
        <div>
          <Link href="/" className="">
            <Image
              src="/LCE_main.png"
              width={240}
              height={50}
              alt="brand logo"
            />
          </Link>
        </div>
        {/* <div className="flex flex-col gap-y-2">
             <span className="text-base-semi">Collections</span>
             <ul
             className={clsx("grid grid-cols-1 gap-y-2", {
               "grid-cols-2": (collections?.length || 0) > 4,
              })}
              >
              {collections?.map((c) => (
                <li key={c.id}>
                <Link href={`/collections/${c.id}`}>{c.title}</Link>
                </li>
                ))}
                </ul>
              </div> */}

        <div className="md:flex md:flex-row-reverse grid-cols-1 gap-x-16 md:gap-x-80">
          <div className="flex pb-6 my-auto">
            <Link
              href="https://www.facebook.com/LiquidCoatingExperts"
              target="_blank"
              rel="noopener"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/liquidcoatingexperts/"
              target="_blank"
              rel="noopener"
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://twitter.com/LiquidCoating"
              target="_blank"
              rel="noopener"
            >
              <Twitter />
            </Link>
            <Link
              href="https://www.instagram.com/liquidcoatin28/"
              target="_blank"
              rel="noopener"
            >
              <Instagram />
            </Link>
          </div>

          <div className="flex flex-col gap-y-2 text-center md:text-left ">
            <ul className="grid grid-cols-1 gap-y-2 text-lg">
              <li>
                <Link href="/faq" rel="noreferrer">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/delivery-information" rel="noreferrer">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/information" rel="noreferrer">
                  Learn More
                </Link>
              </li>
              <li>
                <Link href="/information" rel="noreferrer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" rel="noreferrer">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span className="text-xsmall-regular text-gray-500 text-center">
        © Copyright 2022 Liquid Coating Experts
      </span>
    </div>
  )
}

export default FooterNav
