import Hexagonhome from "@/components/hexagonhome/page";

export const Imagesgallery = [
  {
    id: 1,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 2,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 3,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 4,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 5,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 6,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 7,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 8,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 9,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 10,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 11,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 12,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 13,
    img:"/images/placeholder/300x300.svg",
  },
  {
    id: 14,
    img:"/images/placeholder/300x300.svg",
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
                  <Hexagonhome id={value.id} img={value.img} key={value.id}  />
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
