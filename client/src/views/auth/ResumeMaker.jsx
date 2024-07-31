import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import { createResume } from '../../redux/actions/resumAction';
import { handleInputChanges } from '../../utils/inputHelper.js';
import { useNavigate } from 'react-router-dom';

export default function ResumeMaker() {
    const { users } = useSelector(state => state.users);
    const { isLoading, errorMessage } = useSelector(state => state.resumes);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        biography: '',
        contact: '',
    });

    const [skills, setSkills] = useState([]);
    const [additional, setAdditional] = useState([]);
    const [educationalAttainment, setEducationalAttainment] = useState([]);
    const [workExperience, setWorkExperience] = useState([]);
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        const hasUnsavedChanges = () => {
            return (
                formData.biography || formData.contact ||
                skills.length > 0 ||
                additional.length > 0 ||
                educationalAttainment.length > 0 ||
                workExperience.length > 0 ||
                awards.length > 0
            );
        };

        const handleBeforeUnload = (event) => {
            if (hasUnsavedChanges()) {
                const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
                event.returnValue = confirmationMessage; // Standard for most browsers
                return confirmationMessage; // For some older browsers
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [formData, skills, additional, educationalAttainment, workExperience, awards]);

    const handleAddField = (fieldType) => {
        const newField = { id: uuidv4(), value: '' };
        switch (fieldType) {
            case 'skills':
                setSkills([...skills, newField]);
                break;
            case 'additional':
                setAdditional([...additional, newField]);
                break;
            case 'educationalAttainment':
                setEducationalAttainment([...educationalAttainment, newField]);
                break;
            case 'workExperience':
                setWorkExperience([...workExperience, newField]);
                break;
            case 'awards':
                setAwards([...awards, newField]);
                break;
            default:
                break;
        }
    };

    const handleInputChange = (e, fieldType, id) => {
        const newValue = e.target.value;
        switch (fieldType) {
            case 'skills':
                setSkills(skills.map(skill => skill.id === id ? { ...skill, value: newValue } : skill));
                break;
            case 'additional':
                setAdditional(additional.map(add => add.id === id ? { ...add, value: newValue } : add));
                break;
            case 'educationalAttainment':
                setEducationalAttainment(educationalAttainment.map(educ => educ.id === id ? { ...educ, value: newValue } : educ));
                break;
            case 'workExperience':
                setWorkExperience(workExperience.map(work => work.id === id ? { ...work, value: newValue } : work));
                break;
            case 'awards':
                setAwards(awards.map(award => award.id === id ? { ...award, value: newValue } : award));
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSubmit = {
            contact: formData.contact,
            biography: formData.biography,
            additional: additional.map(item => item.value),
            skills: skills.map(item => item.value),
            educationalAttainment: educationalAttainment.map(item => item.value),
            workExperience: workExperience.map(item => item.value),
            awards: awards.map(item => item.value),
        };

        const response = await dispatch(createResume(formDataToSubmit));
        if (response.meta.requestStatus === 'fulfilled') {
            navigate('/resume')
        }
    };

    return (
        <div className="p-[20px]">
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    {/* Personal Information */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Create your resume</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">This information will be seen by the employer only.</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <h1 className="block text-sm font-medium leading-6 text-gray-900">Personal Information</h1>
                                <div className="flex items-center justify-around">
                                    <div className="w-[33.333333%]">
                                        <h1 className="block text-sm font-medium leading-6 text-gray-900">Firstname</h1>
                                        <h1 className="block text-sm font-medium leading-6 text-gray-900">{users?.firstname}</h1>
                                    </div>
                                    <div className="w-[33.333333%]">
                                        <h1 className="block text-sm font-medium leading-6 text-gray-900">Middlename</h1>
                                        <h1 className="block text-sm font-bold leading-6 text-gray-900">{users?.middlename == null ? 'N/A' : users?.middlename}</h1>
                                    </div>
                                    <div className="w-[33.333333%]">
                                        <h1 className="block text-sm font-medium leading-6 text-gray-900">Lastname</h1>
                                        <h1 className="block text-sm font-bold leading-6 text-gray-900">{users?.lastname}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About Me (Optional but preferable)</label>
                                <div className="mt-2">
                                    <textarea
                                        id="biography"
                                        name="biography"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                        defaultValue={""}
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Contact Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 relative">
                            <div className="sm:col-span-3">
                                <div className="block text-sm font-medium leading-6 text-gray-900">
                                    <span>Contact Number</span>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="contact"
                                        name="contact"
                                        type="number"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                        maxLength="11"
                                        onChange={(e) => handleInputChanges(e, formData, setFormData)}
                                    />
                                    {errorMessage.contact && <p className='text-red-500 text-sm'>{errorMessage.contact}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills and other sections */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Skills and other sections</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Add details about your skills and other sections.</p>

                        {['skills', 'additional', 'educationalAttainment', 'workExperience', 'awards'].map(fieldType => (
                            <div key={fieldType} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label className="block text-sm font-medium leading-6 text-gray-900 capitalize">{fieldType.replace(/([A-Z])/g, ' $1')}</label>
                                    {fieldType === 'skills' ? (
                                        skills.map((field) => (
                                            <div key={field.id} className="mt-2">
                                                <input
                                                    type="text"
                                                    value={field.value}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                                    onChange={(e) => handleInputChange(e, 'skills', field.id)}
                                                />
                                            </div>
                                        ))
                                    ) : fieldType === 'additional' ? (
                                        additional.map((field) => (
                                            <div key={field.id} className="mt-2">
                                                <input
                                                    type="text"
                                                    value={field.value}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                                    onChange={(e) => handleInputChange(e, 'additional', field.id)}
                                                />
                                            </div>
                                        ))
                                    ) : fieldType === 'educationalAttainment' ? (
                                        educationalAttainment.map((field) => (
                                            <div key={field.id} className="mt-2">
                                                <input
                                                    type="text"
                                                    value={field.value}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                                    onChange={(e) => handleInputChange(e, 'educationalAttainment', field.id)}
                                                />
                                            </div>
                                        ))
                                    ) : fieldType === 'workExperience' ? (
                                        workExperience.map((field) => (
                                            <div key={field.id} className="mt-2">
                                                <input
                                                    type="text"
                                                    value={field.value}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                                    onChange={(e) => handleInputChange(e, 'workExperience', field.id)}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        awards.map((field) => (
                                            <div key={field.id} className="mt-2">
                                                <input
                                                    type="text"
                                                    value={field.value}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                                    onChange={(e) => handleInputChange(e, 'awards', field.id)}
                                                />
                                            </div>
                                        ))
                                    )}
                                    <div className="mt-2">
                                        <button type="button" className="flex items-center text-indigo-600 hover:text-indigo-900" onClick={() => handleAddField(fieldType)}>
                                            <AddIcon />
                                            <span>Add {fieldType.replace(/([A-Z])/g, ' $1')}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}
