import { event } from "@/lib/pixel";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import type {
  PaymentRequest as StripePaymentRequest,
  StripePaymentRequestButtonElement,
} from "@stripe/stripe-js";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { trackCustomEvent } from "@/lib/meta";

type OrderBump = {
  id: string;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
  description: ReactNode;
};

type PaymentFormProps = {
  totalAmount: number;
  orderBumps?: OrderBump[];
  selectedBumps?: Record<string, boolean>;
  onToggleBump?: (id: string, checked: boolean) => void;
  customerFirstName: string;
  onCustomerFirstNameChange: (value: string) => void;
  customerEmail: string;
  onCustomerEmailChange: (value: string) => void;
};

export default function PaymentForm({
  totalAmount,
  orderBumps,
  selectedBumps,
  onToggleBump,
  customerFirstName,
  onCustomerFirstNameChange,
  customerEmail,
  onCustomerEmailChange,
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null | undefined>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentRequest, setPaymentRequest] =
    useState<StripePaymentRequest | null>(null);
  const paymentRequestButtonRef =
    useRef<StripePaymentRequestButtonElement | null>(null);
  const [showPaymentRequestButton, setShowPaymentRequestButton] =
    useState(false);
  const amountInCents = Math.trunc(Math.max(totalAmount, 0) * 100);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: customerFirstName,
            email: customerEmail,
          },
        },
        // Nakon glavne kupnje vodi na OTO1 (Stripe dodaje payment_intent parametar)
        return_url: `${window.location.origin}/oto1?redirect_status=succeeded`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  const unmountPaymentRequestButton = useCallback(() => {
    if (paymentRequestButtonRef.current) {
      paymentRequestButtonRef.current.unmount();
      paymentRequestButtonRef.current = null;
    }
    setShowPaymentRequestButton(false);
  }, []);

  const mountPaymentRequestButton = useCallback(async () => {
    if (!stripe || !elements || !amountInCents) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: "HR",
      currency: "eur",
      total: {
        label: "Ukupno",
        amount: amountInCents,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    const result = await pr.canMakePayment();
    if (!result) {
      return;
    }

    const prButton = elements.create("paymentRequestButton", {
      paymentRequest: pr,
    });

    const target = document.getElementById("payment-request-button");
    if (!target) {
      return;
    }

    prButton.mount(target);
    paymentRequestButtonRef.current = prButton;
    setPaymentRequest(pr);
    setShowPaymentRequestButton(true);
  }, [amountInCents, elements, stripe]);

  useEffect(() => {
    if (!stripe || !elements || paymentRequest || !amountInCents) {
      return;
    }

    mountPaymentRequestButton();

    return () => {
      unmountPaymentRequestButton();
    };
  }, [
    amountInCents,
    elements,
    mountPaymentRequestButton,
    paymentRequest,
    stripe,
    unmountPaymentRequestButton,
  ]);

  useEffect(() => {
    if (!paymentRequest || !amountInCents) {
      return;
    }

    try {
      paymentRequest.update({
        total: {
          label: "Ukupno",
          amount: amountInCents,
        },
      });
      console.log("Payment Request total updated to:", amountInCents);
    } catch (error) {
      console.warn(
        "Payment Request update failed. Recreating button as fallback.",
        error
      );
      unmountPaymentRequestButton();
      setPaymentRequest(null);
      mountPaymentRequestButton();
    }
  }, [
    amountInCents,
    mountPaymentRequestButton,
    paymentRequest,
    unmountPaymentRequestButton,
  ]);

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* <LinkAuthenticationElement id="link-authentication-element" /> */}
        {/* Customer Information Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Ime*
            </label>
            <input
              type="text"
              value={customerFirstName}
              onChange={(e) => onCustomerFirstNameChange(e.target.value)}
              placeholder="npr. Ana"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1C7C7D] focus:border-transparent text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Email adresa*
            </label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => onCustomerEmailChange(e.target.value)}
              placeholder="vaš@email.com"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1C7C7D] focus:border-transparent text-sm sm:text-base"
              required
            />
          </div>
        </div>
        <div className="md:p-4 md:bg-white md:border md:border-gray-300 md:rounded-md space-y-3">
          <h4 className="font-serif text-sm font-medium text-gray-700">
            Podaci za plaćanje
          </h4>
          <p className="text-sm text-gray-500">
            Napomena: Ovo je jednokratno plaćanje. Stripe ponekad prikazuje standardnu sigurnosnu poruku o budućim naplatama, ali ova kupnja NIJE pretplata niti ima automatske naplate. Plaćaš putem Stripe-a, najveće svjetske platforme za obradu kartičnih uplata, tako da su tvoji kartični podaci u potpunosti zaštićeni.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span>✅ Visa</span>
            <span>✅ Mastercard</span>
            <span>✅ 256-bit SSL zaštita</span>
            <span>✅ Plaćanje preko Stripe-a (najveća svjetska platforma za kartična plaćanja)</span>
          </div>
          <p className="mt-2 mb-1 text-xs text-gray-500 leading-snug">
            <span className="font-medium">ℹ️ Mali dodatak:</span> Plaćanje ide preko Stripe-a, najveće svjetske platforme za obradu kartičnih uplata, pa su tvoji podaci 100% sigurni. Poruka ispod je njihova standardna pravna napomena — ovo je jednokratno plaćanje i kartica se neće teretiti bez tvoje nove potvrde.
          </p>
          <div
            id="payment-request-button"
            className={showPaymentRequestButton ? "mb-4" : "hidden"}
          />
          <PaymentElement
            id="payment-element"
            options={{
              layout: {
                type: "tabs",
                defaultCollapsed: false,
              },
            }}
          />
        </div>

        {orderBumps?.length ? (
          <div className="space-y-5 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cherry">
              Preporučeno
            </p>
            {orderBumps.map((bump) => {
              const checked = !!selectedBumps?.[bump.id];
              return (
                <div
                  key={bump.id}
                  className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-5 shadow-sm space-y-4"
                >
                  <label
                    htmlFor={`order-bump-${bump.id}`}
                    className="flex flex-wrap items-center gap-3 rounded-xl bg-[#FFFDA5] px-4 py-3 cursor-pointer"
                  >
                    <span className="text-red-500 font-bold animate-pulse text-lg">
                      ➜
                    </span>
                    <input
                      id={`order-bump-${bump.id}`}
                      type="checkbox"
                      className="h-5 w-5 border-2 border-gray-400 rounded focus:ring-2 focus:ring-offset-1 focus:ring-cherry"
                      checked={checked}
                      onChange={(event) =>
                        onToggleBump?.(bump.id, event.target.checked)
                      }
                    />
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-green-700">
                        {bump.title}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="line-through">{bump.oldPrice}€</span>
                        <span className="font-semibold text-green-700">
                          {bump.price}€
                        </span>
                      </div>
                    </div>
                  </label>
                  <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-left">
                    <div className="w-1/2 sm:w-32 mx-auto sm:mx-0">
                      <div className="overflow-hidden rounded-xl border border-gray-200 bg-ivory">
                        <Image
                          src={bump.image}
                          alt={bump.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left">
                      {bump.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        <button
          className="w-full bg-[#1C7C7D] hover:bg-[#165a5c] text-white py-4 px-4 sm:py-8 sm:px-8 rounded-lg font-bold text-lg sm:text-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
          type="submit"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          {isLoading ? (
            <svg
              className="mr-2 sm:mr-3 size-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <ArrowRight className="w-8 h-8 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
          )}
          <span className="text-center">
            {isLoading
              ? "Plaćanje u tijeku..."
              : "Plati SAD, i pristupi programu ODMAH"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </div>
    </form>
  );
}
