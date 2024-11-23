import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderCircle className="animate-spin rounded-full" size="100" />
    </div>
  );
};

export default Loading;
