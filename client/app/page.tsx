"use client";
import { useQuery } from "@apollo/client/react";

// const GET_BRANDS = gql`
//   query {
//     getBrands {
//       name
//       website
//     }
//   }
// `;

export default function Home() {
  // const {} = useQuery(GET_BRANDS);

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
        {/* LEFT: FILTERS */}
        <div className="bg-[#151922] p-6 rounded-2xl border border-[#262b36] h-fit">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-400 mb-2">Size</h3>
            <div className="space-y-2">
              {["50 ml", "100 ml", "150 ml"].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-500" />
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* CONCENTRATION */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-400 mb-2">Concentration</h3>
            <div className="space-y-2">
              {["Parfum", "Eau de Parfum", "Eau de Toilette"].map((c) => (
                <label key={c} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-500" />
                  {c}
                </label>
              ))}
            </div>
          </div>

          {/* BRAND */}
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Brand</h3>
            <select className="w-full p-2 rounded-xl bg-[#10141c] border border-[#262b36]">
              <option>All Brands</option>
              <option>Dior</option>
              <option>Chanel</option>
              <option>Tom Ford</option>
            </select>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="lg:col-span-3">
          {/* TOP: BRANDS CIRCLES */}
          <div className="flex gap-4 overflow-x-auto mb-6 pb-2">
            {["Dior", "Chanel", "Tom Ford", "YSL", "Armani"].map((brand) => (
              <div
                key={brand}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#151922] border border-[#262b36] flex items-center justify-center text-sm">
                  {brand[0]}
                </div>
                <span className="text-xs text-gray-400">{brand}</span>
              </div>
            ))}
          </div>

          {/* GRID: PERFUME CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-[#151922] rounded-2xl border border-[#262b36] p-4 hover:bg-[#1b2130] transition"
              >
                {/* IMAGE */}
                <div className="h-40 bg-[#10141c] rounded-xl mb-4 flex items-center justify-center text-gray-500">
                  Image
                </div>

                {/* INFO */}
                <h3 className="font-medium">Dior Sauvage</h3>
                <p className="text-sm text-gray-400">Dior</p>

                <p className="text-sm mt-2 text-gray-400">
                  100 ml • Eau de Parfum
                </p>

                <p className="mt-3 font-semibold text-blue-400">$120</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
