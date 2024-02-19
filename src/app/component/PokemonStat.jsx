import { Progress } from "@material-tailwind/react";
import { statColor } from "./util/TypeColor";
import { ProgressLabelOutside } from "./Progress";

const PokemonStat = (stats) => {
  const statsArray = stats && stats.stats;

  if (!Array.isArray(statsArray)) {
    return <p>No stats available</p>;
  }
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="font-bold text-2xl">Stats</h1>
        {statsArray.map((stat, index) => (
          <>
            <ProgressLabelOutside
              key={index}
              name={stat.stat.name}
              value={stat.base_stat}
            ></ProgressLabelOutside>
          </>
        ))}
      </div>
    </>
  );
};
export default PokemonStat;
