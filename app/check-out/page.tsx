'use client';
import React, { useEffect, useState } from 'react';
import { Check, Lock, Mail, CreditCard, Shield } from 'lucide-react';
import { PRIMARY_COLOR } from '@/app/common';
import { checkOutUser } from '@/services/subscription';
import { useRouter } from 'next/navigation';

interface PricingDetails {
  planName: string;
  basePrice: number;
  taxRate: number;
}

const CheckoutPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('yearly');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPlan = localStorage.getItem('plan');
      if (storedPlan) {
        setSelectedPlan(storedPlan);
      }
    }
  }, []);

  const pricingDetails: Record<string, PricingDetails> = {
    monthly: {
      planName: 'Monthly Plan',
      basePrice: 12.99,
      taxRate: 0,
    },
    yearly: {
      planName: 'Yearly Plan',
      basePrice: 99.99,
      taxRate: 0,
    },
    free_trials: {
      planName: '1-Day Free Trial',
      basePrice: 0.1,
      taxRate: 0,
    },
  };

  const currentPlan = pricingDetails[selectedPlan] || pricingDetails.yearly;
  const taxAmount = currentPlan.basePrice * currentPlan.taxRate;
  const totalAmount = currentPlan.basePrice + taxAmount;

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsProcessing(true);
    const response = await checkOutUser({ email: email, plan: selectedPlan });
    console.log('🚀 ~ handleSubmit ~ response:', response);
    if (response.data.status) {
      const payload = response.data.payload;
      if (payload.checkout_url) {
        window.location.href = payload.checkout_url;
      }
      if (payload.redirect_url) {
        localStorage.setItem('userId', payload.user_id);
        localStorage.setItem('email', payload.email);
        localStorage.setItem('otp', payload.otp);
        router.push(payload.redirect_url);
      }
    }

    // setTimeout(() => {
    //     console.log('Processing payment for:', { email, plan: currentPlan.planName, total: totalAmount });
    //     alert('Payment processing... (Demo mode)');
    //     setIsProcessing(false);
    // }, 2000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-3 relative overflow-hidden"
      style={{ backgroundColor: 'white' }}>
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-3">
          <div
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-2 shadow-lg"
            style={{ backgroundColor: PRIMARY_COLOR }}>
            <Lock className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-1">
            Secure Checkout
          </h1>
          <p className="text-xs text-gray-600">
            Complete your purchase securely
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Mail
                    className={`w-4 h-4 transition-colors ${
                      focusedField === 'email'
                        ? 'text-[#124D95]'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your@email.com"
                  className={`w-full pl-9 pr-3 py-2 border-2 rounded-lg text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none ${
                    emailError
                      ? 'border-red-300 focus:border-red-500'
                      : focusedField === 'email'
                      ? 'border-[#124D95] bg-[#E9F5FF]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>

            <div
              className="rounded-lg p-3 space-y-2 border-2"
              style={{
                backgroundColor: '#E9F5FF',
                borderColor: PRIMARY_COLOR,
              }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 bg-white rounded-md shadow-sm">
                  <CreditCard
                    className="w-4 h-4"
                    style={{ color: PRIMARY_COLOR }}
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  Order Summary
                </h3>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center py-1">
                  <span className="text-xs text-gray-600 font-medium">
                    Selected Plan
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: PRIMARY_COLOR }}>
                    {currentPlan.planName}
                  </span>
                </div>

                <div className="h-px bg-gray-300" />

                <div className="flex justify-between items-center py-1">
                  <span className="text-xs text-gray-600">Subtotal</span>
                  <span className="text-sm text-gray-900 font-medium">
                    ${currentPlan.basePrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-xs text-gray-600">
                    Tax ({(currentPlan.taxRate * 100).toFixed(0)}%)
                  </span>
                  <span className="text-sm text-gray-900 font-medium">
                    ${taxAmount.toFixed(2)}
                  </span>
                </div>

                <div className="h-px bg-gray-400" />

                <div className="flex justify-between items-center py-2 bg-white rounded-lg px-3 shadow-sm">
                  <span className="text-sm font-bold text-gray-900">Total</span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: PRIMARY_COLOR }}>
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-2.5 border-2"
              style={{
                backgroundColor: '#E9F5FF',
                borderColor: PRIMARY_COLOR,
              }}>
              <label className="flex items-start gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    onFocus={() => setFocusedField('terms')}
                    onBlur={() => setFocusedField(null)}
                    className="w-4 h-4 border-2 border-gray-300 rounded appearance-none cursor-pointer transition-all focus:ring-2 focus:ring-offset-1"
                    style={{
                      backgroundColor: termsAccepted ? PRIMARY_COLOR : 'white',
                      borderColor: termsAccepted ? PRIMARY_COLOR : '#9CA3AF',
                      outlineColor: PRIMARY_COLOR,
                    }}
                  />
                  {termsAccepted && (
                    <div className="absolute pointer-events-none">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>
                <span className="text-xs text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                  I agree to the{' '}
                  <a
                    href="#"
                    className="font-semibold hover:underline"
                    style={{ color: PRIMARY_COLOR }}>
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a
                    href="#"
                    className="font-semibold hover:underline"
                    style={{ color: PRIMARY_COLOR }}>
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={
                isProcessing || !email || !termsAccepted || !!emailError
              }
              className={`w-full py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                isProcessing || !email || !termsAccepted || !!emailError
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                  : 'text-white hover:shadow-xl hover:opacity-90'
              }`}
              style={{
                backgroundColor:
                  isProcessing || !email || !termsAccepted || !!emailError
                    ? undefined
                    : PRIMARY_COLOR,
              }}>
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  Complete Purchase
                </>
              )}
            </button>
          </form>

          <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Lock className="w-3 h-3" />
            <span>Secured with SSL encryption</span>
          </div>
        </div>

        <div className="mt-3 text-center">
          <div
            className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md border-2"
            style={{ borderColor: PRIMARY_COLOR }}>
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#E9F5FF' }}>
              <Check className="w-3.5 h-3.5" style={{ color: PRIMARY_COLOR }} />
            </div>
            <span
              className="text-xs font-semibold"
              style={{ color: PRIMARY_COLOR }}>
              30-Day Money-Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
