import { lazy, Suspense,useState } from "react"
const Pending = lazy(() => import('../components/pages/jobQueue/Pending'))
const Accepted = lazy(() => import('../components/pages/jobQueue/Accepted'))
const Rejected = lazy(() => import('../components/pages/jobQueue/Rejected'))

export default function Resumes() {
    const [title, setTitle] = useState('Pending')
    const renderComponent = (name) => {
        switch (name) {
            case 'Pending':
                return <Suspense fallback={<div className="m-5 text-lg">
                    Loading...
                </div>}>
                    <Pending />
                </Suspense>
            case 'Accepted':
                return <Suspense fallback={<div className="m-5 text-lg">
                    Loading...
                </div>}>
                    <Accepted />
                </Suspense>
            case 'Rejected':
                return <Suspense fallback={<div className="m-5 text-lg">
                    Loading...
                </div>}>
                    <Rejected />
                </Suspense>
            default:
                return null
        }
    }


    const componentBtn = (name) => {
        setTitle(name)
    }

    return (
        <>
            <div className=" bg-white border-y-[2px] w-full border-gray-
      200 flex px-5 py-5 sticky top-[0px]">
                <div onClick={() => componentBtn('Pending')} className={`flex justify-center items-center mr-6 text-sm cursor-pointer ${title === 'Pending' ? 'border-b-[3px] border-blue-300 text-blue-400 font-semibold' : 'border-b-0'}`}>
                    Pending
                </div>
                <div onClick={() => componentBtn('Accepted')} className={`flex justify-center items-center mr-6 text-sm cursor-pointer ${title === 'Accepted' ? 'border-b-[3px] border-blue-300 text-blue-400 font-semibold' : 'border-b-0'}`} >
                    Accepted
                </div>
                <div onClick={() => componentBtn('Rejected')} className={`flex justify-center items-center mr-6 text-sm cursor-pointer ${title === 'Rejected' ? 'border-b-[3px] border-blue-300 text-blue-400 font-semibold' : 'border-b-0'}`} >
                    Rejected
                </div>
            </div>

            <div className="h-screen w-full flex flex-col p-7">
                <div>
                    <h1 className="text-lg font-semibold tracking-wide text-gray-700 ">{title}</h1>
                </div>
                <div className="my-5 h-[90%]">
                    {renderComponent(title)}
                </div>
            </div>
        </>
    )
}
