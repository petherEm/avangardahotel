"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TechItem {
  name: string;
  version: string;
  purpose: string;
  category:
    | "frontend"
    | "backend"
    | "full-stack"
    | "content"
    | "ai"
    | "analytics"
    | "other"
    | "hosting"
    | "storage";
}

export default function TechIntro() {
  const techStack: TechItem[] = [
    {
      name: "Next.js",
      version: "15",
      purpose: "React framework for production",
      category: "full-stack",
    },
    {
      name: "React",
      version: "19",
      purpose: "Framework",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      version: "3.4",
      purpose: "Utility-first CSS framework",
      category: "frontend",
    },
    {
      name: "Framer Motion",
      version: "11.0",
      purpose: "Animation library",
      category: "frontend",
    },
    {
      name: "Sanity.io",
      version: "3.0",
      purpose: "Headless CMS",
      category: "content",
    },
    {
      name: "OpenAI",
      version: "API v1",
      purpose: "AI integration",
      category: "ai",
    },
    {
      name: "Google Analytics",
      version: "GA4",
      purpose: "Website analytics",
      category: "analytics",
    },
    {
      name: "Vercel",
      version: "N/A",
      purpose: "Serverless hosting",
      category: "hosting",
    },
    {
      name: "Digital Ocean",
      version: "N/A",
      purpose: "Cloud storage",
      category: "storage",
    },
    {
      name: "Subpages",
      version: "12",
      purpose: "Total website sections",
      category: "other",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "full-stack":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
      case "backend":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "content":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "storage":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      case "hosting":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "ai":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "analytics":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-[#404042] lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg border shadow-sm"
          >
            <Table>
              <TableCaption>Technologies used in this project</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Technology</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Purpose
                  </TableHead>
                  <TableHead className="text-right">Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {techStack.map((tech, index) => (
                  <motion.tr
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <TableCell className="font-medium">{tech.name}</TableCell>
                    <TableCell>{tech.version}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {tech.purpose}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(tech.category)}`}
                      >
                        {tech.category}
                      </span>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
