import { LoaderCircle } from "lucide-react";

export function Spinner({ size = 24 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <LoaderCircle
        className="animate-spin text-gray-500"
        size={size}
        strokeWidth={1.5}
      />
    </div>
  );
}
