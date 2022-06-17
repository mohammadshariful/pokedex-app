import { PulseLoader } from "react-spinners";
const Loading = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-[20vh]">
      <div className="sweet-loading">
        <PulseLoader
          size={35}
          color={"#48DBBE"}
          loading={loading}
          speedMultiplier={1.2}
        />
      </div>
    </div>
  );
};

export default Loading;
