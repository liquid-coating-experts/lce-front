import React from "react"
import YoutubeEmbed from "./youtube-player"

const TrainingVideos = () => {
  const YOUTUBE_VIDEOS = [
    { title: "Official Ultra-Flex Promo", embed: "NAmUzvOb9Eo" },
    { title: "Official Ultra-Top Video", embed: "N_2-gNstdTo" },
    { title: "Official Ultra-Flex Application Video", embed: "tzJw65mmk3I" },
    { title: "Official Ultra-Flex Trims Video", embed: "LbZlyoJe99A" },
    {
      title: "Official Ultra-Flex Multi Purpose Sealant Video",
      embed: "gNQyKj1cc4s",
    },

    { title: "Aquapol Emergency Repair: Your Quick Fix", embed: "7CR2T54bBeo" },
    { title: "Promo", embed: "9uhmkDEac_8" },
    { title: "Corner", embed: "N26ut5OdCZw" },
    { title: "Finished corner", embed: "2cEA2wkLw6k" },
    { title: "Patch in a corner", embed: "iPbxTJVOsNk" },
    { title: "Eliminate ripples on matting", embed: "Tn4CIxqRJmQ" },
    { title: "Joint matting", embed: "jpGsYoWPlJg" },
    { title: "Joints on a matting 2", embed: "TIEhrlUbeg4" },
    { title: "Matting on flat", embed: "Vm8CweWWAEg" },
    { title: "Matting on straight", embed: "tWgG8FUoejY" },
    { title: "Pipe", embed: "g3ulASta5iQ" },
    { title: "Tixal Mix", embed: "H7s2_LJ_6V8" },
    { title: "Tixal Mix 2", embed: "nO0aeIlXHOY" },
    { title: "Tixal Mix 3", embed: "b2NjCut8fbQ" },
  ]

  return (
    <div className="content-container my-10">
      <p className="text-2xl font-bold pb-8">Ultraflex - Instruction Videos</p>
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
    </div>
  )
}

export default TrainingVideos
