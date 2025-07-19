"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ResponsiveImageTest() {
  const [currentImage, setCurrentImage] = useState(0);
  const testImages = [
    "/images/real/samsung-galaxy-a14/front.jpg",
    "/images/real/xiaomi-redmi-note-12/front.jpg",
    "/images/real/motorola-moto-g84/front.jpg",
  ];

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-bold text-center">Test d'affichage responsive</h2>
      
      {/* Test 1: Images avec aspect-ratio */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Test 1: Aspect ratio 4:3</h3>
        <div className="responsive-grid">
          {testImages.map((src, index) => (
            <div key={index} className="responsive-card">
              <div className="image-container mb-4">
                <Image
                  src={src}
                  alt={`Test image ${index + 1}`}
                  fill
                  className="image-optimized p-2 sm:p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <h4 className="font-medium text-gray-900">Image {index + 1}</h4>
              <p className="text-sm text-gray-600">Test d'affichage responsive</p>
            </div>
          ))}
        </div>
      </div>

      {/* Test 2: Zoom et navigation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Test 2: Navigation et zoom</h3>
        <div className="phone-viewer">
          <div className="phone-viewer-main">
            <Image
              src={testImages[currentImage]}
              alt={`Test image ${currentImage + 1}`}
              fill
              className="image-optimized"
              sizes="(max-width: 640px) 100vw, 300px"
            />
            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
              {currentImage + 1} / {testImages.length}
            </div>
          </div>
          
          <div className="phone-viewer-thumbnails">
            {testImages.map((src, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`phone-viewer-thumbnail ${
                  index === currentImage ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'
                }`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={50}
                  height={80}
                  className="image-optimized"
                  sizes="(max-width: 640px) 60px, 80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Test 3: Grille responsive */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Test 3: Grille responsive</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="responsive-card">
              <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Placeholder {index + 1}</span>
              </div>
              <h4 className="font-medium text-gray-900 text-sm">Item {index + 1}</h4>
              <p className="text-xs text-gray-600">Description courte</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Instructions de test :</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Redimensionnez la fenêtre pour tester la responsivité</li>
          <li>• Testez sur mobile avec les outils de développement</li>
          <li>• Vérifiez que les images ne débordent pas</li>
          <li>• Testez le zoom avec Ctrl+scroll</li>
          <li>• Vérifiez que les boutons restent cliquables</li>
        </ul>
      </div>
    </div>
  );
} 