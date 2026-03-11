import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 px-4 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Curious Where Your SaaS Could Be Getting Discovered?
        </h2>
        <p className="text-muted-foreground mb-8">
          Get a free audit to find out where your brand stands in AI answers and community discussions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card"
          />
          <Button>Request Audit</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
