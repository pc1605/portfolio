import Image from "next/image";
import { ChevronRight, Link } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string; disabled?: boolean }[];
  images?: { src: string; alt: string }[];
}

const PROJECT_CONTENT: ProjectProps[] = [
  {
    title: "Endo App",
    description:
      "A digital health companion app designed to support individuals with endometriosis and adenomyosis. Features include symptom tracking, personalized guidance, learning modules, and pain management strategies. Contributed to bug fixes and feature enhancements for this scientifically-validated healthcare app with significant user impact.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Healthcare APIs",
      "iOS Development",
      "Android Development",
      "Digital Health",
    ],
    date: "2023",
    links: [
      {
        name: "Website",
        url: "https://endometriose.app/en/endo-app/",
      },
      {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=app.endometriose.prod&hl=en_IN",
      },
      {
        name: "App Store",
        url: "https://apps.apple.com/de/app/endo-app/id1551358800",
      },
    ],
    images: [
      {
        src: "/endo_banner.png",
        alt: "Endo App dashboard",
      },
      {
        src: "/endo_home.png",
        alt: "Endo App symptom tracking",
      },
    ],
  },
  {
    title: "Accelevents",
    description:
      "A comprehensive event management platform featuring two React Native applications: an Admin app for event organizers and an Attendee app for event participants. The platform supports in-person, virtual, and hybrid events with advanced features for registration, networking, and real-time engagement.",
    techStack: [
      "React Native CLI",
      "TypeScript",
      "GraphQL",
      "QR Code Scanning",
      "NFC Technology",
      "Stripe Payment Integration",
      "AWS AppSync",
      "Mux Video Player",
      "Real-time Chat",
      "Offline Support",
      "iOS Development",
      "Android Development",
    ],
    date: "2024 - Present",
    links: [
      {
        name: "App Store - Attendee",
        url: "https://apps.apple.com/us/app/accelevents/id1586582931",
      },
      {
        name: "App Store - Admin",
        url: "https://apps.apple.com/us/app/accelevents-admin/id1292678069",
      },
      {
        name: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.accelevents.accelevents&hl=en_US",
      },
      {
        name: "Website",
        url: "https://www.accelevents.com",
      },
    ],
    images: [
      {
        src: "/acceleventspage.jpg",
        alt: "Accelevents event management platform",
      },
      {
        src: "/acceleventspage3.png",
        alt: "Accelevents attendee app interface",
      },
    ],
  },
  {
    title: "Radio Rangrezz",
    description:
      "A modern, feature-rich music streaming mobile application built with React Native, delivering personalized audio experiences with dynamic content management and seamless playback capabilities. The app provides users with access to curated music collections, live radio streaming, artist profiles, events, and exclusive promotional offers with professional audio streaming, background playback, and lock screen controls.",
    techStack: [
      "React Native",
      "TypeScript",
      "Zustand",
      "React Query",
      "React Navigation",
      "Track Player",
      "Reanimated",
      "Google Sign-In",
      "Apple Authentication",
      "Axios",
      "MMKV Storage",
      "Bottom Sheet",
      "Fast Image",
      "NetInfo",
    ],
    date: "Aug 2025 - Present",
    links: [
      {
        name: "App Store (Coming Soon)",
        url: "",
        disabled: true,
      },
      {
        name: "Play Store (Coming Soon)",
        url: "",
        disabled: true,
      },
    ],
    images: [
      {
        src: "/radio_rangrezz_home.jpg",
        alt: "Radio Rangrezz home screen with albums, artists, and songs",
      },
      {
        src: "/radio_rangrezz_radio.jpg",
        alt: "Radio Rangrezz live radio streaming with RJ profiles",
      },
      {
        src: "/radio_rangrezz_4.jpg",
        alt: "Radio Rangrezz profile and settings screen",
      },
      {
        src: "/radio_rangrezz_5.jpg",
        alt: "Radio Rangrezz album details with track listing",
      },
    ],
  },
];



const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="mb-4 flex items-center gap-2 px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.disabled ? undefined : link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700 ${
                  link.disabled ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: "Healthcare App",
    title: "Endo App",
    src: "/endo_app.png",
    content: <ProjectContent project={{ title: "Endo App" }} />,
  },
  {
    category: "Event Management",
    title: "Accelevents",
    src: "/acceleventspreview.png",
    content: <ProjectContent project={{ title: "Accelevents" }} />,
  },
  {
    category: "Music Streaming App",
    title: "Radio Rangrezz",
    src: "/radio_rangrezz_logo.png",
    content: <ProjectContent project={{ title: "Radio Rangrezz" }} />,
  },
];
