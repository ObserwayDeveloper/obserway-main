import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51PTMTsFobreNlbDkIe53YxFlekZss4ihtQGCc2C8JHact1THjq7MPh94IfM5FtKphNSQuP2fostLfqewnB2Q8hOn00gYuiLOJc");

export default function Home() {

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: 'price_1PmzpgFobreNlbDkK7tVF78M', quantity: 1 }],
      successUrl: `${window.location.href}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.href,
    });

    if (error) {
      console.warn('Error:', error);
    }


  };


  return (
    <button onClick={handleClick}>Checkout</button>
  );
}
