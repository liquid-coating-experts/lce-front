import CustomerCare from "@modules/common/icons/customer-care"
import Delivery from "@modules/common/icons/delivery"
import SecurePayments from "@modules/common/icons/secure-payments"

const HeaderInfo = () => {
  return (
    <div className="bg-theme_blue-900">
      <div className="md:content-container flex justify-center gap-y-8 gap-2 py-6 md:p-2">
        <div className="flex items-center w-1/3 justify-center">
          <CustomerCare className="h-20 hidden sm:block" />
          <p className="text-theme_yellow-900  pl-3 text-xs md:text-base ">
            Knowledgable Staff
          </p>
        </div>

        <div className="flex items-center w-1/3 justify-center">
          <SecurePayments className="h-20 hidden sm:block" />
          <p className="text-theme_yellow-900 text-xs md:text-base pl-1 ">
            Secure Payments
          </p>
        </div>

        <div className="flex items-center w-1/3 md:px-5 px-1">
          <Delivery className="h-20 hidden sm:block" />
          <p className="text-theme_yellow-900 text-xs md:text-base md:pl-4 pl-2 mr-0 md:mr-4 w-full">
            Free Next Day Delivery on orders over £50
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderInfo
