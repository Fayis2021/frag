import amberGold from '../assets/images/amber_gold.png';
import royalOud from '../assets/images/royal_oud.png';
import rosePetal from '../assets/images/rose_petal.png';
import citrusZest from '../assets/images/citrus_zest.png';
import midnightRose from '../assets/images/midnight_rose.png';
import mysticOud from '../assets/images/mystic_oud.png';
import citrusVerbena from '../assets/images/citrus_verbena.png';

export interface Product {
    id: number;
    name: string;
    category: string;
    gender: 'male' | 'female' | 'unisex';
    price: string;
    description: string;
    image: string;
    images?: string[];
    notes?: {
        top: string;
        middle: string;
        base: string;
    };
    details?: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Amber Gold",
        category: "Oriental",
        gender: "unisex",
        price: "₹8,500",
        image: amberGold,
        description: "A liquid gold elixir that captures the warmth of a setting sun over the Arabian desert.",
        notes: { top: "Saffron, Cinnamon", middle: "Rose, Patchouli", base: "Amber, Vanilla" }
    },
    {
        id: 2,
        name: "Royal Oud",
        category: "Woody",
        gender: "male",
        price: "₹12,400",
        image: royalOud,
        description: "The ultimate expression of nobility, featuring the most precious agarwood in existence.",
        notes: { top: "Pink Pepper, Bergamot", middle: "Cedar, Angelica Root", base: "Agarwood (Oud), Musk" }
    },
    {
        id: 3,
        name: "Rose Petal",
        category: "Floral",
        gender: "female",
        price: "₹6,200",
        image: rosePetal,
        description: "Freshly cut morning roses, still glistening with dew, bottled for eternal freshness.",
        notes: { top: "Blackcurrant, Tangerine", middle: "Centifolia Rose, Magnolia", base: "White Wood, Musk" }
    },
    {
        id: 4,
        name: "Citrus Zest",
        category: "Fresh",
        gender: "unisex",
        price: "₹5,800",
        image: citrusZest,
        description: "An explosion of Mediterranean vitality, bringing the joy of a summer breeze to your skin.",
        notes: { top: "Lemon, Lime", middle: "Mint, Basil", base: "Vetiver, Oakmoss" }
    },
    {
        id: 5,
        name: "Midnight Rose",
        category: "Floral",
        gender: "female",
        price: "₹11,600",
        image: midnightRose,
        description: "A velvety blend of Bulgarian rose and dark amber, perfect for long nocturnal adventures.",
        notes: { top: "Raspberry, Geranium", middle: "Bulgarian Rose, Peony", base: "Amber, Cedar" }
    },
    {
        id: 6,
        name: "Mystic Oud",
        category: "Woody",
        gender: "male",
        price: "₹15,200",
        image: mysticOud,
        description: "Rich agarwood paired with smoke and leather notes, evoking ancient rituals.",
        notes: { top: "Cardamom, Nutmeg", middle: "Oud, Leather", base: "Incense, Sandalwood" }
    },
    {
        id: 7,
        name: "Citrus Verbena",
        category: "Fresh",
        gender: "unisex",
        price: "₹9,800",
        image: citrusVerbena,
        description: "Sparkling lemon zest with fresh basil and cedar for a sophisticated daytime wear.",
        notes: { top: "Verbena, Lemon", middle: "Basil, Jasmine", base: "Cedar, Amber" }
    },
    {
        id: 8,
        name: "Noir Leather",
        category: "Leather",
        gender: "male",
        price: "₹13,800",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A bold, masculine fragrance with deep leather accords and smoky spices.",
        notes: { top: "Cardamom", middle: "Jasmine Sambac, Leather", base: "Patchouli, Amber, Moss" }
    },
    {
        id: 9,
        name: "Velvet Jasmine",
        category: "Floral",
        gender: "female",
        price: "₹10,500",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "An intoxicating bouquet of night-blooming jasmine and creamy tuberose.",
        notes: { top: "Green Notes, Gardenia", middle: "Jasmine, Almond", base: "Tonka Bean, Liquorice" }
    },
    {
        id: 10,
        name: "Santal Royal",
        category: "Woody",
        gender: "unisex",
        price: "₹16,700",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A mysterious and majestic sandalwood fragrance with oriental spicy accents.",
        notes: { top: "Neroli, Jasmine", middle: "Peach, Rose, Cinnamon", base: "Sandalwood, Leather, Musk" }
    }
];

export const getProductById = (id: number) => products.find(p => p.id === id);
