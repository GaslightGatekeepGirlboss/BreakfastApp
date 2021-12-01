import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Breadcrumb from "../../components/Breadcrumb";

const MenuItem: NextPage = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const pageTitle = id?.charAt(0)?.toUpperCase() + id?.slice(1);

  return (
    <div className="bg-def">
      <Breadcrumb current={pageTitle} />
      <h1 className=""> {pageTitle} </h1>
      <main className="grid grid-cols-3"></main>
    </div>
  );
};

export default MenuItem;
