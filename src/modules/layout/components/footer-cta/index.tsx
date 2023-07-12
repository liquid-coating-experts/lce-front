import UnderlineLink from "@modules/common/components/underline-link"

const FooterCTA = () => {
  return (
    <div className="bg-theme_yellow-900 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <p className="text-sm-semi text-center">
            <strong>
              Liquid Coating Experts has been formed to offer the trade and
              public a one stop shop for all your liquid coating needs.{" "}
            </strong>
            <br />
            <br />
            Traditionally flat roof properties have been protected by layers
            upon layers of felt. With the advance in technology this is no
            longer the case. Properties can now be protected for up to 25 years
            with a liquid resin called Ultraflex. This product is painted on
            tosurfaces creating a waterproof seal protecting your property from
            the elements.
            <br />
            <br />
            You can order your required products over the phone or online and if
            ordered before 5pm your products will be dispatched for next working
            day delivery.
          </p>
          <div className="mt-6 m-auto w-fit flex gap-10">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
            <UnderlineLink href="/information">Learn more</UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
