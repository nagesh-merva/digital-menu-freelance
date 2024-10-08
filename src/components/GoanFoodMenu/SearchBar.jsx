/**
 * This code was generated by Builder.io.
 */
import React from "react";

function SearchBar() {
  return (
    <div className="flex gap-2.5 mt-5 text-xs text-center whitespace-nowrap text-neutral-400">
      <form className="flex flex-auto gap-3 self-start px-3 py-2.5 bg-white rounded-[50px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce52893a6a0c12690dc9c9941da24b422b818047ca0ed8f9f0a80fe9ea47648?apiKey=eb2769a799454c22a06552d614e601b9&&apiKey=eb2769a799454c22a06552d614e601b9"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          id="searchInput"
          type="text"
          placeholder="Search"
          className="flex-auto self-start bg-transparent"
        />
      </form>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c01b663772da1d03059d8663adc1b0b913e3e683f08497276ee1a1ac819502e8?apiKey=eb2769a799454c22a06552d614e601b9&&apiKey=eb2769a799454c22a06552d614e601b9"
        alt=""
        className="object-contain shrink-0 w-12 rounded-full aspect-square"
      />
    </div>
  );
}

export default SearchBar;
