import About from "@/components/About"
import Member from "@/components/Member"
import PromotionLine from "@/components/PromotionLine"
import SecFooter from "@/components/SecFooter"


const Page = () => {
    return (
      <div>
          <About/>
          <PromotionLine />
          <div className='lg:block hidden'>
          <Member />
          </div>
          <SecFooter />
      </div>
    )
  }
  
  export default Page