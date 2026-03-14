import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MotionSection from "@/components/MotionSection";
import { useContactModal } from "@/hooks/useContactModal";

const CTASection = () => {
  const { open: openContact } = useContactModal();

  return (
    <section className="py-20 px-4 text-center">
      <MotionSection className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Curious Where Your Brand Could Be Getting Discovered?

        </h2>
        <p className="text-muted-foreground mb-8">
          Get a free audit to find out where your brand stands in AI answers and community discussions.
        </p>
        <div className="flex justify-center">
          <Button size="lg"  onClick={openContact} variant="outline"><b></>Get Audit</b>
          </Button>
        </div>
      </MotionSection>
    </section>);

};

export default CTASection;