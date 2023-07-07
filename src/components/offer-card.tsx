import { Yellowtail } from "next/font/google";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });
export default function OfferCard({
  src,
  title,
  color,
  subTitle,
}: {
  src: string;
  title?: string;
  subTitle?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[200px] w-[400px] rounded-lg flex items-center p-8"
    >
      <div className={`text-${color} w-1/2`}>
        <h5 className={`${yellowtail.className}`}>{subTitle}</h5>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
    </div>
  );
}
