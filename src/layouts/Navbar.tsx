import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Planets } from "../models/planet";

export default function Navbar() {
  const linkItemList: Planets[] = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  useEffect(() => {
    if (isMenuMobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "";
    }
  }, [isMenuMobileOpen]);

  const getColor = (planet: Planets): string => {
    switch (planet) {
      case "mercury":
        return "hover:border-mercury";
      case "earth":
        return "hover:border-earth";
      case "jupiter":
        return "hover:border-jupiter";
      case "mars":
        return "hover:border-mars";
      case "neptune":
        return "hover:border-neptune";
      case "saturn":
        return "hover:border-saturn";
      case "uranus":
        return "hover:border-uranus";
      case "venus":
        return "hover:border-venus";
      default:
        return "";
    }
  };

  const getBGColor = (planet: Planets): string => {
    switch (planet) {
      case "mercury":
        return "bg-mercury";
      case "earth":
        return "bg-earth";
      case "jupiter":
        return "bg-jupiter";
      case "mars":
        return "bg-mars";
      case "neptune":
        return "bg-neptune";
      case "saturn":
        return "bg-saturn";
      case "uranus":
        return "bg-uranus";
      case "venus":
        return "bg-venus";
      default:
        return "";
    }
  };

  return (
    <div
      className={
        "bg-transparent w-full flex lg:flex-row md:flex-col flex-row lg:items-stretch items-center justify-between text-white border-b border-[#979797] px-8 z-20" +
        (isMenuMobileOpen ? " bg-primary fixed" : "")
      }
    >
      <Link to="/">
        <h2 className="font-extralight my-5">THE PLANETS</h2>
      </Link>

      <div className="md:flex md:items-stretch hidden">
        {linkItemList.map((item) => (
          <Link
            className={`flex items-center lg:border-t-4 md:border-t-0 md:border-b-4 lg:border-b-0 ${getColor(
              item
            )} border-transparent`}
            to={`/${item}`}
            key={item}
          >
            <h3 className="font-extralight uppercase mx-4">{item}</h3>
          </Link>
        ))}
      </div>

      <div
        className="md:hidden block cursor-pointer"
        onClick={() => {
          setIsMenuMobileOpen(!isMenuMobileOpen);
        }}
      >
        {isMenuMobileOpen ? (
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
              <g fill="#979797" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          </div>
        ) : (
          <div>
            <svg
              className={isMenuMobileOpen ? "text-[#979797]" : "text-white"}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="17"
            >
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          </div>
        )}
      </div>

      {isMenuMobileOpen ? (
        <div className="fixed w-screen h-[calc(100vh-93px)] z-10 bottom-0 left-0 bg-primary pt-8 px-5">
          <ul>
            {linkItemList.map((item, index) => (
              <Link to={`/${item}`} key={item}>
                <li
                  className={
                    "grid grid-cols-5 py-4" +
                    (index + 1 === linkItemList.length
                      ? ""
                      : " border-b border-[#979797]")
                  }
                >
                  <div className="flex justify-start align-baseline">
                    <div
                      className={`rounded-full ${getBGColor(item)} h-5 w-5`}
                    ></div>
                  </div>
                  <div className="flex justify-start align-baseline col-span-3">
                    <h4 className="uppercase font-semibold text-[15px]">
                      {item}
                    </h4>
                  </div>
                  <div className="flex justify-end align-baseline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="8"
                    >
                      <path
                        fill="none"
                        stroke="#FFF"
                        opacity=".4"
                        d="M1 0l4 4-4 4"
                      />
                    </svg>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
