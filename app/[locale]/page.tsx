import Hero from '@/components/app/home/hero/hero';
import NavSection from '@/components/app/home/nav-section/nav-section';
import HomePageLayout from '@/components/home-page-layout';

export default function IndexPage() {
  return (
    <HomePageLayout>
      <Hero />
      <NavSection />
    </HomePageLayout>
  );
}
