import React from "react"

import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatios() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://picsum.photos/300/200"
          alt="Image"
          className="rounded-md object-cover"
          // width={300}
          // height={200}
          fill
        />
      </AspectRatio>
    </div>
  )
}
