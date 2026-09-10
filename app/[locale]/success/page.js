import { Suspense } from "react";
import SuccessClient from "./SuccessClient.js";

export default function SuccessPage() {
  return (
    <Suspense fallback={<SuccessLoading />}>
      {" "}
      <SuccessClient />{" "}
    </Suspense>
  );
}

function SuccessLoading() {
  return (
    <main>
      {" "}
      <p>Vérification de votre paiement...</p>{" "}
    </main>
  );
}
