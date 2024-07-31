import { lazy, Suspense, useState } from "react";
const Development = lazy(() => import("../components/pages/Development"))
const Production = lazy(() => import("../components/pages/Production"))


export default function Dashboard() {
  const [component, setComponent] = useState('Development')

  const renderComponent = (name) => {
    switch (name) {
      case 'Development':
        return <Suspense fallback={<div className="m-5 text-lg">
          Loading...
        </div>}>
          <Development />
        </Suspense>
      case 'Production':
        return <Suspense fallback={<div className="m-5 text-lg">
          Loading...
        </div>}>
          <Production />
        </Suspense>
      default:
        return null
    }
  }

  const componentBtn = name => {
    setComponent(name)
  }

  return (
    <>
      <div className=" bg-white border-y-[2px] w-full border-gray-
      200 flex px-5 py-5 sticky top-[0px] items-center justify-between">
        <div className="flex">
          <div className={`flex justify-center items-center ${component === "Development" ? 'border-b-[3px] border-blue-400 text-blue-400' : ''} mr-6 text-xs md:text-sm cursor-pointer`} onClick={() => componentBtn('Development')}>
            Development
          </div>
          <div className={`flex justify-center items-center ${component === "Production" ? 'border-b-[3px] border-blue-400 text-blue-400' : ''} mr-6 text-xs md:text-sm cursor-pointer`} onClick={() => componentBtn('Production')}>
            Production
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col">
        {renderComponent(component)}
      </div>
    </>

  )
}
