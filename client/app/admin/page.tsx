"use client";

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GET_BRANDS } from "../page";

const CREATE_BRAND = gql`
  mutation CreateBrand($params: Args) {
    createBrand(params: $params) {
      id
      name
    }
  }
`;

function AdminPage() {
  const { data: brands } = useQuery(GET_BRANDS);

  const [form, setForm] = useState({
    name: "",
    description: "",
    brandId: "",
    variants: [
      { size: 50, concentration: "EDT", price: 55 },
      { size: 100, concentration: "EDP", price: 105 },
      { size: 150, concentration: "PERFUME", price: 155 },
    ],
  });
  console.log(form);

  const createPerfumeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      variants: [...prev.variants],
    }));
  };

  const router = useRouter();
  const [createBrand] = useMutation(CREATE_BRAND, {
    onCompleted: () => {
      router.push("/");
    },
  });
  const [brand, setBrand] = useState("");

  const createBrandHandler = () => {
    createBrand({
      variables: {
        params: {
          name: brand,
        },
      },
    });
  };

  return (
    <main>
      <h1>Admin Page</h1>
      <div className="flex gap-3 items-center">
        <label htmlFor="">CREATE BRAND</label>
        <input
          onChange={(e) => setBrand(e.target.value)}
          type="text"
          placeholder="brand name..."
        />
        <button
          onClick={createBrandHandler}
          className="border-2 border-red-700 p-2"
        >
          Create Brand
        </button>
      </div>

      <main className="min-h-screen bg-[#0f1115] flex items-center justify-center p-6 text-gray-200">
        <section className="w-full max-w-xl rounded-2xl border border-[#262b36] bg-[#151922] p-6 shadow-xl">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-white">
              Create Perfume
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Add perfume basic information first.
            </p>
          </div>

          <form className="space-y-5">
            {/* Perfume Name */}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Perfume Name
              </label>

              <input
                onChange={createPerfumeHandler}
                name="name"
                type="text"
                placeholder="Example: Dior Sauvage"
                className="w-full rounded-xl border border-[#262b36] bg-[#10141c] px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-blue-500"
              />
            </div>

            {/* Description */}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Description
              </label>

              <textarea
                onChange={createPerfumeHandler}
                name="description"
                placeholder="Write perfume description..."
                rows={4}
                className="w-full resize-none rounded-xl border border-[#262b36] bg-[#10141c] px-4 py-3 text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-blue-500"
              />
            </div>

            {/* Brand */}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Brand
              </label>

              <select
                onClick={createPerfumeHandler}
                name="brandId"
                className="w-full rounded-xl border border-[#262b36] bg-[#10141c] px-4 py-3 text-sm text-gray-200 outline-none focus:border-blue-500"
              >
                <option value="">Select brand</option>
                {brands?.getBrands?.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Create Perfume
            </button>
          </form>
        </section>
      </main>
    </main>
  );
}

export default AdminPage;
