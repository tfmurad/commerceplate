"use client"
import { ProductVariant } from '@/lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import {
  // @ts-ignore
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus
} from 'react-dom';
import { BiLoaderAlt } from "react-icons/bi";
import { addItem } from './actions';
import Link from 'next/link';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  stylesClass,
  handle
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  stylesClass: string;
  handle:string | null;
}) {
  const { pending } = useFormStatus();
  const buttonClasses = stylesClass;
  const disabledClasses = 'cursor-not-allowed flex';

  const DynamicTag = handle === null ? 'button' : Link;

  if (!availableForSale) {
    return (
      <button disabled aria-disabled className={`${buttonClasses} ${disabledClasses}`}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <DynamicTag
      href={`/product/${handle}`}
        aria-label="Please select an option"
        aria-disabled
        className={`${buttonClasses} ${DynamicTag === "button" && disabledClasses}`}
      >
        Select Variant
      </DynamicTag>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending ? 'true' : 'false'}
      className={`${buttonClasses}`}
    >
      {pending ? <BiLoaderAlt className={`animate-spin w-[70px] md:w-[85px]`} size={26}/> : 'Add To Cart'}
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  stylesClass,
  handle,
  defaultVariantId
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  stylesClass: string;
  handle:string | null;
  defaultVariantId: string | undefined;
}) {
  const [message, formAction] = useFormState(addItem, defaultVariantId);
  const searchParams = useSearchParams();

  // Find the first variant that matches the selected option
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.some(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  // If variant is found, use its ID; otherwise, use the defaultVariantId
  const selectedVariantId = variant?.id || defaultVariantId;

  // Bind the selectedVariantId to the form action
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        stylesClass={stylesClass}
        handle={handle}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
