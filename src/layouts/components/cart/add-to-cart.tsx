'use client';

import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import {
  // @ts-ignore
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus
} from 'react-dom';
import LoadingDots from "../loading-dots";
import { ProductVariant } from "@/lib/shopify/types";
import { addItem } from "./actions";

function SubmitButton({
  availableForSale,
  selectedVariantId,
  stylesClass
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  stylesClass:string;
}) {
  const { pending } = useFormStatus();
  const buttonClasses = stylesClass;
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        {/* <div className="inline-block">
          <FaPlus className="h-5" />
        </div> */}
        Select Variant
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:opacity-90 flex': true,
        disabledClasses: pending
      })}
    >
      Add To Cart
      <div>
        {pending ? <LoadingDots className=" bg-white" /> : ''}
      </div>
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  stylesClass
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  stylesClass: string;
}) {

  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} stylesClass={stylesClass}/>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
