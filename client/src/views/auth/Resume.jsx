import { useState } from "react";
import { Link } from "react-router-dom";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TouchAppIcon from '@mui/icons-material/TouchApp';
export default function Resume() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="">
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col">
            <NoteAddIcon sx={{ fontSize: 85 }} className="text-gray-500" />
            <Link to="#" className=""></Link>
          </div>
        </div>
      </div>
    </>
  );
}
