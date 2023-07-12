import Image from "next/image"
import React from "react"
import questionIcon from "../modules/common/icons/bubble.png"

const SingleFAQ = ({ question, answer }) => {
  return (
    <div className="flex sm:p-6">
      <div className="sm:w-fit w-14">
        <Image
          src={questionIcon}
          width={70}
          height={70}
          alt="question bubble"
          className="mx-auto"
        />
      </div>
      <div>
        <p className="pl-5 text-lg font-semibold">{question}</p>
        <p className="pl-5">{answer}</p>
      </div>
    </div>
  )
}
export default SingleFAQ
