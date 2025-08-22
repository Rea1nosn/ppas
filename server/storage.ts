import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User management
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  authenticateUser(username: string, password: string): Promise<User | null>;
  
  // Product management
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | null>;
  deleteProduct(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.initializeProducts();
    this.initializeAdmin();
  }

  private initializeAdmin() {
    // Create admin user with credentials yyahiio / EHL9xLOGLR2wl
    const adminUser: User = {
      id: "admin-1",
      username: "yyahiio", 
      password: "EHL9xLOGLR2wl", // In production, this should be hashed
      role: "admin"
    };
    this.users.set(adminUser.id, adminUser);
  }

  private initializeProducts() {
    const initialProducts: Product[] = [
      {
        id: "1",
        name: "Marlboro Gold",
        price: 3600, // 36 шекелей в агурот (cents)
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Премиальные сигареты Marlboro Gold с мягким вкусом и низким содержанием смол. 20 сигарет в пачке.",
        features: ["20 сигарет", "Мягкий вкус", "Низкие смолы", "Фильтр", "Оригинальная пачка"],
        category: "cigarettes"
      },
      {
        id: "2",
        name: "Parliament Aqua Blue",
        price: 3800, // 38 шекелей в агурот
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Элитные сигареты Parliament с уникальным рецессированным фильтром и освежающим ментоловым вкусом.",
        features: ["20 сигарет", "Рецессированный фильтр", "Ментоловый вкус", "Премиум качество", "Элитный бренд"],
        category: "cigarettes"
      },
      {
        id: "3",
        name: "IQOS ILUMA",
        price: 24900, // 249 шекелей в агурот
        image: "https://images.unsplash.com/photo-1544467670-43b85cd9c7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Инновационная система нагревания табака IQOS ILUMA с технологией Smartcore Induction.",
        features: ["Нагревание табака", "Без горения", "Умные стики TEREA", "Быстрая зарядка", "Премиум дизайн"],
        category: "heated-tobacco"
      },
      {
        id: "4",
        name: "JUUL Starter Kit",
        price: 18900, // 189 шекелей в агурот
        image: "https://images.unsplash.com/photo-1628191011227-9b5b52ab30c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Компактная электронная сигарета JUUL с под-системой и зарядным устройством.",
        features: ["Под-система", "5% никотин", "Компактный дизайн", "Зарядное устройство", "4 картриджа в комплекте"],
        category: "e-cigarettes"
      },
      {
        id: "5",
        name: "Vuse ePod 2",
        price: 12900, // 129 шекелей в агурот
        image: "https://images.unsplash.com/photo-1607040837529-7e85e4e13ff8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Стильная электронная сигарета Vuse ePod 2 с магнитными картриджами и быстрой зарядкой.",
        features: ["Магнитные поды", "5 вкусов", "Быстрая зарядка", "Индикатор заряда", "Эргономичный дизайн"],
        category: "e-cigarettes"
      },
      {
        id: "6",
        name: "Disposable Vape HQD",
        price: 8900, // 89 шекелей в агурот
        image: "https://images.unsplash.com/photo-1587662340086-95b7b8bf9853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Одноразовая электронная сигарета HQD с 600 затяжками и фруктовыми вкусами.",
        features: ["600 затяжек", "Фруктовые вкусы", "Без зарядки", "Компактная", "5% никотин"],
        category: "disposable"
      }
    ];

    initialProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id, role: insertUser.role || 'user' };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      features: insertProduct.features || []
    };
    this.products.set(id, product);
    return product;
  }

  async authenticateUser(username: string, password: string): Promise<User | null> {
    const user = Array.from(this.users.values()).find(
      (user) => user.username === username && user.password === password
    );
    return user || null;
  }

  async updateProduct(id: string, updates: Partial<InsertProduct>): Promise<Product | null> {
    const existingProduct = this.products.get(id);
    if (!existingProduct) {
      return null;
    }
    
    const updatedProduct: Product = {
      ...existingProduct,
      ...updates,
      id, // Ensure ID doesn't change
      features: updates.features || existingProduct.features
    };
    
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }
}

export const storage = new MemStorage();
