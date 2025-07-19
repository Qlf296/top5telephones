import ResponsiveImageTest from '@/components/ResponsiveImageTest';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ios-blue-50 to-white">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto">
          <ResponsiveImageTest />
        </div>
      </main>
      <Footer />
    </div>
  );
} 