import { RotatingLines } from "react-loader-spinner";

const RoatingLine = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <RotatingLines
        visible={true}
        height={96}
        width={96}
        color='grey'
        strokeWidth='5'
        animationDuration='0.65'
        ariaLabel='rotating-lines-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
};

export default RoatingLine;
