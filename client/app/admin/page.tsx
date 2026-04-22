"use client";

import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CREATE_BRAND = gql`
  mutation CreateBrand($params: Args) {
    createBrand(params: $params) {
      id
      name
    }
  }
`;

function AdminPage() {
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
    </main>
  );
}

export default AdminPage;
