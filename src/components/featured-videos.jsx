import React from "react"
import YoutubeEmbed from "./youtube-player"
import UnderlineLink from "@modules/common/components/underline-link"
import Link from "next/link"

const FeaturedVideos = () => {
  const YOUTUBE_VIDEOS = [
    { title: "Official Ultra-Flex Promo", embed: "NAmUzvOb9Eo" },
    { title: "Official Ultra-Flex Application Video", embed: "tzJw65mmk3I" },
  ]

  return (
    <div className="content-container py-4 ">
      <div className="pb-8 text-center ">
        <p className="text-2xl-regular font-bold pr-6">About Ultraflex</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 m-auto w-full gap-8">
        {YOUTUBE_VIDEOS.map((vid) => {
          return (
            <div key={vid.embed} className="border border-theme_blue-900">
              <p className="font-semibold bg-theme_yellow-900 text-xl underline text-theme_darkblue-900 p-4">
                {vid.title}
              </p>
              <YoutubeEmbed embedId={vid.embed} />
            </div>
          )
        })}
      </div>
      <div className="mt-6 w-40 m-auto">
        <UnderlineLink href="/information">Learn More</UnderlineLink>
      </div>
      <p className="pt-8 font-semibold">
        <em>
          * We offer Accredited training on Ultraflex products which provides
          you with extended guarantees{" "}
        </em>
      </p>
      <p className="pt-8 md:pt-2">
        Ultraflex instruction videos and information our Accredited training can
        be found{" "}
        <Link className="font-bold text-theme_yellow-900" href="/information">
          {" "}
          here
        </Link>
      </p>
    </div>
  )
}

export default FeaturedVideos
