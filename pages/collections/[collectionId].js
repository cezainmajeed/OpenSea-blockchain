import React from "react";
import { useRouter } from "next/router";

function Collection() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
    </div>
  );
}

export default Collection;
