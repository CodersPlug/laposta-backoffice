import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KanbanBoard from "@/components/KanbanBoard";
import { PriceListUploader } from "@/components/PriceListUploader";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-20 pb-8">
        <div className="mb-8">
          <PriceListUploader />
        </div>
        <div className="overflow-x-auto">
          <KanbanBoard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;