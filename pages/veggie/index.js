import pizza_veggie from "../../public/pizza_veggie.jpg";
import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <Image
        src={pizza_veggie}
        alt="pizza veggie"
        width="2400"
        height="1596"
      ></Image>
      <h2>My Veggie Recipes</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </p>
    </>
  );
}
