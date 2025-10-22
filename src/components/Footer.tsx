import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8" />
              <span className="text-2xl font-bold">Bricks</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Facilities Intelligence for Mission-Driven Organizations
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Continuous, board-ready visibility into facilities spend and risk.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Senior Living</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Nonprofits</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; 2025 Bricks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
