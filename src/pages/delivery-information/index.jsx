import React from "react"
import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head"

const DeliveryInfo = () => {
  return (
    <div>
      <Head
        title="Deliveries"
        description="Information about our delivery promise."
      />
      <div className="content-container py-14">
        <p className="text-2xl font-bold pb-14">Delivery Information</p>
        <p className="pb-4">
          We send via APC Overnight Couriers, Parcels are trackable via the APC
          website at www.apc-overnight.com
        </p>

        <p className="pb-4">
          We offer free shipping on all products over £50 to Mainland England,
          Wales and Scotland excluding Isles, Northern Ireland and Scottish
          Highlands.
        </p>
        <p className="pb-4">
          For quotes to Scottish Highlands, Any UK Islands, Northern Ireland and
          other non-mainland postcodes, please contact us.
        </p>
        <p className="pb-4">
          All Items must be signed for and inspected immediately. Any missing
          items or damage needs to be reported within a reasonable time frame of
          48 hours, so even if you are not installing your item straight-away,
          please thoroughly inspect the item upon delivery otherwise there is no
          practical way for us to determine whether it was damaged before
          receipt of your item & we will not be able to make a damage claim with
          our couriers or the manufacturer.
        </p>
        <p className="text-xl py-4 font-semibold">Collections</p>
        <p className="pb-4">You can collect items from our Warehouse.</p>
        <p className="pb-4">
          The item must be paid for when you collect the item via SumUp card
          terminal or Cash. You cannot pay for an item via the website or
          telephone without contacting us directly first. Please call us 1 hour
          prior to arriving to ensure we have enough time to get the item out,
          the item doesn&apos;t suddenly sell out and that we are open.
        </p>
      </div>
    </div>
  )
}

DeliveryInfo.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
export default DeliveryInfo
