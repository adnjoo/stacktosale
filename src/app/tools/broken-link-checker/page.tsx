// app/tools/broken-link-checker/page.tsx
import { Suspense } from "react";
import BrokenLinkCheckerClient from "@/components/BrokenLinkCheckerClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <BrokenLinkCheckerClient />
    </Suspense>
  );
}
