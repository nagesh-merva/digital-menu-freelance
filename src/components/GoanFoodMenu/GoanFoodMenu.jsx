/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CategoryTags from "./CategoryTags";
import MenuSection from "./MenuSection";

function GoanFoodMenu() {
  return (
    <main className="flex overflow-hidden flex-col px-6 pt-12 pb-44 mx-auto w-full tracking-tight max-w-[480px]">
      <Header />
      <h1 className="mt-4 text-lg font-bold text-red-900">
        <span className="text-black">Choose </span>
        <br />
        <span className="text-black">Your Favorite </span>Food
      </h1>
      <SearchBar />
      <CategoryTags />
      <h2 className="self-start mt-5 text-base font-bold text-black">Goan</h2>
      <hr className="shrink-0 h-px" />
      <div className="flex gap-5 justify-between mt-2.5">
        <MenuSection
          title="Starter"
          items={[
            "Chicken Tawa Fry",
            "Chicken Rawa Fry",
            "Prawns (Rawa Fry)",
            "KingFish Rawa Fry",
            "Kingfish Masala Fry",
            "Mackerel Rawa Fry",
            "Mackerel Masala Fry",
            "Mackerel Recheado",
            "Chonak Rawa Fry",
            "Chonak Masala Fry",
            "Silver Fish Rawa Fry",
            "Silver Fish Masala Fry",
            "Squid Chilly Fry",
            "Modso Rawa Fry",
            "Modso Masala Fry",
            "Chilly Chicken Fry",
            "Calamari Chilly Fry",
          ]}
        />
        <MenuSection
          title="Gravy"
          items={["Chicken Cafreal", "Chicken Xacuti"]}
        />
        <MenuSection title="Thali" items={["Fish Thali", "Veg Thali"]} />
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between items-start">
            <PriceList prices={["Rs 280", "Rs 270"]} />
            <MenuSection title="Rice" items={["Prawns Peas Pulav"]} />
            <PriceList prices={["Rs 270"]} />
          </div>
          <div className="flex gap-5 justify-between w-full">
            <div className="flex gap-5 justify-between">
              <PriceList prices={["Rs 270", "Rs 380"]} />
              <h3 className="text-sm font-medium text-red-900">Curry</h3>
            </div>
            <h3 className="self-start text-xs font-medium text-red-900">
              Price
            </h3>
          </div>
          <div className="flex gap-5 justify-between items-start text-xs text-black">
            <PriceList
              prices={[
                "Rs 380",
                "Rs 150",
                "Rs 170",
                "Rs 190",
                "Rs 380",
                "Rs 380",
                "Rs 170",
                "Rs 170",
                "Rs 280",
                "Rs 280",
                "Rs 340",
                "Rs 240",
                "Rs 280",
                "Rs 250",
                "Rs 240",
                "Rs 230",
                "Rs 180",
              ]}
            />
            <div className="leading-4">
              Prawns Curry
              <br />
              KingFish Curry
            </div>
            <PriceList prices={["Rs 270", "Rs 270"]} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default GoanFoodMenu;
