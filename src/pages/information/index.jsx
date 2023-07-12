import React from "react"
import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head"
import ContactForm from "../../components/contact-form"
import ContactDetails from "../../components/contact-details"
import TrainingVideos from "../../components/training-videos"

const Info = () => {
  return (
    <div>
      <Head
        title="Information"
        description="Contact us, Accredited Training and Useful Information about Ultraflex."
      />
      <div className="content-container md:flex mt-8">
        <section className="p-2 md:p-6 md:w-1/2 w-full bg-theme_yellow-900 border border-theme_darkblue-900">
          <p className="text-xl-regular text-gray-900 max-w-lg mb-4 text-center">
            Our accredited training programme
          </p>

          <p className="mb-2">
            We can provide an incomparable technical back up and training
            expertise to assist you from the design of the roof to the
            application, making sure to achieve the highest standards.
          </p>
          <p className="mb-2">
            Simply complete the contact form and we will get in touch with more
            information ASAP
          </p>
          <p className="mb-2">
            Alternatively, contact us on the details below!
          </p>
          <hr className="my-4 h-0.5 border-0 bg-theme_darkblue-900"></hr>
          <div className="text-black text-sm text-center">
            <p className="font-semibold pb-3">Guarantee details:</p>
            <p>The topcoat must be included in all systems to achieve:</p>
            <br />
            <p className="font-semibold pb-2">With UNTRAINED contractors:</p>
            <p> 15 YEARS: Ultraflex and Ultratop at the recommended coverage</p>
            <br />
            <p className="font-semibold pb-2">With TRAINED contractors:</p>
            <p>20 YEARS: Ultraflex and Ultratop at the recommended coverage</p>
            <p>25 YEARS: Ultraflex and Ultratop at the recommended coverage.</p>
            <p>Extra layer required 0.5kg additional Ultraflex</p>
          </div>
        </section>
        <hr className="my-4"></hr>

        <section className="md:p-8 pt-4 md:w-1/2 w-full">
          <ContactForm />
        </section>
        <hr className="my-4"></hr>
      </div>

      <div className="md:content-container mt-6">
        <hr className="hidden md:block md:my-4"></hr>

        <ContactDetails />
        <hr className="my-4"></hr>
      </div>

      <TrainingVideos />
    </div>
  )
}

Info.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Info
