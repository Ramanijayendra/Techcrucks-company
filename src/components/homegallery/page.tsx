import placeimg from "/images/placeholder/300x300.svg";
import Hexagonhome from "@/components/hexagonhome/page";

export const Imagesgallery = [
  {
    id: 1,
    img: placeimg,
  },
  {
    id: 2,
    img: placeimg,
  },
  {
    id: 3,
    img: placeimg,
  },
  {
    id: 4,
    img: placeimg,
  },
  {
    id: 5,
    img: placeimg,
  },
  {
    id: 6,
    img: placeimg,
  },
  {
    id: 7,
    img: placeimg,
  },
  {
    id: 8,
    img: placeimg,
  },
  {
    id: 9,
    img: placeimg,
  },
  {
    id: 10,
    img: placeimg,
  },
  {
    id: 11,
    img: placeimg,
  },
  {
    id: 12,
    img: placeimg,
  },
  {
    id: 13,
    img: placeimg,
  },
  {
    id: 14,
    img: placeimg,
  },
];

function Page() {
  var current_list = 3;
  var first = 0;
  var last = 0;

  return (
    <>
      {Imagesgallery.map(() => {
        if (last > Imagesgallery.length - 1) {
          return;
        }
        first = last;

        last = first + current_list;
        current_list === 3 ? (current_list = 4) : (current_list = 3);

        return (
          <>
            <div className="flex flex-col gap-6 justify-center items-center mt-8 lg:my-[-40px] lg:flex-row">
              {Imagesgallery.slice(first, last).map((value) => {
                return (
                  <Hexagonhome id={value.id} img={value.img} key={value.id} />
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
}

export default Page;
