import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Planos que crescem com você
          </h1>
          <p>
            Comece grátis e faça upgrade conforme sua necessidade de geração de
            anúncios aumenta.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.productId} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: (typeof PRICING_PLANS)[number] }) {
  return (
    <Card className={`flex flex-col ${plan.popular ? "relative" : ""}`}>
      {plan.popular && (
        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
          Popular
        </span>
      )}

      <CardHeader>
        <CardTitle className="font-medium">{plan.name}</CardTitle>
        <span className="my-3 block text-2xl font-semibold">{plan.price}</span>
        <CardDescription className="text-sm">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <hr className="border-dashed" />

        <ul className="list-outside space-y-3 text-sm">
          {plan.features.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-3" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          asChild
          variant={plan.popular ? "default" : "outline"}
          className="w-full"
        >
          <Link href="">{plan.buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
