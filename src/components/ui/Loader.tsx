
export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-10 h-10">
        <div className="absolute w-full h-full border-4 border-t-purple-light border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute w-full h-full border-4 border-t-transparent border-r-purple-light border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDelay: "-0.3s" }}></div>
      </div>
    </div>
  );
}
