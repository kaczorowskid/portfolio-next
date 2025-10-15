import { Container } from "@/components/container";
import { Badge } from "@/components/ui";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";

export const MainLayoutFooter = () => (
  <Container as="footer" className="bg-black w-full py-16 flex items-center">
    <div className="container mx-auto px-7">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-8 mb-8 md:mb-0">
          <a href="#">
            <Badge leftSection={<IconBrandGithub />} color="black">
              GitHub
            </Badge>
          </a>
          <a href="#">
            <Badge leftSection={<IconMail />} color="black">
              LinkedIn
            </Badge>
          </a>
        </div>
        <div className=" text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Damian Kaczorowski. All rights reserved.
          {/* © {new Date().getFullYear()} Test Testowski. All rights reserved. */}
        </div>
      </div>
    </div>
  </Container>
);
