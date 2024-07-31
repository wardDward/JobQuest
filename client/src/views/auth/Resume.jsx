import { useEffect } from "react";
import { Link } from "react-router-dom";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useDispatch, useSelector } from "react-redux";
import { fetchResume } from "../../redux/actions/resumAction";


const DisplayResume = ({ isLoading, resume }) => {
  return (
    <div className="h-full w-full px-[30px] py-[40px]">
      {isLoading ? (<div className="h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-md"></span></div>) : (
        resume.map((item) => {
          const parsedAdditional = Array.isArray(item.additional) ? item.additional : JSON.parse(item.additional || [])
          const parsedSkills = Array.isArray(item.skills) ? item.skills : JSON.parse(item.skills || [])
          const parsedEducationalAttainment = Array.isArray(item.educational_attainment) ? item.educational_attainment : JSON.parse(item.educational_attainment || [])
          const parsedWorkExperience = Array.isArray(item.work_experience) ? item.work_experience : JSON.parse(item.work_experience || [])
          const parsedAwards = Array.isArray(item.awards) ? item.awards : JSON.parse(item.awards || [])
          return (
            <div key={item.id}>
              <div className="my-3">
                <h1 className="text-lg font-medium">Name</h1>
                <div className="flex items-center">
                  <p className="text-md my-2">
                    {`${item.user.firstname} ${item.user.middlename === null ? '' : item.user.middlename} ${item.user.lastname}`}
                  </p>
                </div>
              </div>
              <div className="my-3">
                <h1 className="text-lg font-medium">Contact</h1>
                <div className="flex items-center">
                  <p className="text-md my-2">
                    {item.contact}
                  </p>
                </div>
                {parsedAdditional.length > 0 ? (
                  <div className="my-3">
                    <h1 className="text-lg font-medium">Additional Contact</h1>
                    <p className="text-md my-2">
                      {item.parsedAdditional}
                    </p>
                  </div>
                ) : ''}
                {parsedSkills.length > 0 ? (
                  <div className="my-3">
                    <h1 className="text-lg font-medium">Skills</h1>
                    {parsedSkills.map((item, index) => (
                      <p className="text-md my-2" key={index}>
                        {item}
                      </p>
                    ))}

                  </div>
                ) : ''}
                {parsedEducationalAttainment.length > 0 ? (
                  <div className="my-3">
                    <h1 className="text-lg font-medium">Educational Attainment</h1>
                    {parsedEducationalAttainment.map((item, index) => (
                      <p className="text-md my-2" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                ) : ''}
                {parsedWorkExperience.length > 0 ? (
                  <div className="my-3">
                    <h1 className="text-lg font-medium">Experience</h1>
                    {parsedWorkExperience.map((item, index) => (
                      <p className="text-md my-2" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                ) : ''}
                {parsedAwards.length > 0 ? (
                  <div className="my-3">
                    <h1 className="text-lg font-medium">Awards</h1>
                    {parsedAwards.map((item, index) => (
                      <p className="text-md my-2" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                ) : ''}
              </div>
            </div>
          )
        })

      )}

    </div>
  )
}

export default function Resume() {
  const dispatch = useDispatch()
  const { isLoading, resume } = useSelector(state => state.resumes)

  useEffect(() => {
    const handleFetching = async () => {
      await dispatch(fetchResume())
    }
    handleFetching()
  }, [dispatch])


  return (
    <>
      <div className="">
        <div className="h-screen flex justify-center items-center">
          {resume.length === 0 ? (
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <NoteAddIcon sx={{ fontSize: 85 }} className="text-gray-500" />
              </div>
              <Link to="/create_resume" className="mt-2 text-gray-600 flex items-center hover:text-currentDarker hover:underline">
                <TouchAppIcon />
                <span className="text-sm ml-2">Create your resume here.</span>
              </Link>
            </div>
          ) : <DisplayResume isLoading={isLoading} resume={resume} />}
        </div>
      </div>
    </>
  );
}
