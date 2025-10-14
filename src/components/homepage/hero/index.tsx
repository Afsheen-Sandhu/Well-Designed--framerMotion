import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <div className="hero-hover-area absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
      <h1 className="font-dahlia text-6xl md:text-8xl text-white mb-6 drop-shadow-lg">
        elevate your hoteling
      </h1>
      <p className="font-manrope font-light text-xl md:text-2xl text-white/90 mb-4 max-w-2xl">
      Transform your hotel or villa into a distinctive brand that captures hearts and minds
      </p>
      <Button variant="secondary" >
        Send Enquiry
      </Button>
      
    </div>
  )
}
