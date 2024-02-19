import { Progress } from "@material-tailwind/react";
import Container from "./util/Container";

const Skeleton = ({ type }) => {
  if (type === "card") {
    return (
      <ul className="p-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-16">
        {[...Array(20)].map((_, i) => (
          <li key={i} className="relative animate-pulse">
            <div className="h-28 w-42 overflow-hidden rounded-lg bg-gray-300"></div>
            <p className="mt-4 h-4 w-1/2 rounded-lg bg-gray-600"></p>
            <p className="mt-4 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
          </li>
        ))}
      </ul>
    );
  } else if (type === "stat") {
    return (
      <Container>
        <div className="p-6  animate-pulse">
          <h1 className="text-2xl bg-gray-300 rounded-lg font-bold w-1/3 h-12"></h1>
          <li className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg w-full"></div>
            <ul className="flex flex-col gap-4 p-6">
              {[...Array(6)].map((_, i) => (
                <li key={i} className="relative animate-pulse">
                  <p className="mt-4 h-3 w-1/12 mb-2 rounded-lg bg-gray-600"></p>
                  <Progress />
                </li>
              ))}
            </ul>
          </li>
        </div>
      </Container>
    );
  } else {
    // Handle other types or provide a default skeleton
    return <div>Unsupported skeleton type</div>;
  }
};

export default Skeleton;
