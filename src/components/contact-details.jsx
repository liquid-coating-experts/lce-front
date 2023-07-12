import React from "react"

const ContactDetails = () => {
  return (
    <div className="sm:flex justify gap-14 pl-8">
      <p className="text-lg font-semibold underline pb-5">Contact Details</p>
      <div className="pb-5">
        <p className="font-semibold">Liquid Coating Experts</p>
        <p>Unit C Mead Park Industrial Estate</p>
        <p>Riverway</p>
        <p>Harlow</p>
        <p>Essex</p>
        <p>CM20 2SE</p>
      </div>
      <div>
        <div className="pb-3">
          <p className="font-semibold">Opening Times:</p>
          <p>Monday-Friday 10am - 5.30pm</p>
        </div>
        <div className="pb-3">
          <p className="font-semibold">Telephone</p>
          <p>0203 519 7222</p>
        </div>
        <div className="flex">
          <p className="font-semibold">Email:</p>
          <a
            href="mailto: sales@liquidcoatingexperts.co.uk"
            className="text-blue-600 ml-2"
          >
            {" "}
            sales@liquidcoatingexperts.co.uk
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
