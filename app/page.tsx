import HeroSection from "@/components/HeroSection";
import ProjectExperienceSection from "@/components/projucts";
import SkillsSection from "@/components/skillSection";
import EducationSection from "@/components/EducationSection"
import CertificationsSection from "@/components/coursesAndCertifi"


export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ProjectExperienceSection />
      <EducationSection />
      <CertificationsSection />


    </div>
  );
}
