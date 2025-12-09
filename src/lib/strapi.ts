const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface Phone {
  id: number;
  attributes: {
    name: string;
    slug: string;
    brand: string;
    price: number;
    description: string;
    specifications: any;
    rating: number;
    pros: string[];
    cons: string[];
    category: 'budget' | 'mid-range' | 'premium';
    releaseDate: string;
    isActive: boolean;
    images: {
      data: Array<{
        id: number;
        attributes: {
          url: string;
          name: string;
          alternativeText?: string;
        };
      }>;
    };
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

class StrapiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = STRAPI_URL;
  }

  private async fetchAPI(endpoint: string): Promise<any> {
    const url = `${this.baseUrl}/api${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  }

  // Récupérer tous les téléphones
  async getPhones(): Promise<StrapiResponse<Phone[]>> {
    return this.fetchAPI('/phones?populate=*');
  }

  // Récupérer les téléphones actifs
  async getActivePhones(): Promise<StrapiResponse<Phone[]>> {
    return this.fetchAPI('/phones/active?populate=*');
  }

  // Récupérer les top 5 téléphones
  async getTop5Phones(): Promise<StrapiResponse<Phone[]>> {
    return this.fetchAPI('/phones/top5?populate=*');
  }

  // Récupérer par catégorie
  async getPhonesByCategory(category: string): Promise<StrapiResponse<Phone[]>> {
    return this.fetchAPI(`/phones/category/${category}?populate=*`);
  }

  // Récupérer un téléphone par slug
  async getPhoneBySlug(slug: string): Promise<StrapiResponse<Phone>> {
    return this.fetchAPI(`/phones?filters[slug][$eq]=${slug}&populate=*`);
  }

  // Récupérer l'image complète d'un téléphone
  getPhoneImageUrl(phone: Phone, size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string {
    if (!phone.attributes.images?.data?.length) {
      return '/images/placeholder.svg';
    }

    const image = phone.attributes.images.data[0];
    const baseUrl = this.baseUrl;
    const imageUrl = image.attributes.url;
    
    return `${baseUrl}${imageUrl}`;
  }
}

export const strapiService = new StrapiService(); 