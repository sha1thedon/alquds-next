import React from "react";

const dropdownItems = [
  {
    name: "One",
    slug: "one",
  },
  {
    name: "two",
    slug: "two",
  },
  {
    name: "three",
    slug: "three",
  },
  {
    name: "four",
    slug: "four",
  },
];

export default function Dropdown() {
  return (
    <ul className="absolute bg-white right-0 width-300">
      {dropdownItems.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
