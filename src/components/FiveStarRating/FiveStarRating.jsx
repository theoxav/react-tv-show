import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export default function FiveStarRating({ rating }) {
  const starlist = [];

  const starFillCount = Math.floor(rating);
  const hashStarHalf = rating - starFillCount >= 0.5;
  const emptyStarCount = 5 - starFillCount - (hashStarHalf ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starlist.push(<StarFill key={"star-fill" + i} />);
  }

  if (hashStarHalf) {
    starlist.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 1; i <= emptyStarCount; i++) {
    starlist.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starlist}</div>;
}
