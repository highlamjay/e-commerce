import Header from "@/components/layout/Header";
import TopHeader from "@/components/layout/TopHeader";

export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <TopHeader />
      <Header />
    </div>
  );
}
