import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProductSchema, loginSchema } from "../shared/schema"; // фикс
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication endpoints
  app.post("/api/auth/login", async (req, res) => {
    try {
      const validatedData = loginSchema.parse(req.body);
      const user = await storage.authenticateUser(validatedData.username, validatedData.password);
      
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      
      if (user.role !== "admin") {
        return res.status(403).json({ error: "Access denied" });
      }
      
      res.json({
        user: {
          id: user.id,
          username: user.username,
          role: user.role
        },
        success: true
      });
    } catch (error: any) {  // <-- фиксанул
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "Authentication failed" });
    }
  });

  // Get all products
  app.get("/api/products", async (_req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error: any) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Create product (admin functionality)
  app.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "Failed to create product" });
    }
  });

  // Update product (admin only)
  app.put("/api/products/:id", async (req, res) => {
    try {
      const validatedData = insertProductSchema.partial().parse(req.body);
      const product = await storage.updateProduct(req.params.id, validatedData);
      
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      
      res.json(product);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      res.status(500).json({ error: "Failed to update product" });
    }
  });

  // Delete product (admin only)
  app.delete("/api/products/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteProduct(req.params.id);
      
      if (!deleted) {
        return res.status(404).json({ error: "Product not found" });
      }
      
      res.json({ success: true, message: "Product deleted" });
    } catch (error: any) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
