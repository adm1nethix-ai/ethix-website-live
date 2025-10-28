import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      console.log("New contact submission received:", {
        name: contactSubmission.name,
        email: contactSubmission.email,
        service: contactSubmission.serviceInterest,
      });

      res.json({ 
        success: true, 
        message: "Contact submission received successfully",
        id: contactSubmission.id 
      });
    } catch (error: any) {
      console.error("Contact submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Failed to process contact submission" 
      });
    }
  });

  app.get("/api/contact-submissions", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error: any) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
