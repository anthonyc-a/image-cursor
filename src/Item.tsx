import React from "react";

interface Props {
  setCursorActive: any;
  setCurrentItem: any;
}

const data = [
  {
    name: "Viezh Robert",
    img: "https://ychef.files.bbci.co.uk/976x549/p0b8zt8y.jpg",
    location: "Socotra, Yemen",
  },
  {
    name: "Maya Robert",
    img: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Greece/Corfu/Porto-Timoni-corfu-beaches-xlarge.jpg?imwidth=640",
    location: "Corfu, Greece",
  },
  {
    name: "Kirk Robert",
    img: "https://www.wonderfulmarche.com/wp-content/uploads/2020/09/Fermo-Italy.jpg",
    location: "Fermo, Italy",
  },
];

const Item: React.FC<Props> = ({
  setCursorActive,
  setCurrentItem,
}: any): JSX.Element => {
  return (
    <>
      {data.map((item: any, i: any) => (
        <a
          href="/"
          className="item"
          onMouseEnter={() => {
            setCursorActive(true);
            setCurrentItem(item.img);
          }}
          onMouseLeave={() => {
            setCursorActive(false);
          }}
          key={i}
        >
          <h3>{item.location}</h3>
          <span>{item.name}</span>
          <p>See Location</p>
        </a>
      ))}
    </>
  );
};

export default Item;
