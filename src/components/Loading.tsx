
import { Skeleton } from 'antd';


const Loading = ({
    className = '',
    ...props
  }) => {
    return (
        <div>
             <div className={`flex justify-center items-center w-full ${className}`}>
      <Skeleton
        avatar
        paragraph={{ rows: 4 }}
        {...props}
      />
    </div>
        </div>
    );
};

export default Loading;