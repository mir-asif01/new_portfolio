import { MdDesignServices } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { GrHostMaintenance } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";

export default function WhatIDo() {
  return (
    <section className="dark:bg-gray-900 py-10">
      <h1 className="text-center text-xl md:text-5xl mb-10">What I Do?</h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:px-10">
          <div className="flex flex-col justify-center items-center gap-2 w-2/3 mx-auto border border-sky-500 rounded-lg px-7 py-5 border-opacity-20 shadow-sm shadow-sky-400 ">
            <MdDesignServices className="size-16" />
            <h1 className="text-lg font-semibold">Prototyping</h1>
            <p className="text-md text-center">
              Initial planning and designing the prototypes of MVP product.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-2/3 mx-auto border border-sky-500 rounded-lg px-7 py-5 border-opacity-20 shadow-sm shadow-sky-400 ">
            <MdDeveloperMode className="size-16" />
            <h1 className="text-lg font-semibold">Development</h1>
            <p className="text-md text-center">
              Developing full fledged MVP projects to enlarge business online.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-2/3 mx-auto       border border-sky-500 rounded-lg px-7 py-5 border-opacity-20 shadow-sm shadow-sky-400 ">
            <GrDeploy className="size-16" />
            <h1 className="text-lg font-semibold">Delivary</h1>
            <p className="text-md text-center">
              Delevaring fast paced MVP products with maximum efficiency.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:px-10 gap-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 w-2/3 mx-auto       border border-sky-500 rounded-lg px-7 py-5 border-opacity-20 shadow-sm shadow-sky-400 ">
            <GrHostMaintenance className="size-16" />
            <h1 className="text-lg font-semibold">Maintenance</h1>
            <p className="text-md text-center">
              Maintain products that can scale and help business grow faster.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-2/3 mx-auto       border border-sky-500 rounded-lg px-7 py-5 border-opacity-20 shadow-sm shadow-sky-400 ">
            <MdOutlineContactSupport className="size-16" />
            <h1 className="text-lg font-semibold">Support</h1>
            <p className="text-md text-center">
              Lifetime support for any type of product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
