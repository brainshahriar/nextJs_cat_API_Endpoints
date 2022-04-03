import { useRouter } from "next/router";
import React from "react";

export const Jumbotron = () => {
  const router = useRouter();
  return (
    <div class="jumbotron jumbotron-fluid mt-5">
      <div class="container">
        <h1 class="display-4">Cats World</h1>
        <p class="lead">
            Find Your New Best Friend
        </p>
        <button type="button" class="btn btn-primary" onClick={()=>router.push("/cats")}>Start Looking</button>
      </div>
    </div>
  );
};
