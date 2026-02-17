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
        price: "₹8,500",
        image: amberGold,
        description: "A liquid gold elixir that captures the warmth of a setting sun over the Arabian desert.",
        notes: { top: "Saffron, Cinnamon", middle: "Rose, Patchouli", base: "Amber, Vanilla" }
    },
    {
        id: 2,
        name: "Royal Oud",
        category: "Woody",
        price: "₹12,400",
        image: royalOud,
        description: "The ultimate expression of nobility, featuring the most precious agarwood in existence.",
        notes: { top: "Pink Pepper, Bergamot", middle: "Cedar, Angelica Root", base: "Agarwood (Oud), Musk" }
    },
    {
        id: 3,
        name: "Rose Petal",
        category: "Floral",
        price: "₹6,200",
        image: rosePetal,
        description: "Freshly cut morning roses, still glistening with dew, bottled for eternal freshness.",
        notes: { top: "Blackcurrant, Tangerine", middle: "Centifolia Rose, Magnolia", base: "White Wood, Musk" }
    },
    {
        id: 4,
        name: "Citrus Zest",
        category: "Fresh",
        price: "₹5,800",
        image: citrusZest,
        description: "An explosion of Mediterranean vitality, bringing the joy of a summer breeze to your skin.",
        notes: { top: "Lemon, Lime", middle: "Mint, Basil", base: "Vetiver, Oakmoss" }
    },
    {
        id: 5,
        name: "Midnight Rose",
        category: "Floral",
        price: "₹11,600",
        image: midnightRose,
        description: "A velvety blend of Bulgarian rose and dark amber, perfect for long nocturnal adventures.",
        notes: { top: "Raspberry, Geranium", middle: "Bulgarian Rose, Peony", base: "Amber, Cedar" }
    },
    {
        id: 6,
        name: "Mystic Oud",
        category: "Woody",
        price: "₹15,200",
        image: mysticOud,
        description: "Rich agarwood paired with smoke and leather notes, evoking ancient rituals.",
        notes: { top: "Cardamom, Nutmeg", middle: "Oud, Leather", base: "Incense, Sandalwood" }
    },
    {
        id: 7,
        name: "Citrus Verbena",
        category: "Fresh",
        price: "₹9,800",
        image: citrusVerbena,
        description: "Sparkling lemon zest with fresh basil and cedar for a sophisticated daytime wear.",
        notes: { top: "Verbena, Lemon", middle: "Basil, Jasmine", base: "Cedar, Amber" }
    }
];

export const getProductById = (id: number) => products.find(p => p.id === id);
