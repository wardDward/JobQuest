import TipTap from "../components/TipTap";
import { useState } from 'react'
import { handleInputChanges } from "../utils/inputHelper";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../redux/actions/useJobs";
import DOMPurify from 'dompurify';
import { marked } from 'marked';


const MiniToast = () => {
    return (
        <div className="absolute top-[80px] right-2 bg-magenta-100 text-white z-[9999999999999] py-2 px-5 text-md font-medium tracking-wide rounded-md">
            Job Published
        </div>
    )
}

export default function CreatePost() {
    const dispatch = useDispatch()
    const { isLoading, errorMessage } = useSelector(state => state.jobs)
    const [showToast, setShowToast] = useState(false)
    const [editor, setEditor] = useState(null);
    const [content, setContent] = useState("");
    const [formData, setFormData] = useState({
        title: '',
        starting_salary: '',
        to_salary: '',
        position: '',
        location: '',
        employement: '',
    })

    const rawMarkup = marked(content, { sanitize: false });

    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);


    const handleSubmit = async (e) => {

        e.preventDefault()
        const response = await dispatch(createJob({ formData, description: sanitizedMarkup }))

        if (response.meta.requestStatus === 'fulfilled') {
            setContent('')
            setFormData({
                title: '',
                starting_salary: '',
                to_salary: '',
                position: '',
                location: '',
                employement: '',
            })
            editor.commands.clearContent();
            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }

        return;
    }


    return (
        <>
            {showToast &&
                <MiniToast />
            }
            <div className="p-7 border-b-[1px] border-gray-300">
                <h1 className="text-lg font-semibold tracking-wide text-gray-700 ">Create Job Post</h1>
            </div>
            <form className="p-7" onSubmit={handleSubmit}>
                <div className="mt-4 flex flex-col">
                    <h1 className="text-2xl font-semibold text-gray-700">Job Title</h1>
                    <input type="text" name="title" id="title" className="w-full border-b-[1px] border-gray-500 py-4 outline-none text-lg text-gray-800 font-semibold mt-3" value={formData.title} onChange={(e) => handleInputChanges(e, formData, setFormData)} />
                    {errorMessage?.title && <p className="text-red-500 text-sm">{errorMessage?.title[0]}*</p>}
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="mt-4 flex flex-col w-full md:w-[33%]">
                        <h1 className="text-lg font-semibold text-gray-700">Starting Salary</h1>
                        <input type="text" name="starting_salary" id="starting_salary" className="w-full  border-b-[1px] border-gray-500 py-4 outline-none text-lg text-gray-800 font-semibold" onChange={(e) => handleInputChanges(e, formData, setFormData)} value={formData.starting_salary} />
                        {errorMessage?.starting_salary && <p className="text-red-500 text-sm">{errorMessage?.starting_salary[0]}*</p>}
                    </div>
                    <div className="mt-5 mx-6 hidden md:block">
                        <h1 className="text-lg font-semibold text-gray-700">To</h1>
                    </div>
                    <div className="mt-4 flex flex-col ml-0 md:ml-10 w-full md:w-[33%]">
                        <h1 className="text-lg font-semibold text-gray-700 ">From Salary</h1>
                        <input type="text" name="to_salary" id="to_salary" className="w-full  border-b-[1px] border-gray-500 py-4 outline-none text-lg text-gray-800 font-semibold" onChange={(e) => handleInputChanges(e, formData, setFormData)} value={formData.to_salary} />
                        {errorMessage?.to_salary && <p className="text-red-500 text-sm">{errorMessage?.to_salary[0]}*</p>}
                    </div>
                </div>
                <div className="flex flex-wrap items-center my-5 justify-between">
                    <div className="w-full md:w-[32%]">
                        <h1 className="text-lg font-semibold text-gray-700">Position</h1>
                        <input type="text" name="position" id="position" className="w-full  border-b-[1px] border-gray-500 py-4 outline-none text-lg text-gray-800 font-semibold" onChange={(e) => handleInputChanges(e, formData, setFormData)} value={formData.position} />
                        {errorMessage?.position && <p className="text-red-500 text-sm">{errorMessage?.position[0]}*</p>}
                    </div>
                    <div className="w-full md:w-[33%]">
                        <h1 className="text-lg font-semibold text-gray-700">Location</h1>
                        <select name="employement" id="employement" className="w-full border-b-[1px] border-gray-500 py-4 outline-none text-lg text-gray-800 font-semibold" onChange={(e) => handleInputChanges(e, formData, setFormData)} value={formData.employement} >
                            <option disabled value='' selected>Type of employment</option>
                            <option value="Part time">Part time</option>
                            <option value="Full time">Full time</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                        {errorMessage?.employement && <p className="text-red-500 text-sm">{errorMessage?.employement[0]}*</p>}
                    </div>
                    <div className="w-full md:w-[33%]">
                        <h1 className="text-lg font-semibold text-gray-700">Location</h1>
                        <input type="text" name="location" id="location" className="w-full border-b-[1px] border-gray-500 py-4 outline-none text-lg text-gray-800 font-semibold" onChange={(e) => handleInputChanges(e, formData, setFormData)} value={formData.location} />
                        {errorMessage?.location && <p className="text-red-500 text-sm">{errorMessage?.location[0]}*</p>}
                    </div>
                </div>
                <div className="mt-9">
                    <TipTap
                        newContent={content}
                        setContent={setContent}
                        setEditor={setEditor}
                    />
                    {errorMessage?.description && <p className="text-red-500 text-sm">{errorMessage?.description[0]}*</p>}
                </div>
                <div className="flex items-end justify-end">
                    <button type="submit" disabled={isLoading} className={`text-white bg-current py-2 text-sm px-3 rounded-lg hover:bg-currentDarker ${isLoading ? 'cursor-not-allowed' : ''}`}>
                        <span className={`loading loading-dots loading-xs ${isLoading ? 'block' : 'hidden'}`}></span>
                        <span className={`${isLoading ? 'hidden' : 'block'}`}>Publish</span>
                    </button>
                </div>
            </form>
        </>

    )
}
