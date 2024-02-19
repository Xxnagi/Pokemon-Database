import { Progress, Typography } from "@material-tailwind/react";
import { statColor } from "./util/TypeColor";

export function ProgressLabelOutside({ name, value }) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <Typography color="blue-gray" variant="h6">
          {value}
        </Typography>
      </div>
      <Progress color={statColor(name)} value={value} className="mb-4" />
    </div>
  );
}
