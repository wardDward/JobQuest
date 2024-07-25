
export default function Toast({ children, message , status }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[9999]"></div>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999999] bg-white w-[90%] md:w-[45%] lg:w-[25%] p-2 rounded-sm shadow-lg  border-t-[5px] flex items-center justify-center ${message === 'success' || status === 'success' ? 'border-lime-500' : 'border-red-500'}`}>{children}</div>
    </>
  )
}
