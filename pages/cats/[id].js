import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from 'next/head'
import DefaultLayout from "../../layout/Default";

export default function Cat() {
  const [cat, setCat] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    setCat(data);
  };
  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <div>
      <DefaultLayout>
        {cat && (
          <>
            <Head>
              <title>{cat.name}</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mt-5" style={{ display: "flex" }}>
              <img src={cat.image.url} alt={cat.image.alt} />
              <div className="mx-5">
                <h1>{cat.name}</h1>
                <p>{cat.description}</p>
              </div>
            </div>
          </>
        )}
      </DefaultLayout>
    </div>
  );
}