import { CHECKOUT_LINK, isExternalCheckout } from "@/lib/checkout";

type Props = {
  className?: string;
  children: React.ReactNode;
  // optional override (e.g. legal pages where a link should go to /pricing first)
  href?: string;
};

/**
 * Single component for every "Get the Kit" button.
 * Routes to NEXT_PUBLIC_CHECKOUT_LINK if set, otherwise /checkout-coming-soon.
 */
export function BuyLink({ className = "btn-primary", children, href }: Props) {
  const target = href ?? CHECKOUT_LINK;
  const external = isExternalCheckout(target);

  return (
    <a
      href={target}
      className={className}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
