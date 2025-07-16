import { FaceDetection } from "face-api.js";
import SongsCont from "./SongsCont";
import FaceDetector from "./FaceDetector";

const AppUi = () => {
  return (
    <div className="h-screen w-screen flex items-start justify-between">
      <FaceDetector />
      <SongsCont />
    </div>
  );
};

export default AppUi;
