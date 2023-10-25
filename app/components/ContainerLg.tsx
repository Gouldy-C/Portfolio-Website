import { ReactNode } from "react"

interface MaxWidthContainerProps {
  children: ReactNode;
}


function ContainerLg({ children } : MaxWidthContainerProps) {
  return (
    <div className="max-width-container mx-auto relative">
      {children}
    </div>
  )
}

export default ContainerLg