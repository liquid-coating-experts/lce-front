import Button from "@modules/common/components/button"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[91vh] w-full relative">
      <div className="h-[91vh] w-full flex ">
        <div className="text-white relative mx-auto z-10 flex h-auto flex-col justify-center items-center text-center">
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
            Suppliers of High Performance Waterproofing Systems
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="flex gap-6">
            <Link href="/store">
              <Button>shop products</Button>
            </Link>
            <UnderlineLink href="/information">Learn More</UnderlineLink>
          </div>
        </div>
        <div className="bg-scroll bg-[url('/hero.jpeg')] absolute inset-0 bg-cover h-screen 2xl:bg-cover bg-no-repeat bg-center">
          <div className=" h-full flex  justify-center items-center backdrop-brightness-50"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
