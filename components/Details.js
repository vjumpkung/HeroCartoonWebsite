import Inbox from "./inbox";
export default function Details() {
  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-wrap overflow-hidden content-center">
        <div className="w-full overflow-hidden">
          <p className="text-center">
            <Inbox />
          </p>
        </div>
      </div>
    </div>
  );
}
