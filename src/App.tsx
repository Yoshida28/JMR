import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustMarquee } from './components/TrustMarquee';
import { VisualCollageSection } from './components/VisualCollageSection';
import { ManifestoSection } from './components/ManifestoSection';
import { BrandOsSection } from './components/BrandOsSection';
import { LumioStudioSection } from './components/LumioStudioSection';
import { TeamUseCasesSection } from './components/TeamUseCasesSection';
import { TestimonialSection } from './components/TestimonialSection';
import { LatestUpdatesSection } from './components/LatestUpdatesSection';
import { ProductRoadmapSection } from './components/ProductRoadmapSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ArticleModal } from './components/ArticleModal';
import { FileDetailModal } from './components/FileDetailModal';
import { UseCaseModal } from './components/UseCaseModal';
import { ArticleUpdate, BrandFile, TeamUseCase } from './types';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleUpdate | null>(null);
  const [selectedFile, setSelectedFile] = useState<BrandFile | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<TeamUseCase | null>(null);

  const scrollToStudio = () => {
    const el = document.getElementById('lumio-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111] selection:bg-[#111111] selection:text-white flex flex-col antialiased">
      {/* Floating Header */}
      <Header
        onBookDemo={() => setDemoModalOpen(true)}
        onGetStarted={() => setDemoModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onBookDemo={() => setDemoModalOpen(true)}
          onExploreStudio={scrollToStudio}
        />

        {/* 2. Trust Marquee */}
        <TrustMarquee />

        {/* 3. Floating Visual Collage */}
        <VisualCollageSection />

        {/* 4. Manifesto Section */}
        <ManifestoSection />

        {/* 5. Brand OS Section */}
        <BrandOsSection
          onSelectFile={(file) => setSelectedFile(file)}
        />

        {/* 6. Lumio Studio Interactive Section */}
        <LumioStudioSection />

        {/* 7. Team Use Cases */}
        <TeamUseCasesSection
          onSelectCase={(useCase) => setSelectedUseCase(useCase)}
        />

        {/* 8. Testimonial Section */}
        <TestimonialSection />

        {/* 9. Latest Updates Section */}
        <LatestUpdatesSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 10. Call to Action Section */}
        <CtaSection
          onScheduleCall={() => setDemoModalOpen(true)}
          onGetStarted={() => setDemoModalOpen(true)}
        />

        {/* 11. Product Roadmap Section */}
        <ProductRoadmapSection
          onBookDemo={() => setDemoModalOpen(true)}
        />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <FileDetailModal
        file={selectedFile}
        onClose={() => setSelectedFile(null)}
      />

      <UseCaseModal
        useCase={selectedUseCase}
        onClose={() => setSelectedUseCase(null)}
        onBookDemo={() => setDemoModalOpen(true)}
      />
    </div>
  );
}
